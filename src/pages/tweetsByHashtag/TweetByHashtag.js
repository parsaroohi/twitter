import { Divider } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import useStyles from '../home/styles'
import Header from '../../components/Header/header'
import TweetList from '../home/components/TweetList'
import axios from 'axios'
import { getAllTweets, getTweetByHashTagRequest } from '../../API/api_tweet'
import { toast } from 'react-toastify'
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext'
import { useLocation } from 'react-router-dom'

const TweetsByHashtag = (props) => {
    const classes = useStyles()

    // const [tweets, setTweets] = useState([])
    const { tweetList } = useTweetState()
    const tweetDispatch = useTweetDispatch()
    const location = useLocation()

    useEffect(() => {
        getTweetByHashTagRequest(props.match.params.hashtag, (isOk, data) => {
            if (!isOk) return toast.error(data)
            else setTweetList(tweetDispatch, data)
        })
    }, [location])

    return (
        <div className={classes.root}>
            <Header title={props.match.params.hashtag} icon={<img src={'/images/hashtag.png'} />} />
            <Divider className={classes.divider} />
            <TweetList data={tweetList} />
        </div>
    )
}

export default TweetsByHashtag