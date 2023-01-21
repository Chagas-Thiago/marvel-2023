import { makeStyles } from "@material-ui/core"

const useStylesLogoContainer = makeStyles((theme) => ({
    button: {

        '&:hover': {
            transform: "scale(1.1)",
        },
    },
    img: {
        objectFit: "contain",
        borderRadius: 99,
        boxShadow: '0px 0px 5px 0px grey',
        '&:hover': {
            transform: "scale(1.1)",
        },
    },

}))

export default useStylesLogoContainer