import React from 'react';
import logo from './images/Logo.svg';
import monster from './images/Component 6-1.svg';
import styled from 'styled-components';
import Path1 from './images/Path1.svg';
import Path2 from './images/Path2.svg';
import Path3 from './images/Path3.svg';
import Path4 from './images/Path4.svg';

const OuterWrapper = styled.div`
  height:100vh;
  background:#000000;

`;

const MainWrapper = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  height:inherit;
`;

const LoginWrapper = styled.div`
  border:2px solid #ffffff;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
  padding:1vh 5vw;
  width: 250px;
  height: 360px;
  margin: auto;
  p:nth-child(1)  {
    color:#66EAD5;
    font-size:14px;
  }
  p:nth-child(2)  {
    color:#FFFFFF;
    font-size:28px;
    margin-top:-5px;
  }
  img {
    width:50px;
    pointer-events:none;
  }
  img:last-child {
    position: absolute;
    top: 0px;
    margin:auto;
    width:120px;
    height:150px;
    pointer-events:none;
  }
`;

const FormWrapper = styled.div`
  display:flex;
  flex-direction:column;
  width: 20vw;
  margin:5px;
  * {
    margin:10px;
  }
  label {
    font-size:14px;
    color: #FFFFFF;
  }
  input {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px #707070;
    opacity: 1;
    padding:10px;
  }
  button {
    background: #66EAD5 0% 0% no-repeat padding-box;
    opacity: 1;
    color:#1D1D1D;
    letter-spacing: 0;
    padding:10px;
    font-weight:600;
    border:2px #66EAD5;
  }
`;

const TopLeftImage = styled.img`
  position: fixed;
  top: -36vh;
  left: -52px;
`;

const TopRightImage = styled.img`
    position: fixed;
    top: -36vh;
    right: -200px;
`;

const BottomLeftImage = styled.img`
    position: fixed;
    top: 59vh;
    left: -135px;
`;

const BottomRightImage = styled.img`
    position: fixed;
    top: 59vh;
    right: -445px;
`;


function App() {
  return (
    <OuterWrapper>
      <MainWrapper>
        <TopLeftImage src={Path1} />
        <TopRightImage src={Path2} />
        <BottomLeftImage src={Path4} />
        <BottomRightImage src={Path3} /> 
        <LoginWrapper>
          <p>You are invited to a chat room</p>
          <p>Aurora Hunters</p>
          <img src={monster} />
          <FormWrapper>
            <label>What's your name?</label>
            <input />
            <button>Let’s Chat</button>
          </FormWrapper>
          <img src={logo} />
        </LoginWrapper>
      </MainWrapper>
    </OuterWrapper>
  );
}

export default App;
