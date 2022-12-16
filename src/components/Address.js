import styled from "styled-components";

const Container = styled.div`
  height: 70vh;
  padding: 30px 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
`;
const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 50px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const LocationContainer = styled.div`
  width: 100%;
  height: 90px;
`;

const Address = () => {
    return (
        <Container>
            <Title>Адреса фізичного магазину:</Title>
            <LocationContainer>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551.1509689291885!2d24.710171272078444!3d48.920524466135376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16cb3764e5d%3A0xec23533479023396!2z0KLQtdCw0YLRgCDQutGW0L3QviAi0JvRjtC8J9GU0YAi!5e0!3m2!1suk!2sbe!4v1671170189019!5m2!1suk!2sbe"
                    width="1600" height="570" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </LocationContainer>
        </Container>
    );
};

export default Address;