import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Details from './components/Details/Details';

const WholePage = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #5687e3;
`;

const App = () => {
  const { regions } = useSelector((state) => state.regions);

  return (
    <WholePage>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {
          regions.map((region) => (
            <Route
              key={region.id}
              path={`/${region.address}`}
              element={(
                <Details
                  id={region.id}
                  flag={region.flag}
                  name={region.name}
                  deaths={region.deaths}
                  confirmed={region.confirmed}
                  todayDeaths={region.todayDeaths}
                  todayConfirmed={region.todayConfirmed}
                />
              )}
            />
          ))
        }
      </Routes>
    </WholePage>
  );
};

export default App;
