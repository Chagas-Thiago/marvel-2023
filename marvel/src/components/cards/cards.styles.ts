import { makeStyles } from "@material-ui/core"

const useStylesCards = makeStyles((theme) => ({
    containerCards: {
        position: "relative",
        justifyContent: "center",
        cursor: "pointer",
        marginBottom: 20,


        "&:hover div": {
            height: 350,
            borderRadius: 10,

        },
        "&:hover p": {

            fontSize: 18,
            // borderRadius: 0,

        }
    },
    face1: {

        transition: "0.5s",
        fontSize: 22,
        textAlign: "center",
        verticalAlign: "center",
        fontWeight: "bold",
        height: 60,
        width: 270,
        color: "white",
        // backgroundColor: "red",
        opacity: 0.8,
        borderRadius: "10px 10px 100px 100px;",
        position: "absolute",
        background: "conic-gradient(from 315deg, black, #666)"
    },
    img: {
        borderRadius: 10,
        cursor: "pointer",
        marginBottom: "5%",
        height: 350,
        width: 270,
        boxShadow: "0px 0px 9px 2px grey",
    },

    typography: {
        transition: "0.3s",
        fontSize: 0,
        color: "white",
        textAlign: "center",
        marginTop: 60,
        width: 270,
        zIndex: 1,
        top: 0,
        position: "absolute",
        fontWeight: "bold"
    },


}))

export default useStylesCards