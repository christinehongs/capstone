import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import Sample from './components/Sample';
import Converter from './components/currencyConverter';
import callingData from './components/callingData';
import store from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './utils/theme';
import ItemSelect from './pages/ItemSelect';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store} resetCSS={true} theme={theme}>
        <Router>
          <BaseLayout>
            <DndProvider backend={HTML5Backend}>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/sample" element={<Sample />} />
                <Route path="/converter" element={<Converter />} />
                <Route path="/calling-data" element={<callingData />} />
                <Route path="/shopping" element={<ItemSelect />} />
              </Routes>
            </DndProvider>
          </BaseLayout>
        </Router>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
