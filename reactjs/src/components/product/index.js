import React, {useContext} from "react";
import './_product.scss';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteProduct} from "../../api/ProductsCRUD";
import {useHistory} from "react-router";
import {UserContext} from "../../context/UserContext";
const Product = ({id, title , subtitle , imgaeName , imageSrc}) =>  {
    const [user , setUser] = useContext(UserContext);

    const history = useHistory();
    const handleEdit = () => {
       history.push(`/AddEdit/${id}`);
    };
    const handleDelete = () => {
         deleteProduct(id).then(res =>  {
             if(res.status == 204){
                 history.push('/products');
             }
            console.log('del',res);
        }, err =>  {
            console.log("Error" ,err)
        })    };
    return(
        <div className="service_card">
            <img src={imageSrc} className="service_card_item_img" alt={imgaeName}/>
            <div className="service_card_item">
                <div className="service_card_item_content">
                    <h3>{title}  </h3>
                    <p>{subtitle}</p>

                </div>
            </div>


            {user.role[0] === "Admin" ?
                <div className="service_card_control">
                    <CreateIcon className="service_card_control_edit" onClick={() => handleEdit(id)}/>
                    <DeleteIcon className="service_card_control_delete" onClick={() => handleDelete(id)}/>
                </div>:null
                }


        </div>
    )
}

export default Product;
