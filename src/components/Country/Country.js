import styled from 'styled-components';
import { useSelector } from 'react-redux';
import country from '../../assets/images/chile-silhouette.svg';
import '../../assets/Fonts.css';

const MainStats = styled.section`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  background-color: #5687e3;
`;

const CountryImageContainer = styled.div`

`;

const CountryDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CountryName = styled.h2`
  color: white;
  margin: 0.2rem;
  font-family: 'Gill Sans';
`;

const MainData = styled.p`
  color: white;
  display: flex;
  margin: 0 0.2rem;
  font-size: 0.9rem;
  align-items: flex-end;
  font-family: 'Lato', sans-serif;
`;

const countryStyle = {
  width: '100%',
  filter: 'invert(100)',
};

const Small = styled.span`
  margin: 0 0.2rem;
  font-size: 0.7rem;
`;

const Country = () => {
  const { totals } = useSelector((state) => state.regions);
  const CountryImage = () => <img src={country} style={countryStyle} alt="chile-silhouette" />;

  return (
    <MainStats>
      <CountryImageContainer>
        <CountryImage />
      </CountryImageContainer>
      <CountryDataContainer>
        <CountryName>{totals.name}</CountryName>
        <MainData>
          {totals.confirmed}
          <Small>confirmed</Small>
        </MainData>
        <MainData>
          {totals.deaths}
          <Small>deaths</Small>
        </MainData>
        <MainData>
          {totals.todayDeaths}
          <Small>new confirmed</Small>
        </MainData>
        <MainData>
          {totals.todayConfirmed}
          <Small>new deaths</Small>
        </MainData>
      </CountryDataContainer>
    </MainStats>

  );
};

export default Country;
