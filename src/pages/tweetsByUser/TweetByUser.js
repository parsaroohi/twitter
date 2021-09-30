import { Divider, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from '../home/styles'
import Header from '../../components/Header/header'
import TweetList from '../home/components/TweetList'
import PersonIcon from '@material-ui/icons/Person'
import axios from 'axios'
import { getAllTweets, getTweetByUserRequest } from '../../API/api_tweet'
import { useLocation } from 'react-router-dom'

const TweetsByUser = (props) => {
    const classes = useStyles()

    const [tweets, setTweets] = useState([])
    const location = useLocation()

    useEffect(() => {
        getTweetByUserRequest(props.match.params.user, (isOk, data) => {
            if (!isOk) return alert(data.message)
            else setTweets(data)
        })
    }, [location])

    return (
        <div className={classes.root}>
            <Header title={props.match.params.name} icon={<PersonIcon />} />
            <Divider className={classes.divider} />
            {tweets.length === 0 &&
                <Typography>این کاربر تا به حال توییتی ثبت نکرده است.</Typography>}
            <TweetList data={tweets} />
        </div>
    )
}

export default TweetsByUser