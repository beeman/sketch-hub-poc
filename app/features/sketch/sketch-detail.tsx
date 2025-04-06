import {prisma} from "~/lib/db.server";
import type {Route} from "./+types/sketch-detail";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Sketch Hub POC"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export async function loader({params}: Route.LoaderArgs) {
    const {slug} = params;
    const item = await prisma.sketch.findUnique({
        where: {
            slug: slug,
        },
    })

    return {item}
}

export default function SketchDetail(props: Route.ComponentProps) {
    const {item} = props.loaderData;
    return <div>
        <h1>{item?.title}</h1>
        <p>{JSON.stringify(item?.content, null, 2)}</p>
    </div>
}