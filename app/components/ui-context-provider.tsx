import {type ReactNode} from 'react'
import {type UiConfig, UiContext} from './ui-context'
import {UiLayout} from './ui-layout'

export function UiContextProvider({children, config}: { children: ReactNode; config: UiConfig }) {
    return (
        <UiContext.Provider value={{config}}>
            <UiLayout>{children}</UiLayout>
        </UiContext.Provider>
    )
}
