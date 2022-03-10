import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import RegionCard from '../RegionCard/RegionCard';
import { orderRegionsByTodaysConfirmed, orderRegionsByTodaysDeaths } from '../../redux/regions/regions';
import '../../assets/Fonts.css';

const Container = styled.section`

`;

const Filter = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 0.8rem;
  font-family: 'Lato';
  padding: 0.1rem 0.3rem ;
  background-color: #35548b;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  list-style: none;
  grid-template-columns: 50% 50%;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.6rem;
  font-family: 'Lato';
  margin-left: 0.2rem;
  background-color: #4369b2;
`;

const Regions = () => {
  const { regions, filter } = useSelector((state) => state.regions);
  const dispatch = useDispatch();

  const orderConfirmed = () => {
    dispatch(orderRegionsByTodaysConfirmed());
  };

  const orderDeaths = () => {
    dispatch(orderRegionsByTodaysDeaths());
  };

  return (
    <Container>
      <Filter>
        Stats by Region
        <BtnContainer>
          Filtered by:
          { filter === 'DEFAULT' && <Button onClick={orderDeaths}>No filter</Button> }
          { filter === 'CONFIRMED' && <Button onClick={orderDeaths}>Most Confirmed</Button> }
          { filter === 'DEATHS' && <Button onClick={orderConfirmed}>Most Deaths</Button> }
        </BtnContainer>
      </Filter>
      <List>
        {
          regions.map((region) => (
            <RegionCard
              data={region}
              filter={filter}
              key={region.id}
            />
          ))
        }
      </List>
    </Container>
  );
};

export default Regions;
