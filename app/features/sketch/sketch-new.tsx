import type {Route} from "./+types/sketch-new";
import {Form, redirect} from "react-router";
import {prisma} from "~/lib/db.server";

export async function action(props: Route.ActionArgs) {
    const {request} = props;
    const body = await request.formData();
    const title = body.get('title');
    if (!title || typeof title !== 'string') {
        throw new Error('title is required');
    }
    const created = await prisma.sketch.create({
        data: {
            title,
            slug: title.toLowerCase().replaceAll(' ', '-'),
            content: {},
        },
    })

    return redirect(`/sketch/${created.slug}`);
}

export default function SketchNew() {
    return <div>
        <h1>New Sketch</h1>
        <Form method="post">
            <input type="text" name="title" defaultValue={`Sketch ${Date.now()}`}/>
            <button type="submit">Submit</button>
        </Form>
    </div>
}