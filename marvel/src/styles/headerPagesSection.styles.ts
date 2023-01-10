import { makeStyles } from "@material-ui/core"

const useStylesHeader = makeStyles((theme)=>({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    container: {
        height: 100,
        width: "100%"
}
}))

export default useStylesHeader