import React from "react";
import './_footer.scss';
import Logo from '../../assets/logos/logo.svg'
import Facebook from '../../assets/icons/icon-facebook.svg';
import Instagram from '../../assets/icons/icon-instagram.svg';
import Twitter from '../../assets/icons/icon-twitter.svg';
import Youtube from '../../assets/icons/icon-youtube.svg';
import {FormattedMessage} from "react-intl";

const Footer = props =>  {
    return (
        <footer className="footer">
            <div className="footer_logo_footer">
                <img src={Logo}/>
                <p> <FormattedMessage id="footer.subtitle" /></p>
            </div>
            <div className="footer_social-icons">
                <h4>  <FormattedMessage id="footer.social" /></h4>
                <div className="footer_social-icons_grid">
                    <img src={Facebook}  />
                    <img src={Twitter}  />
                    <img src={Youtube}  />
                    <img src={Instagram} />
                </div>

            </div>
        </footer>
    )
}

export default Footer