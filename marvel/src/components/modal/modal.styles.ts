import { makeStyles } from "@material-ui/core"

const useStylesModal = makeStyles((theme) => ({
    backDrop: {
        backdropFilter: "blur(13px)",
        backgroundColor: "rgba(0,0,30,0.4)",
    },
    globalContainer: {
        borderRadius: "33px",
        // padding: "50px 0 50px 0px",
        padding: "3% 3% 3%",

        [theme.breakpoints.down("lg")]: {
            padding: "3rem !important",
        },
        [theme.breakpoints.down("md")]: {
            padding: "10px 0 10px 0px",
            placeItems: "normal",
            alignSelf: "center",
        },
        [theme.breakpoints.down("xs")]: {
            alignSelf: "center",
            padding: "2rem !important",
        },

    },

}))

export default useStylesModal