import React from "react";
import {FormattedMessage} from "react-intl";
import './_background.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useHistory} from "react-router";

const Background = props => {
    const history = useHistory();
    return(
        <section className="background">
            <div className="background_img">
                <div className="background_img_txt">
                    <h3 className="background_img_txt_title"><FormattedMessage id="background.title"/></h3>
                    <h5  className="background_img_txt_sub"><FormattedMessage id="background.subtitle" /></h5>
                    <button onClick={()=>{history.push('/Login')}}> <FormattedMessage id="background.btn" /> <AccountCircleIcon className="background_img_ico"/></button>
                </div>

            </div>

        </section>
    )
}

export default Background;