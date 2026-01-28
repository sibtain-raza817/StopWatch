import { useRef, useState } from "react";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();

        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <>
        <form 
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            margin: "100px auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)"
          }}
        >
            <h1 style={{ textAlign: "center" }}>Login</h1>

            <label>Email</label>
            <input 
              type="email" 
              ref={emailRef}
              style={{
                padding: "8px",
                marginBottom: "15px",
                borderRadius: "4px",
                border: "1px solid #aaa"
              }}
            />

            <label>Password</label>
            <input 
              type="password" 
              ref={passwordRef}
              style={{
                padding: "8px",
                marginBottom: "15px",
                borderRadius: "4px",
                border: "1px solid #aaa"
              }}
            />

            <button 
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Submit
            </button>
        </form>
        </>
    )
}

export default Login;
