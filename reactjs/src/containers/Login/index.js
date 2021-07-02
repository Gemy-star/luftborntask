import React from 'react';
import './_login.scss';
import LoginForm from "../../components/loginForm";


const Login = props =>  {
    return(
        <section className="start_container">
            <div className="start_container_howItWorks">

            </div>
            <div className="start_container_bidding">
                <LoginForm/>
            </div>
        </section>
    );
}


export default Login;