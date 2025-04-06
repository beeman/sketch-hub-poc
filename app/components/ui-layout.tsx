import {type ReactNode} from 'react'
import {useUi} from './ui-context'
import {UiHeader} from './ui-header'

export function UiLayout({children}: { children: ReactNode }) {
    const {config} = useUi()
    return (
        <div className="ui-layout">
            <UiHeader/>
            <main>{children}</main>
            {config.footer ? <footer>{config.footer}</footer> : null}
        </div>
    )
}
