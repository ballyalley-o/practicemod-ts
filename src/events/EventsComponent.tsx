const EventComponent = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
}

const onDragStart = (event: React.DragEvent) => {
    console.log("this is a drag start event")
}

return (
    <div className="container">
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart}>DRAG ME!</div>
    </div>
)
}


export default EventComponent