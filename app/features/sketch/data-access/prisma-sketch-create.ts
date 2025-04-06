import type {ExcalidrawElement} from "@excalidraw/excalidraw/element/types";
import {Prisma, prisma} from "~/lib/db.server";
import type {AppState} from "@excalidraw/excalidraw/types";

export type ExcalidrawSketch = {
    appState?: AppState,
    elements?: ExcalidrawElement[]
}

export async function prismaSketchCreate(data: FormData) {
    const title = data.get('title');
    if (!title || typeof title !== 'string') {
        throw new Error('title is required');
    }
    const slug = title.toLowerCase().replaceAll(' ', '-');

    return await prisma.sketch.create({data: {content: getDefaultSketch(), slug, title}})
}

export function getDefaultSketch(): Prisma.InputJsonValue {
    return {
        elements: [
            {
                "id": "-IH8bv-Bnq3x5KIG9HJPz",
                "type": "rectangle",
                "x": 288.26249998807907,
                "y": 141.70314025878906,
                "width": 184.03439331054688,
                "height": 92.3812255859375,
                "angle": 0,
                "strokeColor": "#1e1e1e",
                "backgroundColor": "transparent",
                "fillStyle": "solid",
                "strokeWidth": 2,
                "strokeStyle": "solid",
                "roughness": 1,
                "opacity": 100,
                "groupIds": [],
                "frameId": null,
                "roundness": {
                    "type": 3
                },
                "seed": 1766650634,
                "version": 91,
                "versionNonce": 674938774,
                "isDeleted": false,
                "boundElements": [
                    {
                        "type": "text",
                        "id": "AyXRDy2lXuop8XXvPUXM0"
                    }
                ],
                "updated": 1743907988450,
                "link": null,
                "locked": false
            }, {
                "id": "AyXRDy2lXuop8XXvPUXM0",
                "type": "text",
                "x": 323.61972349882126,
                "y": 175.3937530517578,
                "width": 113.3199462890625,
                "height": 25,
                "angle": 0,
                "strokeColor": "#1e1e1e",
                "backgroundColor": "transparent",
                "fillStyle": "solid",
                "strokeWidth": 2,
                "strokeStyle": "solid",
                "roughness": 1,
                "opacity": 100,
                "groupIds": [],
                "frameId": null,
                "roundness": null,
                "seed": 137094166,
                "version": 50,
                "versionNonce": 1361730774,
                "isDeleted": false,
                "boundElements": null,
                "updated": 1743907988450,
                "link": null,
                "locked": false,
                "text": "Hello, world!",
                "fontSize": 20,
                "fontFamily": 5,
                "textAlign": "center",
                "verticalAlign": "middle",
                "containerId": "-IH8bv-Bnq3x5KIG9HJPz",
                "originalText": "Hello, world!",
                "autoResize": true,
                "lineHeight": 1.25
            }

        ]
    };

}