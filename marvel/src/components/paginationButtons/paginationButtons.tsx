import { Grid, Button } from '@material-ui/core'
import React from 'react'
import { ImArrowUp, ImArrowDown } from 'react-icons/im'

interface IPaginationButtons {
    setPagination: React.Dispatch<React.SetStateAction<number>>
    pagination: number
}

const PaginationButtons = ({ pagination, setPagination }: IPaginationButtons) => {

    const Plus = () => {
        setPagination((prev: number) => prev + 8)
    }
    return (

        <Grid style={{ paddingBottom: 20 }} container justifyContent='center'>
            <p style={{ color: 'white' }}>Voir moins</p>
            <Button onClick={() => setPagination(pagination > 8 ? pagination - 8 : 8)}
                style={{
                    backgroundColor: "red",
                    opacity: pagination === 8 ? 0.5 : 1,
                    fontSize: 30,
                    boxShadow: "0px 0px 2px 0px white",
                    borderRadius: 5,
                    marginRight: 10,
                    marginLeft: 10,
                }}>
                <ImArrowUp style={{ color: 'black' }} />
            </Button>
            <Button
                onClick={Plus}
                style={{
                    backgroundColor: "red",
                    fontSize: 30,
                    boxShadow: "0px 0px 2px 0px white",
                    borderRadius: 5,
                    marginLeft: 10,
                    marginRight: 10
                }}>
                <ImArrowDown style={{ color: 'black' }} />
            </Button>
            <p style={{ color: 'white' }}>Voir plus</p>
        </Grid>
    )
}

export default PaginationButtons