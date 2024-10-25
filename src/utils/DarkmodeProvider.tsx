import React, { createContext, useCallback, useEffect, useContext } from 'react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const dark = atomWithStorage<Mode>('mode', 'system')

export type Mode = 'system' | 'light' | 'dark'

interface DarkContextType {
  mode: Mode
  modes: Mode[]
  changeMode: (newMode: Mode) => void
}

export const Dark = createContext<DarkContextType | undefined>(undefined)

export const modes: Mode[] = ['system', 'light', 'dark']

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useAtom(dark)

  const applyTheme = useCallback((isDark: boolean) => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const changeMode = useCallback((newMode: Mode) => {
    setMode(newMode)
  }, [setMode])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (mode === 'system') {
        applyTheme(event.matches)
      }
    }

    const applyCurrentTheme = () => {
      if (mode === 'system') {
        applyTheme(mediaQuery.matches)
      } else {
        applyTheme(mode === 'dark')
      }
    }

    applyCurrentTheme()

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [mode, applyTheme])

  return (
    <Dark.Provider value={{ mode, modes, changeMode }}>
      {children}
    </Dark.Provider>
  )
}

export const useDarkmode = (): DarkContextType => {
  const context = useContext(Dark)
  if (context === undefined) {
    throw new Error('useDarkmode must be used within a DarkModeProvider')
  }
  return context
}