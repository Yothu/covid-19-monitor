import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getRegionsAndTotals, listRegions } from '../../redux/regions/regions';
import Country from '../Country/Country';
import Regions from '../Regions/Regions';

const Container = styled.div``;

const Home = () => {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state.regions);

  useEffect(async () => {
    if (regions.length === 0) {
      const APIData = await getRegionsAndTotals();
      dispatch(listRegions(APIData));
    }
  }, []);

  return (
    <Container>
      <Country />
      <Regions />
    </Container>
  );
};

export default Home;
