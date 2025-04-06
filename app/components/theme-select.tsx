import {Theme, useTheme} from "remix-themes";

export function useThemes() {
    const themes: { label: string, value: Theme }[] = [
        {label: 'Light', value: Theme.LIGHT},
        {label: 'Dark', value: Theme.DARK},
    ];
    const [theme, setTheme] = useTheme();

    return {setTheme, theme, themes}
}

export function ThemeSelect() {
    const {theme, setTheme, themes} = useThemes();

    return (
        <div>
            <select value={theme?.toString()} onChange={(e) => setTheme(e.target.value as Theme)}>
                {themes.map(({label, value}) => <option key={value} value={value}>{label}</option>)}
            </select>

        </div>
    );
}