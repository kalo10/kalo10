import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const Signup = (props) => {
    return(
        <div class="box sign-up-box">
            <div class="items" style={{"text-align": "center"}}><h3>Sign-up</h3></div>
            <div class="items">
                <label htmlFor="name">Email</label>
                <input type="email" id="name" className='form-control'/>
            </div>

            <div class="items">
                <label htmlFor="name">Username</label>
                <input type="text" id="name" className='form-control'/>
            </div>

            <div class="items">
                <label htmlFor="name">Password</label>
                <input type="password" id="name" className='form-control'/>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onSelect={""}/>
                    <label class="form-check-label" for="flexCheckDefault">show password</label>   
                </div>
            </div>

            <div class="items"><button class="btn btn-danger btn-lg">Create Account</button></div>
            <div class="items"><button class="btn" onClick={() => props.handleClick("signin")}>Already have an account ? Sign-in</button></div>
        </div>
    );
}

export default Signup;