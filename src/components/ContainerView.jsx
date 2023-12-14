import { useState } from "react";
import { CardInfo } from ".";


export const ContainerView = () => {
  
  const [ changePage, setChangePage] = useState(1);

  const handleNext = () => {
      setChangePage( changePage === 20 ? 20 : changePage + 1)
  }

  const handlePrevious = () => {
      setChangePage( changePage === 1 ? 1 : changePage - 1 )
  }
  
  return (
    <>
  
        <CardInfo id={ changePage } handleNext={ handleNext } handlePrevious={ handlePrevious } changePage={ changePage } />   
    
    </>
 )
}