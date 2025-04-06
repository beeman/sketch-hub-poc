import type {Route} from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "About | Sketch Hub POC"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function About() {
    return <div className='flex flex-col gap-4'>
        <main className='flex-1 p-4'>
            <h1>About</h1>
        </main>
    </div>
}


