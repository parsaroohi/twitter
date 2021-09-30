import { Switch } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import AuthPage from '../pages/auth/AuthPage'
import Layout from './Layouts/Layout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TweetProvider } from '../context/TweetContext'

const App = () => {
    return (
        <>
            <BrowserRouter>
                {/* <Switch> */}
                <PublicRoute path="/login" component={AuthPage} />
                <PrivateRoute path="/" render={() =>
                    <TweetProvider>
                        <Layout></Layout>
                    </TweetProvider>
                } />
                {/* </Switch> */}
            </BrowserRouter>
            <ToastContainer />
        </>
    )
}

const isLogin = () => {
    return !!localStorage.getItem("x-auth-token")
}

const PublicRoute = ({ component, ...props }) => {
    return <Route {...props} render={(props) => {
        if (isLogin()) return <Redirect to={"/"} />
        else { return React.createElement(component, props) }
    }} />
}

const PrivateRoute = ({ render, ...props }) => {
    return <Route {...props} render={
        (props) => {
            if (isLogin) return render(props)
            else return <Redirect to={'/login'} />
        }
    } />
}

export default App