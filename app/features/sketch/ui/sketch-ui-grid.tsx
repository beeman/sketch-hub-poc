import type {Sketch} from "@prisma/client";
import {Link} from "react-router";

export function SketchUiGrid({items}: { items: Sketch[] }) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <div key={item.id} className="border rounded-md border-stone-200 dark:border-stone-700">
                    <SketchUiItem item={item}/>
                </div>
            ))}
        </div>
    )
}

export function SketchUiItem({item}: { item: Sketch }) {
    return (
        <div className="p-4 flex flex-col gap-2">
            <Link to={`/sketch/${item.slug}`}><h2 className="text-xl font-bold">{item.title}</h2></Link>
        </div>
    )
}