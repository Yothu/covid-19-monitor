import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsArrowRightCircle as RightArrow } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import '../../assets/Fonts.css';

const Card = styled.li`
  padding: 6px 6px 12px 6px;
  &:nth-child(4n+1), &:nth-child(4n+4) {
    background-color: #4167ae;
  }
  &:nth-child(4n+2), &:nth-child(4n+3) {
    background-color: #3f62a6;
  }
  &:hover {
    border: 1px solid white;
    padding: 5px 5px 11px 5px;
  }
`;

const Top = styled.div`
  display: flex;
  padding-bottom: 0.3rem;
  justify-content: space-between;
`;
const DataContainer = styled.div`
  text-align: end;
`;
const Name = styled.h3`
  margin: 0;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const Numbers = styled.p`
  margin: 0;
  color: white;
  font-size: 0.7rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const linkStyle = {
  display: 'grid',
  textDecoration: 'none',
  gridTemplateRows: '50% 50%',
};

const flagStyle = {
  height: '3.5rem',
};

const RegionCard = ({ data, filter }) => {
  const {
    id, name, todayConfirmed, todayDeaths,
  } = data;
  const Flag = () => <img src={data.flag} style={flagStyle} alt="region-flag" />;

  return (
    <Card id={id}>
      <Link to={`/${data.address}`} style={linkStyle}>
        <IconContext.Provider value={{ color: 'white' }}>
          <Top>
            <Flag />
            <RightArrow />
          </Top>
        </IconContext.Provider>
        <DataContainer>
          <Name>{name}</Name>
          { filter === 'DEFAULT' && <Numbers>{todayConfirmed}</Numbers> }
          { filter === 'CONFIRMED' && <Numbers>{todayConfirmed}</Numbers> }
          { filter === 'DEATHS' && <Numbers>{todayDeaths}</Numbers> }
        </DataContainer>
      </Link>
    </Card>
  );
};

RegionCard.propTypes = {
  filter: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default RegionCard;
