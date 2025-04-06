import {type UiLink} from './ui-context'
import {Link, useLocation} from "react-router";

export function UiHeaderLink({link}: { link: UiLink }) {
    const {pathname} = useLocation()
    const isActive = link.to === '/' ? pathname === '/' : pathname.startsWith(link.to)

    return (
        <Link to={link.to} className={isActive ? 'active' : ''}>
            {link.label}
        </Link>
    )
}
