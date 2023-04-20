import './App.css';
import { useEffect, useState } from 'react';
import ChildComponent from "./ChildComponent.js";

export default function Component() {
    const [count, setCount] = useState(0);
    const [comps, addComps] = useState([]);
    const enter = (event) => {
        event.preventDefault()
        addComps([...comps,
        <ChildComponent
            id={count}
            title={event.target.title.value}
            notes={event.target.notes.value}
            deleteIt={deleteComp}
            />]);
            setCount(count+1);
            console.log(event.target.notes.value)
            event.target.reset();
    }
    const deleteComp = (id) => {
        console.log(id)
        const newComps = comps.filter(comp => comp.id !== id);
        addComps(newComps);
    }
    return (
        <div className="App-component">
            {comps}
            <form onSubmit={enter}>
                <label>Title </label>
                <input type="text" id="title" name="title"></input><br/>
                <label id="notes">Notes... </label>
                <input type="text" id="notes" name="notes" className="component-notes"></input><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}