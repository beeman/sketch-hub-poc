import {Excalidraw} from "@excalidraw/excalidraw";
import React from "react";

export default function SketchUiDraw(props: React.ComponentProps<typeof Excalidraw>) {
    return <Excalidraw {...props} />
}