import type {Route} from "./+types/sketch-detail";
import {data, useFetcher} from "react-router";
import {prismaSketchUpdate} from "~/features/sketch/data-access/prisma-sketch-update";

import {prismaSketchFindBySlug} from "~/features/sketch/data-access/prisma-sketch-find-by-slug";
import {SketchUiRender} from "~/features/sketch/ui/sketch-ui-render";

export function meta({data}: Route.MetaArgs) {
    return [
        {title: `${data.item?.title} | Sketch Hub POC`},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export async function loader({params}: Route.LoaderArgs) {
    const item = await prismaSketchFindBySlug(params.slug);

    return {item}
}

export async function action({request, params}: Route.ActionArgs) {
    const updated = await prismaSketchUpdate(params.slug, await request.formData())

    return data({updated})
}

export default function SketchDetail({loaderData}: Route.ComponentProps) {
    const fetcher = useFetcher()

    if (!loaderData.item) {
        return <div>Not found</div>
    }

    async function updateSketch(content: string) {
        const data = new FormData();
        data.append('content', content);
        await fetcher.submit(data, {method: 'post'})
    }

    return <SketchUiRender sketch={loaderData.item} updateSketch={updateSketch}/>
}