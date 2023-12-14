import { useFetch } from "../hooks/useFetch";
import { Buttons } from "./";

import { Box, Container, List, ListItem, Typography } from "@mui/material";
import FemaleIcon from "@mui/icons-material/female";
import MaleIcon from "@mui/icons-material/Male";
import CircleIcon from "@mui/icons-material/Circle";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";



export const CardInfo = ({ id, handleNext, handlePrevious, changePage }) => {


  const { character } = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  return (
        <>
          {/* Logo */}
            <img
              src="src\assets\logo.png"
              alt="Rick and Morty logo"
              className="logo"
            />

          {/* Contenedor padre */}
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >

            {/* Caja contenedor de la lista */}
            <Box
              sx={{
                height: "500px",
                width: "500px",
                border: 1,
                borderRadius: 8,
                backgroundColor: "rgba(216, 240, 191, 0.8)",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                position: "relative"
              }}
            >

              {/* Lista con información del pj */}
              <List sx={{ ml: 2 }}>

                <ListItem>
                  <img src={ character?.image } alt={ character?.name } />
                </ListItem>

                <ListItem>
                  <b>Name:</b> { character?.name }
                </ListItem>

                <ListItem>
                  <b>Gender:</b>
                    { character?.gender }

                    { character?.gender === "Female" &&
                      <FemaleIcon color="secondary" /> }
                    
                    { character?.gender === "Male" && <MaleIcon color="primary" /> }

                    { character?.gender === "unknown" &&
                      <QuestionMarkIcon fontSize="5" /> }

                </ListItem>

                <ListItem>
                  <b>Species:</b> { character?.species }
                </ListItem>

                <ListItem>
                  <b>Status:</b>
                  { character?.status }

                  { character?.status === "Alive" &&
                    <CircleIcon fontSize="5" sx={{ ml: 0.3, color: "green" }} /> }

                  { character?.status === "Dead" &&
                    <CircleIcon fontSize="5" sx={{ ml: 0.3, color: "red" }} /> }

                  { character?.status === "unknown" &&
                    <QuestionMarkIcon fontSize="5" /> }

                </ListItem>

                <ListItem>
                  <b>Location:</b>
                    { character?.location?.name }
                </ListItem>

              </List>

              {/* Caja que contiene el número de pj */}
              <Box
                sx={{
                  mt: 1,
                  mr: 3,
                  border: 1,
                  borderRadius: 4,
                  width: "130px",
                  height: "40px",
                  backgroundColor: "#DAF7A6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1" color="initial">
                  Character: { id }
                </Typography>

              </Box>

              {/* Contenedor del componente Buttons */}
              <Box sx={{ position: "absolute", left: 0, bottom: 0, mb: 2, ml: 2 }}>

                <Buttons
                  changePage={ changePage }
                  handleNext={ handleNext }
                  handlePrevious={ handlePrevious }
                />

              </Box>

            </Box>
          </Container>
        </>
  );
};
