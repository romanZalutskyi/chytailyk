import React from 'react';
import Menu from "../components/Menu";
import styled from "styled-components";
import Address from "../components/Address";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgva(255, 255, 255, 0.5)
  ),
  url ("") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`

const Title = styled.h1`
  font-size: 60px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`
const Input2 = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 234px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: gray;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`

const Feedback = () => {
    return (
        <div>
            <Menu/>
            <Container>
                <Wrapper>
                    <Title>ФОРМА</Title>
                    <Form>
                        <Input placeholder="логін або електронна пошта"/>
                        <Input2 placeholder="текст повідомлення"/>
                        <Button>НАДІСЛАТИ</Button>
                    </Form>
                </Wrapper>
            </Container>
            <Address/>
            <Footer/>
        </div>
    );
};

export default Feedback;