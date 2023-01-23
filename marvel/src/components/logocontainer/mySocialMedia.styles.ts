import { makeStyles } from "@material-ui/core"

const useStylesMySocialMedia = makeStyles((theme) => ({
    containerSocialLinks: {
        position: "absolute",
        marginLeft: "10%",
        marginTop: "10%",
        [theme.breakpoints.down("sm")]: {
            // position: "relative",
            marginTop: "100%",
        }
    },
    button: {

        '&:hover': {
            transform: "scale(1.1)",
        },
    },
    img: {
        height: 50, width: 50,
        objectFit: "contain",
        borderRadius: 99,
        boxShadow: '0px 0px 5px 0px grey',
        [theme.breakpoints.down("xs")]: {
            height: 30, width: 30,
        },
        '&:hover': {
            transform: "scale(1.1)",
        }
    }

}))

export default useStylesMySocialMedia