import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [state, setState] = useState('Sign Up');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
        if (state === "Sign Up") {
            try {
                const res = await fetch("http://localhost:5000/save", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        full_name: name,
                        email: email,
                        password: password,
                        phone: null,
                        address: null,
                        gender: null,
                        date_of_birth: null
                    })
                });

                if (res.ok) {
                    alert("Account created successfully ✅");
                    setState('Login'); // After sign up, switch to login screen
                    setName("");
                    setEmail("");
                    setPassword("");
                } else {
                    const errorData = await res.json();
                    alert("Error: " + errorData.message);
                }
            } catch (error) {
                console.error("Signup Error:", error);
                alert("Something went wrong. Please try again.");
            }
        }
    }

    return ( 
        <form className="min-h-[80vh] flex items-center justify-center text-left" onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 shadow-lg">
                <p className="text-2xl font-semibold">{state === 'Sign Up' ? "Create Account" : "Login"}</p>
                <p>Please {state === 'Sign Up' ? "Sign Up" : "Log In"} to Book Appointment</p>
                
                {state === "Sign Up" && (
                    <div className="w-full">
                        <p>Full Name</p>
                        <input 
                            className="border border-zinc-300 rounded w-full p-2 mt-1" 
                            type="text" 
                            onChange={(e) => setName(e.target.value)} 
                            value={name} 
                            required 
                        />
                    </div>
                )}
                
                <div className="w-full">
                    <p>Email</p>
                    <input 
                        className="border border-zinc-300 rounded w-full p-2 mt-1"  
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        required 
                    />
                </div>
                
                <div className="w-full">
                    <p>Password</p>
                    <input 
                        className="border border-zinc-300 rounded w-full p-2 mt-1"  
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        required 
                    />
                </div>

                <button className="bg-primary text-white w-full py-2 rounded-md text-base">
                    {state === 'Sign Up' ? "Create Account" : "Login"}
                </button>

                {state === 'Sign Up' 
                    ? <p className="text-center">Already have an account? <span onClick={() => setState('Login')} className="text-primary cursor-pointer">Login</span></p> 
                    : <p className="text-center">Don't have an account? <span onClick={() => setState('Sign Up')} className="text-primary cursor-pointer">Create Account</span></p>
                }
            </div>
        </form>
    );
}

export default Login;
