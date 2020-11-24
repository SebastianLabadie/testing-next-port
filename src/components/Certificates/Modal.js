import React from 'react'
import ReactDom from 'react-dom'
import styled, { keyframes } from 'styled-components'
//import Button from './Button'

const hide = keyframes`
    from {
    transform: scale(1);
    opacity:1;
  }

  to {
    transform: scale(0);
    opacity:0;
  }
`

const show = keyframes`
    from {
    transform: scale(0);
    opacity:0;
  }

  to {
    transform: scale(1);
    opacity:1;
  }
`

const ModalStyled=styled.div`
    display:${(props)=>props.show ? 'block' : "none"};

    .modal__backdrop{
        display:${(props)=>props.show ? 'block' : "none"};
        position: absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
        background-color: rgba(0, 0, 0, .7);
        z-index: 1;
    }
    .modal__content{
        width:700px;
        position: fixed;
        top:10vh;
        left:calc(50% - 350px);
        z-index:2;
    }

    .modal__hide{
        opacity: 0;
        animation:${hide} .25s;
        transform: scale(0);
    }

    .modal__show{
        opacity: 1;
        animation:${show} .2s;
        transform: scale(1);
    }

    img{
      max-width:100%;
    }

    @media (max-width:768px){
        .modal__content{
          width:500px;
          left:calc(50% - 250px);
        }
    } 

    @media (max-width:556px){
        .modal__content{
          width:350px;
          left:calc(50% - 175px);
        }
    } 
`
function Modal({show,setShow,img}) {

 return (
        <ModalStyled show={show}>
            <div className="modal__backdrop" onClick={setShow} ></div>
          <div className={show ? `modal__content modal__show` : `modal__content modal__hide` }>
            {/* <Button/> */}
            <img src={img} alt=""  />
             </div>
        </ModalStyled>
    )
}

export default Modal