export function BackgroundChange(item) {
    return({
        type:"change background",
        payload:item
    })
}

export function Translate(item) {
    return({
        type:"translate",
        payload:item
    })
}