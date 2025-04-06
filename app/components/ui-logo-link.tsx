import {UiLogo} from './ui-logo'
import {Link} from "react-router";

export function UiLogoLink({to = '/'}: { to?: string }) {
    return (
        <Link to={to}>
            <UiLogo/>
        </Link>
    )
}
