import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.12)',
        marginLeft: 0,
    },
    title: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
    },
    root: {
        maxWidth: '100%'
    },

    media: {
        height:0,
        paddingTop: '56.25%',
    },

    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-between',
    },

    grow: {
        flexGrow: 1,
    },
}));