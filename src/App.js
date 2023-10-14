import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState('')

    const onClick = () => setToggle(prevState => !prevState)


    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    }, [])

    return (
        <div className="App">
            <h2 data-testid={'value-elem'}>{value}</h2>
            {toggle === true && <div data-testid={'toggle-elem'}>toggle</div>}
            {data && <div>data</div>}
            <h1>Hello World</h1>
            <button data-testid={'toggle-btn'} onClick={onClick}>Click</button>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder={'text...'}/>
        </div>
    );
}

export default App;
