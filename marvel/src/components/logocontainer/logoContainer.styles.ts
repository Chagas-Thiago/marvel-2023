import { makeStyles } from "@material-ui/core"

const useStylesLogoContainer = makeStyles((theme) => ({
    button: {

        "&:hover img": {

            background: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(path-to-image)",
            transform: "scaleX(1.03)",
            filter: "blur(5px)"
        }
    },
    img: {
        boxShadow: "0px 0px 5px 1px rgba(255, 255, 255, 0.6)",
        filter: "brightness(1.2) drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.6))"
    }
}))

export default useStylesLogoContainer