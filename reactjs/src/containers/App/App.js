import 'bootstrap/dist/css/bootstrap.min.css';
import React, { lazy, Suspense } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Layout from "../../HOC/Layout/Layout";
import {Add} from "@material-ui/icons";
const Home = lazy(() => import('../../containers/Home/index'));
const Login = lazy(() => import('../../containers/Login/index'));
const ProductsControl = lazy(() => import('../../containers/Products/index'));
const AddEdit = lazy(() => import('../../components/AddEditForm/index'));

const RegisterPage = lazy(() => import('../../containers/Register/index'));
const RegisterAdminPage = lazy(() => import('../../containers/RegisterAdmin/index'));

const App = () => {
  return (
      <div className="car-container">
        <Layout>
            <Suspense
                fallback={
                    <Backdrop open>
                        <CircularProgress />
                    </Backdrop>
                }
            >
            <Switch>
              <Route exact path="/" component={Home} />
                <Route exact path="/products" component={ProductsControl}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/AddEdit" component={AddEdit} />
                <Route exact path="/AddEdit/:id" component={AddEdit} />
                <Route exact path="/Register" component={RegisterPage}/>
                <Route exact path="/Admin-Register" component={RegisterAdminPage}/>

            </Switch>
            </Suspense>
        </Layout>
      </div>
  )

}

export default App;
