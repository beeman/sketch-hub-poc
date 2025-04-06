import {prisma} from "~/lib/db.server";

export async function prismaSketchUpdate(slug: string, data: FormData) {
    const content = data.get('content');
    if (!content || typeof content !== 'string') {
        throw new Error('content is required');
    }

    return await prisma.sketch.update({
        where: {slug},
        data: {content},
    })
}

