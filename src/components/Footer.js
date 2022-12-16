import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

export const Footer = () => {
  return (
    <CDBFooter className="shadow" color='white' bgColor='dark'>
      <CDBBox color='white' bgColor='dark'
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '100%' }}
      >
        <CDBBox display="flex" alignItems="center" color='blue' bgColor='dark'>
          <a href="/" className="d-flex align-items-center p-0 text-blue" color='blue' bgColor='dark'>
            <img
              alt="logo"
              src="../images/logologo.png"
              width="50px"
            />
            <span  className="ml-4 h5 mb-0 font-weight-bold" color='blue' bgColor='dark'>Читайлик</span>
          </a>
        </CDBBox>
        <CDBBox color='white' bgColor='dark'>
          <small className="ml-2">&copy; 2022. Всі права захищені.</small>
        </CDBBox>
        <CDBBox display="flex" color='white' bgColor='dark'>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer