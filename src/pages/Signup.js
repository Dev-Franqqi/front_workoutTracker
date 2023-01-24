    import {useState} from 'react'
    import { useSignup } from '../context/components/customHook/useSignup';
    const Signup = () => {
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');
        const {signup,error,isLoading} = useSignup();



        const handleSubmit = async (e)=>{
            e.preventDefault();
             await signup(email,password);
            setEmail("");
            setPassword("")
            



        }


        return (  
            <form onSubmit={handleSubmit} className="signup">
                <h3>SIGN UP</h3>


                <label>Email: </label>
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
            
                <label>Password: </label>
                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
 

                <button disabled={isLoading}>SUBMIT</button>

                {error && <div className="error">{error}</div>}
            </form>

        );
    }
     
    export default Signup;