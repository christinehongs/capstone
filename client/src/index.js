import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import Sample from './components/Sample'
import store from './redux/store'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme'


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store} resetCSS={true} theme={theme} >
        <Router>
          <BaseLayout>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='/sample' element={<Sample />} />
            </Routes>
          </BaseLayout>
        </Router>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
