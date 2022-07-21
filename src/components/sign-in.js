import '../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const Signin = (props) => {
    return(
        <div class="box sign-up-box">
        <div class="items" style={{"text-align": "center"}}><h3>Sign-in</h3></div>
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

        <div class="items"><button class="btn btn-primary btn-lg">Sign In</button></div>
        <div class="items">
            <button class="btn" onClick={() => props.handleClick("signup")}><span style={{"color": "green"}}>No Account ? Sign-up</span></button>
        </div>
    </div>
    );
}


// function showPassword(){
//     var x = document.getElementById("password");
//     if (x.type === "password") {
//         x.type = "text";
//     } else {
//         x.type = "password";
//     }
// }

export default Signin;