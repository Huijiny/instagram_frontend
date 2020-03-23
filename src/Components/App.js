import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {gql} from "apollo-boost";
import { HashRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useQuery } from "react-apollo-hooks" 
import GlobalStyles from "../Styles/GlobalStyles"
import Theme from "../Styles/Theme"
import Routes from './Routes';
import Header from './Header';
import Footer from "./Footer"

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;


export default () => {
  ////backend 작성되면 아래 query에서 가져오기.
  //const {data : {isLoggedIn}} = useQuery(QUERY);
  const isLoggedIn = true;

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles/>
          <Router>
            <>
              <Header/>
              <Wrapper>
                <Routes isLoggedIn={isLoggedIn}/>
                <Footer/>
              </Wrapper>
            </>
          </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
      </>
    </ThemeProvider>
  )
}
