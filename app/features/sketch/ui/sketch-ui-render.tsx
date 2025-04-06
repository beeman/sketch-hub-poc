import {type Sketch} from "@prisma/client";
import React from "react";
import {UiClientRender} from "~/components/ui-client-render";
import type {ExcalidrawInitialDataState} from "@excalidraw/excalidraw/types";
import {Theme, useTheme} from "remix-themes";

const Excalidraw = React.lazy(() => import('./sketch-ui-draw'));

export function SketchUiRender({sketch, updateSketch}: {
    sketch: Sketch,
    updateSketch: (content: string) => Promise<void>
}) {
    const [theme] = useTheme();
    const isDark = theme === Theme.DARK;
    const initialData: ExcalidrawInitialDataState = sketch.content as ExcalidrawInitialDataState;
    const [elements, setElements] = React.useState<ExcalidrawInitialDataState["elements"]>(initialData.elements ?? []);
    return <UiClientRender>
        <div className='h-full flex flex-col justify-between'>
            <div className="flex justify-between items-center p-2 dark:bg-stone-800">
                <h1>{sketch.title}</h1>
                <button type="submit" onClick={() => updateSketch(JSON.stringify({...initialData, elements}))}>Save
                </button>
            </div>
            <div className='flex-1'>
                <Excalidraw
                    gridModeEnabled
                    theme={isDark ? 'dark' : 'light'}
                    initialData={initialData}
                    onChange={elements => {
                        setElements(elements);
                    }}/>
            </div>
        </div>


        <pre>{JSON.stringify({elements, sketch}, null, 2)}</pre>
    </UiClientRender>
}