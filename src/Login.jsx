import { useRef, useState } from "react";



function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // we use useRef for avodinf re-rendering 

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    console.log("render");

    function handleSubmit(e){
        e.preventDefault();

        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="email" ref={emailRef}></input>
            <input type="password" ref={passwordRef}></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Login;