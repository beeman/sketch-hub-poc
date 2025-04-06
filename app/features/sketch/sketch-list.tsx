import type {Route} from "./+types/sketch-list";
import {data, Link, useFetcher} from "react-router";
import {SketchUiGrid} from "./ui/sketch-ui-grid";
import {prismaSketchFindAll} from "./data-access/prisma-sketch-find-all";
import {prismaSketchCreate} from "./data-access/prisma-sketch-create";
import {prismaSketchDelete} from "~/features/sketch/data-access/prisma-sketch-delete";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Browse sketches | Sketch Hub POC"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}


export async function loader() {
    return {items: await prismaSketchFindAll()}
}

export async function action({request}: Route.ActionArgs) {
    const body = await request.formData();
    const action = body.get('action');
    if (action === 'create') {
        const created = await prismaSketchCreate(body)
        console.log(`Created sketch ${created.slug}`, created);
        return data({created})
    }
    if (action === 'delete') {
        const deleted = await prismaSketchDelete(body)
        console.log(`Deleted sketch ${deleted.slug}`, deleted);
        return data({deleted})
    }
    throw new Error('Invalid action');
}

export default function SketchList({loaderData}: Route.ComponentProps) {
    const {items} = loaderData;
    const fetcher = useFetcher({});

    async function deleteSketch(slug: string) {
        const data = new FormData();
        data.append('action', 'delete');
        data.append('slug', slug);
        await fetcher.submit(data, {method: 'post'})
    }

    async function createSketch() {
        const name = prompt('Sketch name', `Sketch ${Date.now()}`);
        if (!name) {
            return;
        }
        const data = new FormData();
        data.append('action', 'create');
        data.append('title', name);
        await fetcher.submit(data, {method: 'post'})
    }

    return <div className='flex flex-col gap-4'>
        <main className='flex-1 p-4 flex flex-col gap-4'>
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-lg'>Sketches</h1>
                <button onClick={createSketch}>New sketch</button>
            </div>
            {items?.length ? <SketchUiGrid items={items} deleteSketch={deleteSketch}/> : <div>
                You have no sketches yet. Create one <Link to="/sketch/new">here</Link>.
            </div>
            }
        </main>
    </div>
}


