import { makeStyles } from "@material-ui/core"

const useStylesButton = makeStyles((theme) => ({
    button: {
        backgroundColor: "grey",
        height: 40,
        boxShadow: '0px 0px 6px 0px grey',
        marginBottom: 10,
        marginTop: 20,
        marginLeft: "5%",
        merginRight: "5%",
        "&:hover": {
            transform: 'scale(1.05)',
        },
    },
    img: {
        color: 'white',
        width: 30,
        height: 20
    },
    text: {
        textTransform: 'initial',
        fontSize: 14,
        color: "white",
    }
}))

export default useStylesButton