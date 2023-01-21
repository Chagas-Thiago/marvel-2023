import React, { FC } from "react"
//material-ui
import { Dialog, DialogProps } from "@material-ui/core"
import useStylesModal from "./modal.styles"
//styles

const CustomModal: FC<DialogProps> = ({
    children,
    ...rest
}) => {
    const classes = useStylesModal()

    return (
        <Dialog
            BackdropProps={{
                classes: {
                    root: classes.backDrop
                }
            }}
            {...rest}
        >
            {children}
        </Dialog>
    )
}


export default CustomModal