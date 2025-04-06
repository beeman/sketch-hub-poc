import type {Sketch} from "@prisma/client";
import {SketchUiItem} from "./sketch-ui-item";

export function SketchUiGrid({items, deleteSketch}: {
    items: Sketch[],
    deleteSketch: (slug: string) => Promise<void>
}) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <div key={item.id} className="border rounded-md border-stone-200 dark:border-stone-700">
                    <SketchUiItem item={item} deleteSketch={deleteSketch}/>
                </div>
            ))}
        </div>
    )
}

