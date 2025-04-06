import {useUi} from './ui-context'

export function UiLogo() {
    const {config} = useUi()

    return (
        <div className="logo">
            {config.logo ? <img src={config.logo} alt="logo" height={42} width={42}/> : null}
            <span>{config.name}</span>
        </div>
    )
}

