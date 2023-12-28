import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { createGlobalStyle } from 'styled-components';
import reset, { Reset } from "styled-reset";


const GlobalStyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );  
}

export default App;
