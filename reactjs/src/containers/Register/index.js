import React from 'react';
import './_register.scss';
import RegisterForm from "../../components/registerForm";


const Register = props =>  {
    return(
        <section className="start_container">
            <div className="start_container_howItWorks">

            </div>
            <div className="start_container_bidding">
                <RegisterForm/>
            </div>
        </section>
    );
}


export default Register;