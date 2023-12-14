import { Button } from "@mui/material"


export const Buttons = ({ changePage, handleNext, handlePrevious }) => {

  
    return (
        <>

            {/* Botón de anterior */}
            <Button
                onClick={ handlePrevious }
                disabled={ changePage === 1 }
                variant="contained"
                sx={{ mr: 20, backgroundColor: "#4CA332", ":hover": { backgroundColor: "#71F24A" } }}
            >
                Previous
            </Button>


            {/* Botón de siguiente */}
            <Button
            onClick={ handleNext }
            disabled={ changePage === 20 }
            variant="contained"
            sx={{ width: 100, ml: 10, backgroundColor: "#4CA332", ":hover": { backgroundColor: "#71F24A" } }}
            >
                Next
            </Button>


        </>
 )
}