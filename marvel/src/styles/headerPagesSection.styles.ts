import { makeStyles } from "@material-ui/core"

const useStylesHeader = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    containerHeader: {

        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "5%"
        }

    },
    container: {
        height: 100,
        width: "100%",
        boxShadow: "0px 0px 5px 1px white",
    },
    projectMarvelText: {
        color: "white",
        textAlign: "center"
    },
    containerInputeBottom: {
        height: 45,
        alignItems: "center"
    },
    input: {
        height: 35,
        borderRadius: 5,
        width: "50%",
        backgroundColor: "#ffff",
        boxShadow: "0px 0px 4px 0px white"
    },
    button: {
        boxShadow: "0px 0px 4px 0px white",
        marginLeft: "1%",
        height: 35,
        backgroundColor: "#EE1C25"
    }
}))

export default useStylesHeader