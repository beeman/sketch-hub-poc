import {prisma} from "~/lib/db.server";

export async function prismaSketchDelete(data: FormData) {
    const slug = data.get('slug');
    if (!slug || typeof slug !== 'string') {
        throw new Error('slug is required');
    }

    const found = await prisma.sketch.findUnique({
        where: {slug},
    })
    if (!found) {
        throw new Error('Sketch not found');
    }
    return await prisma.sketch.delete({
        where: {slug},
    })
}