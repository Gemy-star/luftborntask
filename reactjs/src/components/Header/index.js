import React , {useContext} from 'react';
import Logo from '../../assets/logos/logo.svg';
import {FormattedMessage} from 'react-intl';
import {LocalizationContext} from "../../context/LocalizationContext";
import './_header.scss';
import {useHistory} from "react-router";

const Header = props => {
    const history = useHistory();
    const [locale , setLocale] = useContext(LocalizationContext);
    return (
        <header>
            <div className="header_container">
                <div className="header_logo">
                    <img src={Logo} onClick={()=> {history.push('/')}}/>
                </div>
                <button onClick={() =>  locale ===  'en' ? setLocale('ar') : setLocale('en')} className="header_btn"> <p> <FormattedMessage id="header.btn"/></p> </button>
            </div>
        </header>
    )
}


export default Header;