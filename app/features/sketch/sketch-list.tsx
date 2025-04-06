import {prisma} from "~/lib/db.server";
import type {Route} from "./+types/sketch-list";
import {Link} from "react-router";
import {SketchUiGrid} from "./ui/sketch-ui-grid";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Sketch Hub POC"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}


export async function loader() {
    const items = await prisma.sketch.findMany({
        orderBy: {createdAt: 'desc'},
    })

    return {items,}
}

export default function SketchList({loaderData}: Route.ComponentProps) {
    const {items} = loaderData;
    return <div className='flex flex-col gap-4'>

        <main className='flex-1 p-4 flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-lg'>Sketches</h1>
                <Link to="/sketch/new">New sketch</Link>
            </div>
            {items?.length ? <SketchUiGrid items={items}/> : <div>
                You have no sketches yet. Create one <Link to="/sketch/new">here</Link>.
            </div>
            }
        </main>
    </div>
}


