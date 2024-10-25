import { Atom } from 'jotai'
import React from 'react'

export type Mode = 'system' | 'light' | 'dark'

export interface DarkContextType {
  mode: Mode
  modes: Mode[]
  changeMode: (newMode: Mode) => void
}

export const Dark: React.Context<DarkContextType | undefined>

export const modes: Mode[]

export interface DarkModeProviderProps {
  children: React.ReactNode
}

export const DarkModeProvider: React.FC<DarkModeProviderProps>

export function useDarkmode(): DarkContextType

export const dark: Atom<Mode>