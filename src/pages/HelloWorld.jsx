import React, {useState} from 'react';

const HelloWorld = () => {

    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)

    const toggle = () => value === 'hello' && setVisible(prevState => !prevState)
    const onChange = (e) => setValue(e.target.value)


    return (
        <div>
            <input onChange={onChange} value={value} id={'search'} type={'text'} />
            <button onClick={toggle} id={'toggle'}>HELLO WORLD</button>
            {
                visible && <h1 id={'hello'}>HELLO WORLD</h1>
            }
        </div>
    );
};

export default HelloWorld;