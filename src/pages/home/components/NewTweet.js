import { Button, Grid, IconButton, Input, InputBase, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import classNames from 'classnames'
import { newTweetRequest } from '../../../API/api_tweet'
import { toast } from 'react-toastify'
import { setTweetText as setTweet, updateHashTagList, useTweetDispatch, useTweetState } from '../../../context/TweetContext'

const NewTweet = ({ updateTweets }) => {

    const input = React.useRef()
    const inputFile = React.useRef()

    const { tweetText: tweet } = useTweetState()
    // const [tweet, setTweet] = React.useState('')
    const [imageFile, setImageFile] = React.useState()
    const [imagePath, setImagePath] = React.useState()
    const tweetDispatch = useTweetDispatch()

    const classes = useStyles()

    const newTweetClick = () => {
        const tweetText = tweet
        if (!tweetText) return
        const formData = new FormData()
        formData.append("text", tweetText)
        if (imageFile)
            formData.append("image", imageFile)
        newTweetRequest(formData, (isOk, data) => {
            if (!isOk) return toast.error(data)
            else toast.success('توییت شما ارسال شد')
            updateTweets()
            setTweet(tweetDispatch, "")
            setImagePath()
            setImageFile()
            if (tweetText.includes("#"))
                updateHashTagList(tweetDispatch)
        })
    }

    const getImage = () => {
        if (localStorage.getItem("image") && localStorage.getItem("image") != 'undefined')
            return localStorage.getItem("image")
        return "/images/person.png"
    }

    const selectImg = () => {
        inputFile.current.click()
    }

    const onChangeImg = (e) => {
        if (e.target.files && e.target.files.length > 0) {

            setImageFile(e.target.files[0])
            const reader = new FileReader()
            reader.onload = (e) => {
                setImagePath(e.target.result)
            }
            reader.readAsDataURL(e.target.files(0))
        }
    }

    return (
        <div className={classes.NewTweet}>
            <Grid container>
                <img src={getImage()} style={{ width: 60, height: 60, borderRadius: '50%' }}></img>
                <Input
                    placeholder={'توییت کن...'}
                    className={classNames(classes.input)}
                    value={tweet}
                    onChange={e => setTweet(tweetDispatch, e.target.value)}
                />
                <Input type={'file'} style={{ display: 'none' }} ref={'inputFile'}
                    onChange={onChangeImg} />
            </Grid>
            {
                imagePath &&
                <div>
                    <div style={{ backgroundImage: `url(${imagePath})` }} className={classes.tweetImg}></div>
                </div>
            }
            <Grid container direction={'row-reverse'} style={{ marginTop: 16 }}>
                <Button variant={'contained'} color={'primary'}
                    className={classes.newTweetBtn}
                    onClick={newTweetClick}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn} onClick={selectImg}>
                    <img src={'images/tweetpic.png'} className={classes.newTweetImg}></img>
                </IconButton>
            </Grid>
        </div>
    )
}

export default NewTweet