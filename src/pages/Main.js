import React from 'react';
import Slider from "../components/Slider";
import Menu from "../components/Menu";
import Footer from '../components/Footer';
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
const Image = styled.img`
  height: 95%
`
const InfoContainer = styled.div`
  flex: 2;
  padding: 120px;
`
const Title = styled.h1`
  font-size: 72px
`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 4px;
`

const Home = () => {
    return (
        <div className='Login-component'>
            <Menu/>
            <Container>
                <InfoContainer>
                    <Title>Вітаю на сайті читайлик!</Title>
                    <Desc> Тут Ви завжди зможете знайти цікаву книгу.<br/>
                        В нас найдешевші книги!!!.<br/>
                        Швидка оплата і доставка<br/>
                        Читайлик - зачитаєшся!!!</Desc>
                </InfoContainer>
                <ImgContainer>
                    <Image src="../images/logologo.png"/>
                </ImgContainer>
            </Container>
            <Slider/>
            <Footer/>
        </div>
    );
};

export default Home;