import {prisma} from "~/lib/db.server";

export async function prismaSketchFindAll() {
    return await prisma.sketch.findMany({
        orderBy: {createdAt: 'desc'},
    })
}

