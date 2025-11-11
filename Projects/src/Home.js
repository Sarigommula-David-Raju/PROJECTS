import React,{useState, useRef} from 'react';

export default function Home(){
    const inputRef = useRef(null);
    const [input, setInput] = useState("");
    const [items, setItems]=useState([]);

    const addItem=()=>{
        setItems([...items, input]);
        setInput("");
        inputRef.current.focus();
        
    }
    return(
        <>
          <div>
            <input type='text' value={input} ref={inputRef} onChange={(e)=>{setInput(e.target.value)}} /> <input type='button' onClick={addItem} value={"ADD"} /> <br/>
            
            <ol>
                {
                    items.map((item, index)=>{return <li key={index}>{item}</li>})
                }
            </ol>
          </div>
        </>
    )
}