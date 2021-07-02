import React, {useContext, useEffect, useState} from "react";
import './_products.scss';
import { useHistory } from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {ProductContext} from "../../context/ProductsContext";
import Product from "../../components/product";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import {UserContext} from "../../context/UserContext";



const Products = props =>  {
    const history = useHistory();
    const [products , setProduct] = useContext(ProductContext)
    const [user , setUser] = useContext(UserContext);
    const userInfo = localStorage.getItem("user");
 console.log( "USER", user)
    return (
        <section className="services">
            <div className="services_container">
                <div className="services_container_title">
                    <h3> <FormattedMessage id="login.welcome" /> {user.user.userName ? user.user.userName : userInfo?.user.userName}</h3>
                    <button onClick={()=> history.push('/AddEdit')} ><ControlPointIcon className="icon" /></button>
                </div>
                <div className="services_container_grid">
                    {products? products.map(
                        (d) =>  {
                            return (
                                <div key={d.id}>
                                    <Product id={d.id}  subtitle={d.description} title={d.name} imgaeName={d.imageName} imageSrc={d.imageSrc}/>

                                </div>
                            )
                        }
                    )   : <div></div>}
                </div>
            </div>

        </section>
    )
}


export default Products;