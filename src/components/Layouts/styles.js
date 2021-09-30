import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex',
        width: '100%',
        overflow: 'hidden'
    },

    rightSideBar: {
        backgroundColor: 'white',
        width: '18%'
    },

    leftSideBar: {
        backgroundColor: 'white',
        width: '25%'
    },

    mainPart: {
        backgroundColor: 'white',
        flex: 1
    },

    divider: {
        height: '100%',
        width: 1,
        backgroundColor: '#7EBAFF !important',
        filter: 'opacity(0.5)'
    },

    content: {
        flex: 1,
        overflowY: 'auto',
        backgroundColor: 'white'
    },

    waitParent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh'
    }
})

export default useStyles