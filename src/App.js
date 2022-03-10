import { Routes } from 'react-router-dom';
import styled from 'styled-components';

const WholePage = styled.div`
  min-height: 100vh;
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
