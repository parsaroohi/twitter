import { Divider } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import React, { useEffect, useState } from 'react'
import useStyles from './styles'
import Header from '../../components/Header/header'
import NewTweet from './components/NewTweet'
import TweetList from '../home/components/TweetList'
import { getAllTweets } from '../../API/api_tweet'
import { setTweetList, useTweetDispatch, useTweetState } from '../../context/TweetContext'
import { useTranslation } from 'react-i18next'

const Home = () => {
    const classes = useStyles()
    const { t } = useTranslation()

    // const [tweets, setTweets] = useState([])
    const { TweetList: tweets } = useTweetState()
    const tweetDispatch = useTweetDispatch()

    useEffect(() => {
        updataTweets()
    }, [])

    const updataTweets = () => {
        getAllTweets((isOk, data) => {
            if (!isOk) return alert('ناموفق بود')
            else setTweetList(tweetDispatch, data)
        })
    }

    return (
        <div className={classes.root}>
            <Header title={t("home")} icon={<HomeIcon />} />
            <Divider className={classes.divider} />
            <NewTweet updataTweets={updataTweets} />
            <TweetList data={tweets} />
        </div>
    )
}

export default Home