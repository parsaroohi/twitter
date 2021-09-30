import { Grid, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { likeTweet, setTweetText, useTweetDispatch } from '../../../context/TweetContext'
import { likeTweetRequest } from '../../../API/api_tweet'
import { toast } from 'react-toastify'

const Tweet = ({ data }) => {
    const classes = useStyles()
    const tweetDispatch = useTweetDispatch()

    const renderTweetText = (text) => {

        return {
            __html: text.replace(/#\S+/g,
                "<a href='/tags/$&'><span style='color:blue'>$&</span></a>")
        }
    }

    const getImage = () => {
        if (data.user.image) return data.user.image
        else return "/images/person.png"
    }

    const retweetClick = () => {
        setTweetText(tweetDispatch, data.text)
    }

    const handleLike = () => {
        likeTweetRequest(data._id, (isOk, data) => {
            if (!isOk) return toast.error(data)
            likeTweet(tweetDispatch, data._id)
        })
    }

    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={getImage()} style={{ width: 60, height: 60, borderRadius: '50%' }}></img>
                <Grid item container direction={'column'}
                    style={{ flex: 1, marginRight: '1rem' }}>
                    <Grid item container>
                        <Typography className={classes.tweetItemName}>{data.user.name}</Typography>
                        <Typography className={classes.tweetItemId}>{data.user.id}</Typography>
                    </Grid>
                    <Typography
                        dangerouslySetInnerHTML={renderTweetText(data.text)}
                        className={classes.tweetText} component={'p'}>
                    </Typography>
                    {
                        data.image &&
                        <div>
                            <div style={{ backgroundImage: `url(${data.image})` }} className={classes.tweetImg}></div>
                        </div>
                    }
                </Grid>
            </Grid>
            <Grid container direction={'row-reverse'} style={{ marginTop: 16 }} alignItems={'center'}>
                <IconButton className={classes.newTweetImgBtn}
                    onClick={retweetClick}>
                    <img src={'images/retweet.png'} className={classes.newTweetImg}></img>
                </IconButton>
                <IconButton className={classes.newTweetImgBtn}
                    onClick={handleLike}>
                    <FavoriteIcon />
                </IconButton>
                <Typography className={classes.likeCount}>{data.likes}</Typography>
            </Grid>
        </div>
    )
}

export default Tweet