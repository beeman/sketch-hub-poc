import type {Route} from "./+types/home";
import {ThemeSelect} from "~/routes/theme-select";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function Home() {
    return <div className='flex justify-between p-4 dark:bg-neutral-900 bg-neutral-100'>
        <div>Sketch Hub POC</div>
        <ThemeSelect/>
    </div>
}


