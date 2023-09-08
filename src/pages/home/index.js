import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    position : relative;
    overflow: hidden;
    width : 100vw;
    height : 100vh;
    z-index : 1;
`
const Img = styled.img`
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    z-index: 1;
    object-fit: cover;
`

const TitleContainer = styled.div`
    position : absolute;
    color :  white;
    top :  50%;
    transform:  translate(-50%, -50%);
    left : 50%;
    text-align: center;
`
const Title = styled.div`
    font-size : 50px;
    font-weight : 800;
`
const TitleContent = styled.div`
    font-size : 25px;
    font-weight : 400;
`
const SubDescription = styled.div`
    font-size : 25px;
    font-weight : 400;
`


function Home() {
    return(<Container >
        <Img src="images/CED-Banner.png" />
        <TitleContainer>
            <TitleContent>5 October 2023, Festival Arena - Dubai Festival City </TitleContent>
            <Title>CRYPTO EXPO DUBAI 2023</Title>
            <SubDescription>DABAL'S lRGEST CRYPTOCURRENCY SUMMIT</SubDescription>
        </TitleContainer>
    </Container>)
}

export default Home