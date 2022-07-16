import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '4%',
    },
    root: {
        maxWidth: '100%',
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
    checkOutButton: {
        minWidth: '150px',
    },

    cardDetails: {
        display: 'flex',
        marginTop: '3%',
        width: '100%',
        justifyContent: 'space-between',
    }
}));