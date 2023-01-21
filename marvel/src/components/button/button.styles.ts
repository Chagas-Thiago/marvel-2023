import { makeStyles } from "@material-ui/core"

const useStylesButton = makeStyles((theme) => ({
    button: {
        height: 40,
        boxShadow: '0px 0px 6px 0px grey',
        marginBottom: 10,
        marginTop: 20,
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