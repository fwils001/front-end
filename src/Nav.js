// import { render } from "react-dom"

export default function Nav(props) {
    console.log(props)
    return(
        <nav>
            {!props.userLoggedIn ?
            <>
            <form onSubmit={props.loginUser}>
                <strong>Login </strong>
                <label htmlFor="name">Username: </label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="name">Password: </label>
                <input type="password" id="userpassword" name="password"/>
                <input type="submit" value="login" />
            </form>
            OR
            <form onSubmit={props.register}>
                <strong>Register </strong>
                <label htmlFor="name">Username: </label>
                <input type="text" id="name" name="username"/>
                <label htmlFor="name">Password: </label>
                <input type="password" id="password" name="password"/>
                <input type="submit" value="signup" />
            </form>
            </>
        : null}
            <button onClick={props.logout}>log out</button>
        </nav>
    )
}

