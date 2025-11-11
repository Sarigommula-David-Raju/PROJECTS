import React, {useState} from "react";
export default function Example(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <>
        <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>{isLoggedIn?'LOGIN':'SIGNIN'}</button>
          {isLoggedIn ? <First /> : <Second />}
          {isLoggedIn && <Login />}
        </>
    )
}

function First(){
    return <h1>First Page</h1>;
}

function Second(){
    return (
        <div>
            <h1>Second Page</h1>
            
        </div>
    )

}

function Login(){
    return(
        <div>
            Logged In successfully...
        </div>
    )
}