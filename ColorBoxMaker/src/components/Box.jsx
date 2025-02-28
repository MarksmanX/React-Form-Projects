import "./Box.css";

const Box = ({color, height, width, removeBox, id}) => {
    return (
        <div>
            <div 
                className="Box"
                style={{
                    backgroundColor: color,
                    height: `${height}px`,
                    width: `${width}px`,
                    border: '1.5px solid black'
                }}
            >
            </div>
            <button onClick={() => removeBox(id)}>X</button> 
        </div>
    )
}

export default Box;