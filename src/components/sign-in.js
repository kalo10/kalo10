import {useState} from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const Signin = (props) => {
    const [passType, setPassType] = useState("password");
    const [passInput, setPassInput] = useState("");
    const handlePassChange = (event) => {
        setPassInput(event.target.value);
    }
    const togglePassword = () => {
        if(passType === "password"){
            setPassType("text");
            return
        }
        setPassType("password");

    }

    return(
        <div className="box sign-up-box">
        <div className="items" style={{"text-align": "center"}}><h3>Sign-in</h3></div>
        <div className="items">
            <label htmlFor="name">Username</label>
            <input type="text" id="name" className='form-control'/>
        </div>

        <div className="items">
            <label htmlFor="name">Password</label>
            <input type={passType} onChange={handlePassChange} value={passInput} id="password" className='form-control'/>
            <div className="form-check" >
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={togglePassword}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">show password</label>   
            </div>
        </div>

        <div className="items"><button className="btn btn-primary btn-lg">Sign In</button></div>
        <div className="items">
            <button className="btn" onClick={() => props.handleClick("signup")} id="nasu">No Account ? Sign-up</button>
        </div>
    </div>
    );
}



export default Signin;