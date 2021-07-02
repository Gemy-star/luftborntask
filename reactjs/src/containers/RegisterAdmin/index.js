import React from 'react';
import '../Register/_register.scss';
import RegisterAdmin from "../../components/RegisterAdmin";


const RegisterAdminPage = props =>  {
    return(
        <section className="start_container">
            <div className="start_container_howItWorks">

            </div>
            <div className="start_container_bidding">
                <RegisterAdmin/>
            </div>
        </section>
    );
}


export default RegisterAdminPage;