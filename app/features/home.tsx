import type {Route} from "./+types/home";
import {Link} from "react-router";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Sketch Hub POC"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}


export default function Home() {
    return <div className='flex flex-col gap-4'>

        <main className='flex-1 p-4 flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-lg'>Sketch Hub</h1>
                <Link to="/sketch/new">New sketch</Link>
            </div>

            <Link to="/sketch">Sketch list</Link>
        </main>
    </div>
}


