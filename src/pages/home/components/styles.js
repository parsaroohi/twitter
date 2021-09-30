import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#e6e6e6',
        flex: 1
    },

    header: {
        padding: 24,
        backgroundColor: 'white',
        display: 'flex'
    },

    headerTitle: {
        fontSize: '1.2rem',
        fontWeight: 600,
        marginRight: '0.5rem'
    },

    divider: {
        backgroundColor: '#7EBAFF',
        filter: 'opacity(0.4)'
    },

    newTweet: {
        padding: 24,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column'
    },

    input: {
        marginRight: '1rem',
        border: 'none',
        flex: 1,
        '&:focus': {
            outline: 'unset'
        }
    },

    newTweetBtn: {
        color: 'white !important',
        borderRadius: '1rem !important',
        minHeight: '30px !important',
        height: '30px !important',
        fontFamily: 'shabnam !important',
        lineHeight: '1rem !important',
        minWidth: '5rem !important'
    },

    newTweetImg: {},

    newTweetImgBtn: {
        border: '0.5px solid #3337',
        borderRadius: '50%',
        padding: '0.2rem !important',
        marginLeft: '1rem'
    },

    tweetItem: {
        padding: 24,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0.5rem'
    },

    tweetItemName: {
        fontWeight: 600,
    },

    tweetItemId: {
        fontSize: '0.9rem',
        color: theme.palette.text.hint,
        marginRight: '0.5rem',
        paddingTop: '0.1rem'
    },

    tweetText: {
        fontSize: '0.9rem',
        marginTop: '0.75rem'
    },

    likeCount: {
        fontSize: '0.8rem',
        color: theme.palette.text.hint,
        marginLeft: '0.5rem',
    },

    tweetImg: {
        width: '10rem',
        height: '10rem',
        marginTop: '1rem',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    }
}))

export default useStyles