import React from "react";
import styled from 'styled-components';

const Flip_Card =styled.div`
    background-color: transparent;
    width: 128px;
    height: 128px;
    perspective: 1000px;
    

`
const Flip_Card_Innder =  styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    &:hover {
        transform: rotateY(180deg);
    }
`
const Flip_Card_Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0 solid #e5e7eb;
    border-radius : 12px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: black;
`
const Flip_Card_Back = styled.div`
    position: absolute;
    background: #141d50;
    width: 100%;
    height: 100%;
    border: 0 solid #e5e7eb;
    border-radius : 12px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    color: white;
    transform: rotateY(180deg);
`

const Img = styled.img`
    border-width: none;
    height : 128px;
    width :  128px;
    border-radius : 12px;
`
function Card ({}) {
    return(<Flip_Card>
        <Flip_Card_Innder>
            <Flip_Card_Front>
               <Img src ="images/avatar.jpg"/>
            </Flip_Card_Front>
            <Flip_Card_Back>
                <h1>John Doe</h1> 
                <p>Architect & Engineer</p> 
                <p>We love that guy</p>
            </Flip_Card_Back>
        </Flip_Card_Innder>
    </Flip_Card>)
}

export default Card