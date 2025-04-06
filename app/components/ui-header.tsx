import {UiHeaderLink} from './ui-header-link'
import {useUi} from './ui-context'
import {UiLogoLink} from './ui-logo-link'
import {ThemeSelect} from './theme-select'

export function UiHeader() {
    const {config} = useUi()

    return (
        <header>
            <div className="left">
                <UiLogoLink to="/"/>
                <nav>
                    {config.headerLinks.map((link) => (
                        <UiHeaderLink key={link.to} link={link}/>
                    ))}
                </nav>
            </div>
            <div className="right">
                {config.headerProfile}
                <ThemeSelect/>
            </div>
        </header>
    )
}
