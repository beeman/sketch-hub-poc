import {createContext, type ReactNode, useContext} from 'react'

export interface UiConfig {
    footer: ReactNode
    headerLinks: UiLink[]
    headerProfile: ReactNode
    logo?: string
    name: string
}

export interface UiLink {
    label: string
    to: string
}

export interface UiContextValue {
    config: UiConfig
}

export const UiContext = createContext<UiContextValue>({} as UiContextValue)

export function useUi() {
    return useContext(UiContext)
}
