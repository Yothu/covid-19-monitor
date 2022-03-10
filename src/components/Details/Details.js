import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.section`
  height: 100%;
`;
const DataContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const Data = styled.li`
  display: flex;
  padding: 0 0.3rem;
  align-items: center;
  justify-content: space-between;
  &:nth-child(odd) {
    background-color: #4167ae;
  }
  &:nth-child(even) {
    background-color: #3f62a6;
  }
`;

const Main = styled.div`
  padding: 1rem 0.3rem;
  display: grid;
  text-align: end;
  background-color: #5687e3;
  grid-template-columns: 60% 40%;
`;

const FlagContainer = styled.div`
  margin-right: 0.5rem;
`;

const MainData = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.h3`
  margin: 0;
  color: white;
  font-size: 1.1rem;
  font-family: 'Gill Sans';
`;

const Confirmed = styled.p`
  color: white;
  margin: 0 0.2rem;
  font-size: 0.7rem;
  font-family: 'Lato', sans-serif;
`;

const Category = styled.div`
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  font-family: 'Lato';
  padding: 0.1rem 0.3rem ;
  background-color: #35548b;
`;

const Label = styled.p`
  color: white;
  font-size: 1rem;
  margin: 0.8rem 0;
  font-weight: bold;
  font-family: 'Gill Sans';
`;

const NumberData = styled.p`
  color: white;
  margin: 0.8rem 0;
  font-family: 'Lato';
`;

const flagStyle = {
  height: '6.5rem',
};

const Details = ({
  id, name, confirmed, deaths, todayConfirmed, todayDeaths, flag,
}) => {
  const Flag = () => <img src={flag} style={flagStyle} alt="region-flag" />;
  return (
    <Container id={id}>
      <Main>
        <FlagContainer>
          <Flag />
        </FlagContainer>
        <MainData>
          <Name>{name}</Name>
          <Confirmed>
            {confirmed}
            {' '}
            confirmed
          </Confirmed>
        </MainData>
      </Main>
      <Category>Region Breakdown</Category>
      <DataContainer>
        <Data>
          <Label>Total Confirmed</Label>
          <NumberData>{confirmed}</NumberData>
        </Data>
        <Data>
          <Label>Total Deaths</Label>
          <NumberData>{deaths}</NumberData>
        </Data>
        <Data>
          <Label>Today&apos;s Confirmed</Label>
          <NumberData>{todayConfirmed}</NumberData>
        </Data>
        <Data>
          <Label>Today&apos;s Deaths</Label>
          <NumberData>{todayDeaths}</NumberData>
        </Data>
      </DataContainer>
    </Container>
  );
};

Details.propTypes = {
  id: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  deaths: PropTypes.number.isRequired,
  confirmed: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  todayConfirmed: PropTypes.number.isRequired,
};

export default Details;
