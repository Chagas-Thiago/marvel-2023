import { makeStyles } from "@material-ui/core"

const useStylesCharId = makeStyles((theme) => ({
    container: {
        backgroundColor: "#EBEBEB",
        boxShadow: "0px 0px 0px 8px white",
        alignItems: "center",
        [theme.breakpoints.down("xs")]: {
            marginTop: "2%",
            marginBottom: "2%"
        }
    },
    name: {
        textAlign: "center",
        color: "#B22234",
        fontSize: 30,
        fontWeight: "bold",
        textShadow: "black 1px 0 2px"
    },
    typography: {
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 18,
        color: "black",
        textAlign: "center",
        fontWeight: "bold"

    },
    img: {
        boxShadow: "0px 0px 9px 1px black",
        width: "100%"
    }
}))

export default useStylesCharId