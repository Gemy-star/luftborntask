import React, {useState, useEffect, useContext} from 'react';
import {FormattedMessage} from "react-intl";
import FormControl from '@material-ui/core/FormControl';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import '../registerForm/_registerform.scss';
import {LocalizationContext} from "../../context/LocalizationContext";
import {useHistory} from "react-router";
import { registerAdmin} from "../../api/LoginApi";
import {UserContext} from "../../context/UserContext";
import { toast } from 'react-toastify';


const RegisterAdmin = props => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const [error, setError] = useState({username: false, password: false, email:false})
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [formIsValid, setFormIsValid] = useState(null);
    const [locale, setLocale] = useContext(LocalizationContext)
    useEffect(() => {
        if (name && password) {
            setFormIsValid(true)
        } else {
            setFormIsValid(null)
        }
    }, [password, name])

    const errorMessage = msg => {
        return (
            <div className="error_div">
                <p>
                    {msg}
                </p>
            </div>
        )
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formIsValid) {
            handlePostRequest({username: name, password: password , email:email})
        } else {
            setFormIsValid(false);
        }
    };
    const handlePostRequest = (body) => {
        registerAdmin(body).then(res => {
            if (res?.status == 200 ) {
                history.push('/Login');
                toast.success(locale=="en" ? "Sucess" : "نجحت", {
                    position: toast.POSITION.TOP_CENTER
                });
            }else {
                toast.error(locale=="en" ? "Error" : "خطأ", {
                    position: toast.POSITION.TOP_LEFT
                });
            }

        } , err => {
            console.log(err);
        })
    };
    const handleChangeUserEmail = event => {
        const emailaddress = event.target.value;

        if (emailaddress === "" || emailaddress === null || /^\d+$/.test(emailaddress)) {
            setError({...error, email: true})
            setFormIsValid(false)

        } else {
            setError({...error, email: false})
        }
        setEmail(emailaddress);
    };

    const handleChangeUserName = event => {
        const username = event.target.value;

        if (username === "" || username === null || /^\d+$/.test(username)) {
            setError({...error, username: true})
            setFormIsValid(false)

        } else {
            setError({...error, fullName: false})
        }
        setName(username);
    };
    const handleChangePassord = event => {
        const pass = event.target.value;
        if (pass === "" || pass === null) {
            setError({...error, password: true})
            setFormIsValid(false)
        } else {
            setError({...error, password: false})

        }
        setPassword(pass);
    };

    return (
        <div className="form_div">
            <form autoComplete={false} onSubmit={(event) => {
                handleSubmit(event)
            }}>
                {formIsValid == null || formIsValid == true ? null :
                    <div className="error_div" style={{justifyContent: 'flex-start'}}>
                        <p className="error_div_msg" style={{marginInline: '1rem'}}>
                            <FormattedMessage id="validation.allFields"/>
                        </p>
                    </div>}
                <h4><FormattedMessage id="login.register"/></h4>
                <FormControl>
                    <label className="form_div_label" htmlFor={"car_model"}>
                        <FormattedMessage id="login.username"/>
                    </label>
                    <input value={name} type="text" name="username" style={error.username || formIsValid == false ? {
                        border: 'solid 1px #FE7E31',
                        backgroundColor: 'rgba(236, 28, 36, 0.04)'
                    } : null} className="form_div_ele" id="username" onChange={(e) => {
                        handleChangeUserName(e)
                    }} onBlur={(e) => {
                        handleChangeUserName(e)
                    }}/>
                    {error.username ? errorMessage(<FormattedMessage id="validation.username"/>) : null}
                </FormControl>
                <FormControl>
                    <label className="form_div_label" htmlFor={"email"}>
                        <FormattedMessage id="login.email"/>
                    </label>
                    <input value={email} type="email" name="email" style={error.email || formIsValid == false ? {
                        border: 'solid 1px #FE7E31',
                        backgroundColor: 'rgba(236, 28, 36, 0.04)'
                    } : null} className="form_div_ele" id="email" onChange={(e) => {
                        handleChangeUserEmail(e)
                    }} onBlur={(e) => {
                        handleChangeUserEmail(e)
                    }}/>
                    {error.email ? errorMessage(<FormattedMessage id="validation.email"/>) : null}
                </FormControl>

                <FormControl>
                    <label className="form_div_label" htmlFor={"phone"}>
                        <FormattedMessage id="login.password"/>
                    </label>
                    <input value={password} type="password" name="phone" style={error.phone || formIsValid == false ? {
                        border: 'solid 1px #FE7E31',
                        backgroundColor: 'rgba(236, 28, 36, 0.04)'
                    } : null} className="form_div_ele" id="password" onChange={(e) => {
                        handleChangePassord(e)
                    }} onBlur={(e) => {
                        handleChangePassord(e)
                    }}/>
                    {error.password ? errorMessage(<FormattedMessage id="validation.password"/>) : null}
                </FormControl>
                <FormControl>
                    <button onClick={(e) => handleSubmit(e)} className="btn_confirm">
                        <FormattedMessage id="login.register"/>
                        <ArrowForwardIosIcon style={{
                            color: '#ffffff',
                            fontSize: 'small',
                            marginInline: ' 0.27rem',
                            transform: locale == "en" ? null : 'scale(-1)'
                        }}/>
                    </button>
                </FormControl>
                <FormControl>
                    <button onClick={(e) => history.push('/')} className="btn_confirm">
                        <FormattedMessage id="startToday.formSection.back"/>
                        <ArrowForwardIosIcon style={{
                            color: '#ffffff',
                            fontSize: 'small',
                            marginInline: ' 0.27rem',
                            transform: locale == "en" ? null : 'scale(-1)'
                        }}/>
                    </button>
                </FormControl>
            </form>
        </div>
    )
}

export default RegisterAdmin;
