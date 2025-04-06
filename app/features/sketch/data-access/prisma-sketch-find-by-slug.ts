import {prisma} from "~/lib/db.server";

export async function prismaSketchFindBySlug(slug: string) {
    const found = await prisma.sketch.findUnique({
        where: {slug},
    })
    if (!found) {
        throw new Error('Sketch not found');
    }
    return found;
}