import { ChakraProvider } from "@chakra-ui/react";

import { Form } from "./components/Form/index";

import logo from "./assets/logo.svg";
import overrides from "./themes/themes";
import { GlobalStyle } from "./styles/styles";

function App() {
  return (
    <ChakraProvider theme={overrides}>
      <GlobalStyle />
      <div className="app">
        <header className="header">
          <img src={logo} className="premier-logo" alt="logo" />
        </header>
        <div className="content">
          <Form />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
