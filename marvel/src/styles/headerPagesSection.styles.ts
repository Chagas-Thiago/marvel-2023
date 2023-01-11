import { makeStyles } from "@material-ui/core"

const useStylesHeader = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    containerHeader: {
        backgroundColor: "#3B3B3B",
        justifyContent: "space-around"
    },
    container: {
        height: 100,
        width: "100%"
    },
    projectMarvelText: {
        color: "white",
        textAlign: "center"
    },
    containerInputeAndaBottom: {
        height: 45,
        alignItems: "center"
    },
    input: {
        height: 35,
        borderRadius: 5,
        width: "50%",
        backgroundColor: "#ffff"
    },
    button: {
        marginLeft: "1%",
        height: 35,
        backgroundColor: "#EE1C25"
    }
}))

export default useStylesHeader