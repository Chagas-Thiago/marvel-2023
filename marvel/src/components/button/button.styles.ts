import { makeStyles } from "@material-ui/core"

const useStylesButton = makeStyles((theme) => ({

    avatar: {
        transition: '.2s',
        width: 50,
        height: 50,
        objectFit: 'cover',
        objectPosition: 'center',
        "&:hover": {
            transform: 'scale(1.05)',
            boxShadow: '0px 0px 10px red',

        },
    },
    text: {
        color: "white",
    }
}))

export default useStylesButton