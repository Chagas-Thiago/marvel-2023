import { makeStyles } from "@material-ui/core"

const useStylestechPäge = makeStyles((theme) => ({
    img: {
        transition: ".5s",
        marignRight: 20,
        marginLeft: 20,
        cursor: "pointer",
        // boxShadow: "0px 0px 4px 1px white",
        height: 100,
        width: 150,
        objectFit: "contain",
        "&:hover": {
            transform: 'scale(1.2)'
        }

    },
    containerImage: {
        zIndex: 3,
        position: "absolute",
        justifyContent: "center",
        marginTop: "3%",
    },
    root: {
        fontSize: 16
    }
}))

export default useStylestechPäge