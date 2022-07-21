const Home = (props) => {
    return(
        <header>
            <button class="btn" onClick={() => props.handleClick("signin")}>sign-in</button>|
            <button class="btn" onClick={() => props.handleClick("signin")}>sign-up</button>
        </header>
    );
    
}

export default Home;