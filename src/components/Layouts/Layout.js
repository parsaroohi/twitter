import { CircularProgress, Divider, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Home from '../../pages/home/home'
import TweetByHashtag from '../../pages/tweetsByHashtag/TweetByHashtag'
import TweetsByUser from '../../pages/tweetsByUser/TweetByUser'
import LeftSidebar from '../leftSidebar/LeftSidebar'
import RightSidebar from '../rightSidebar/RightSidebar'
import useStyles from './styles'
import { BrowserRouter, Route } from 'react-router-dom'
import P404 from '../../pages/P404'
import { getProfileRequest } from '../../API/api_auth'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router'

const Layout = () => {
    const classes = useStyles()
    const history = useHistory()
    const [wait, setWait] = useState(true)

    useEffect(() => {
        getProfileRequest((isOk, data) => {
            if (!isOk) {
                toast.error(data)
                localStorage.clear()
                return history.push('/login')
            }
            setWait(false)
            localStorage.setItem("name", data.name)
            localStorage.setItem("image", data.image)
            localStorage.setItem("username", data.username)
            localStorage.setItem("x-auth-token", data['x-auth-token'])
        })
    }, [])

    if (!wait)
        return <div className={classes.waitParent}>
            <CircularProgress className={'uni_mb_small'} />
            <Typography>شکیبا باشید</Typography>
        </div>
    else
        return (
            <div className={classes.root}>
                <RightSidebar />
                <Divider orientation={"vertical"} className={classes.divider} />
                <div className={classes.content}>
                    <BrowserRouter>
                        <Route exact path={'/'} component={Home} />
                        <Route exact path={'/hashtags/:hashtag'} component={TweetByHashtag} />
                        <Route exact path={'/users/:id/:name'} component={TweetsByUser} />
                        <Route component={P404}></Route>
                    </BrowserRouter>

                    {/* <Home /> */}
                    {/* <TweetByHashtag />
                <TweetsByUser /> */}
                </div>
                <Divider orientation={"vertical"} className={classes.divider} />
                <LeftSidebar />
            </div>
        )
}

export default Layout