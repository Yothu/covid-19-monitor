import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Details from './components/Details/Details';

const WholePage = styled.div`
  min-height: 100vh;
  padding: 0;
  margin: 0;
`;

const App = () => (
  <WholePage>
    <Header />
    <Routes>
      <Route path="home" element={<Header />} />
      <Route path="details" element={<Details />} />
    </Routes>
  </WholePage>
);

export default App;
