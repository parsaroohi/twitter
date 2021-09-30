import { makeStyles } from '@material-ui/styles'
import theme from '../theme'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white',
        width: '25%',
        padding: '1.7rem 1rem'
    },

    profText: {
        marginLeft: '0.5rem',
        width: 'max-content',
        direction: 'ltr'
    },

    profName: {
        flex: 1
    },

    profId: {
        flex: 1,
        color: theme.palette.text.hint,
        fontSize: '0.9rem'
    },

    twitterRoot: {
        background: '#f5f8fa',
        marginTop: '3rem',
        borderRadius: '2.5rem',
        padding: '11px 24px '
    },

    twitterTitle: {
        fontSize: '1.1rem !important',
        fontWeight: '600 !important',
        marginBottom: '11px'
    },

    twitterNameParent: {
        marginRight: '0.5rem',
        width: 'max-content',
    },

    twitterParent: {
        padding: '10px 0'
    },

    twitterImg: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    }
}))

export default useStyles