import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './responsev.css';
import App from './App.jsx'
import { ChakraProvider} from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import theme from './components/ColorMode/colorMode.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)
