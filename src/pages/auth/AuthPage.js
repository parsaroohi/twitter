import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { Button, Input, Tab, Tabs, Typography } from '@material-ui/core'
import useStyles from './styles'
import { toast } from 'react-toastify'
import { loginApi, registerApi } from '../../API/api_auth'

const LOGIN_TAB_VALUE = 1
const REG_TAB_VALUE = 2

const AuthPage = () => {
    const classes = useStyles()

    const [tab, setTab] = useState()

    const [usernameLogin, setUsernameLogin] = useState()
    const [passwordLogin, setPasswordLogin] = useState()

    const [usernameRegister, setUsernameRegister] = useState()
    const [passwordRegister, setPasswordRegister] = useState()
    const [confPasswordRegister, setConfPasswordRegister] = useState()
    const [fullnameRegister, setFullnameRegister] = useState()

    const handleChangeTab = (e, newValue) => {
        setTab(newValue)
    }

    const validateLogin = (user) => {
        if (!user.username) return "لطفا نام کاربری خود را وارد کنید."
        if (!user.password) return "لطفا رمز عبور خود را وارد کنید."
    }

    const validateRegister = (user) => {
        if (!user.username) return "لطفا نام کاربری خود را وارد کنید."
        if (!user.password) return "لطفا رمز عبور خود را وارد کنید."
        if (!user.fullname) return "لطفا نام خود را وارد کنید."
        if (user.password != user.confPassword) return "رمز عبور مشابه وارد کنید."
    }

    const handleRegister = () => {
        const user = {
            name: fullnameRegister,
            username: usernameRegister,
            password: passwordRegister,
            confPassword: confPasswordRegister
        }

        const error = validateRegister(user)
        if (error) return toast.warn(error)
        user.confPassword = undefined
        registerApi(user, (isOk, data) => {
            if (!isOk) return toast.error(data)
            toast.success('شما با موفقیت ثبت نام شدید.')
            localStorage.setItem("name", data.name)
            localStorage.setItem("image", data.image)
            localStorage.setItem("username", data.username)
            localStorage.setItem("x-auth-token", data['x-auth-token'])
            window.location.reload()
        })
    }

    const handleLogin = () => {
        const user = {
            username: usernameLogin,
            password: passwordLogin
        }

        const error = validateLogin(user)
        if (error) return toast.warn(error)

        loginApi(user, (isOk, data) => {
            if (!isOk) return toast.error(data)
            toast.success('شما با موفقیت وارد شدید.')
            localStorage.setItem("name", data.name)
            localStorage.setItem("image", data.image)
            localStorage.setItem("username", data.username)
            localStorage.setItem("x-auth-token", data['x-auth-token'])
            window.location.reload()
        })
    }

    return (
        <Paper className={classes.container}>
            <Typography className={classes.headerText}>به توییتر ما خوش آمدید.</Typography>
            <Tabs value={tab} indicatorColor="primary" textColor="primary"
                onChange={handleChangeTab} aria-label="disabled tabs example">
                <Tab className={classes.tab} label="ورود" value={LOGIN_TAB_VALUE} />
                <Tab className={classes.tab} label="ثبت نام" value={REG_TAB_VALUE} />
            </Tabs>
            {tab === LOGIN_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>نام کاربری</Typography>
                    <Input className={'uni_mb_small'}
                        value={usernameLogin} onChange={e => setUsernameLogin(e.target.value)} />
                    <Typography>رمز عبور</Typography>
                    <Input className={'uni_mb_small'}
                        value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} />
                    <Button variant={'contained'} color='primary'
                        onClick={handleLogin}>ورود</Button>
                </div>
            }
            {tab === REG_TAB_VALUE &&
                <div className={classes.containerInput}>
                    <Typography>نام کامل</Typography>
                    <Input className={'uni_mb_small'}
                        value={fullnameRegister} onChange={e => setFullnameRegister(e.target.value)} />
                    <Typography>نام کاربری</Typography>
                    <Input className={'uni_mb_small'}
                        value={usernameRegister} onChange={e => setUsernameRegister(e.target.value)} />
                    <Typography>رمز عبور</Typography>
                    <Input className={'uni_mb_small'}
                        value={passwordRegister} onChange={e => setPasswordRegister(e.target.value)} />
                    <Typography>تکرار رمز عبور</Typography>
                    <Input className={'uni_mb_small'}
                        value={confPasswordRegister} onChange={e => setConfPasswordRegister(e.target.value)} />
                    <Button variant={'contained'} color='primary'
                        onClick={handleRegister}>ثبت نام</Button>
                </div>
            }
        </Paper>
    )
}

export default AuthPage