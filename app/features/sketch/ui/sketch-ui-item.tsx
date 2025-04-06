import type {Sketch} from "@prisma/client";
import {Link} from "react-router";

export function SketchUiItem({item, deleteSketch}: { item: Sketch, deleteSketch: (slug: string) => Promise<void> }) {
    return (
        <div className="p-4 flex flex-col gap-2">
            <Link to={`/sketch/${item.slug}`}><h2 className="text-xl font-bold">{item.title}</h2></Link>
            <div className="flex justify-end">
                <button onClick={() => {
                    if (!confirm('Are you sure you want to delete this sketch?')) {
                        return;
                    }
                    return deleteSketch(item.slug);
                }}>Delete
                </button>
            </div>
        </div>
    )
}