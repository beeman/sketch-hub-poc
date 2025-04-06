import {type Sketch} from "@prisma/client";

export function SketchUiRender({sketch, updateSketch}: {
    sketch: Sketch,
    updateSketch: (content: string) => Promise<void>
}) {
    return <div>
        <h1>{sketch.title}</h1>
        <button type="submit" onClick={() => updateSketch(sketch.content?.toString() ?? '{}')}>Update</button>
        <pre>{JSON.stringify(sketch, null, 2)}</pre>
    </div>
}