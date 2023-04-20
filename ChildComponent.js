import Component from "./component"
export default function ChildComponent(props) {
    return (
        <div className="App-component-child" key={props.title}>
            <button className="delete" onClick={props.deleteIt}>x</button>
        <p className="p1">{props.title}</p>
        <p>{props.notes}</p>
        
        </div>
    )
}