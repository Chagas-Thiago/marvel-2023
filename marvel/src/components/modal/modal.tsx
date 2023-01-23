import React from "react"
//material-ui
import { Dialog, Grid, Slide } from "@material-ui/core"
import useStylesModal from "./modal.styles"
import { TransitionProps } from "@material-ui/core/transitions";
//styles

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface IModal {
    image: string
    title: string
    description: string
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CustomModal = ({ open, setOpen, image, title, description }: IModal) => {
    const classes = useStylesModal()

    return (
        <Dialog
            style={{ transition: "1.5s" }}
            maxWidth="md"
            open={open}
            onClose={() => setOpen(false)}
            TransitionComponent={Transition}
            BackdropProps={{
                classes: {
                    root: classes.backDrop
                }
            }}
        >
            <Grid style={{ transition: "1.5s" }} onClick={() => setOpen(false)} container alignItems='center'>
                <Grid container alignItems='center' item xs={3}>
                    <img alt=""
                        style={{ height: "99%", width: "100%" }}
                        src={image}
                    />
                </Grid>

                <Grid style={{ padding: 10 }} item xs={9}>
                    <p style={{
                        textAlign: "center",
                        color: "#B22234",
                        fontSize: 30,
                        fontWeight: "bold",
                        textShadow: "black 1px 0 2px"
                    }}>
                        {title}
                    </p>
                    {description}
                </Grid>

            </Grid>
        </Dialog>
    )
}


export default CustomModal