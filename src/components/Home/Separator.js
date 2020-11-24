import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
const SeparatorStyled=styled(motion.div)`
    position: relative;
    top: ${({name})=> name === 'one' ? '50%' : '49.9%'};
    left: ${({name})=> name === 'one' ? '1em' : '50.5%'};
    height: 1px;
    width: 48.2%;
    background: rgb(255, 70, 70);
    z-index: 90;
    


  @media screen and (max-width: 838px) {
    
      width: 46.2%;
   
  }
  @media screen and (max-width: 720px) {
    
      top: ${({name})=> name === 'one' ? '43.5%' : '43.4%'};
    
  }

  @media screen and (max-width: 670px) {
      width: 45.2%;
      top: ${({name})=> name === 'one' ? '52.5%' : '52.4%'};
   
  }
  @media screen and (max-width: 538px) {
    top: ${({name})=> name === 'one' ? '49.5%' : '49.4%'};
    
  }
  @media screen and (max-width: 501px) {
    top: ${({name})=> name === 'one' ? '43.5%' : '43.4%'};
    
  }
  @media screen and (max-width: 480px) {
    top: ${({name})=> name === 'one' ? '57.5%' : '57.3%'};
  
  }

 
  @media screen and (max-width: 413px) {
    top: ${({name})=> name === 'one' ? '52.5%' : '52.4%'};
    
  }
`
const Separator = ({name}) => {
    const pageVariants = {
        inX: {
          opacity: 1,
          x: 0,
        },
        outX: {
          opacity: 0,
          x: `${name === 'one' ? '-100vw' : '+100vw'}` ,
        },
    }

    return (
        <SeparatorStyled
            initial={pageVariants.outX}
            animate={pageVariants.inX}
            exit={pageVariants.outX}
            transition={{ duration: 1.5 }}
            name={name}
            >
           
        </SeparatorStyled>
    )
}

export default Separator
