import { ButtonBase, Grid, Link, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import useSytles from './styles'
import { getHashTags } from '../../API/api_tweet'
import { setHashTagList, useTweetDispatch, useTweetState } from '../../context/TweetContext'

const RightSidebar = () => {
    const classes = useSytles()

    // const [hashTags, setHashTags] = useState([])
    const { hashTags } = useTweetState()
    const tweetDispatch = useTweetDispatch()

    useEffect(() => {
        getHashTags((isOk, data) => {
            if (!isOk) return alert('ناموفق در یافتن لیست کاربران')
            else setHashTagList(tweetDispatch, data)
        })
    }, [])

    return (
        <div className={classes.root}>
            <Link to={'/'}>
                <Grid container direction={'row'} alignItems={'center'}>
                    <Grid item>
                        <img src={'/images/logo.png'} />
                    </Grid>
                    <Grid>
                        <Typography className={classes.logoType}>توییتر فارسی</Typography>
                    </Grid>
                </Grid>
            </Link>
            <Typography className={classes.hashTagTitle}>داغ ترین هشتگ ها</Typography>
            <Grid container direction={'column'} alignItems={'center'}>
                {
                    hashTags.map(item =>
                        <ButtonBase className={classes.hashTagParent}>
                            <Link to={'/hashtags/' + item.text} style={{ width: '100%' }}>
                                <Grid item container>
                                    <img src={'/images/hashtag.png'} />
                                    <Typography className={classes.hashtag}>{item.text}</Typography>
                                </Grid>
                            </Link>
                        </ButtonBase>)
                }
            </Grid>
        </div>
    )
}

export default RightSidebar