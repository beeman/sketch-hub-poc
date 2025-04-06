import {prisma} from "~/lib/db.server";

export async function prismaSketchCreate(data: FormData) {
    const title = data.get('title');
    if (!title || typeof title !== 'string') {
        throw new Error('title is required');
    }
    const slug = title.toLowerCase().replaceAll(' ', '-');

    return await prisma.sketch.create({data: {content: '{}', slug, title}})
}
