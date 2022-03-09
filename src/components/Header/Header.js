import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backArrow from '../../assets/icons/back-arrow.png';
import mic from '../../assets/icons/microphone.png';
import settings from '../../assets/icons/settings.png';
import '../../assets/Fonts.css';

const Container = styled.header`
  padding: 0.5rem;
  background-color: #4369b2;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Back = styled.div`
  display: flex;
  align-items: center;
`;

const TitleStyle = {
  color: 'white',
  fontSize: '0.8rem',
  fontFamily: 'Lato',
  textDecoration: 'none',
};

const Options = styled.div`
  display: flex;
  align-items: center;
`;

const arrowStyle = {
  height: '1.4rem',
  width: '1.4rem',
  filter: 'invert(100)',
};

const micStyle = {
  height: '1.1rem',
  width: '1.1rem',
  paddingRight: '1rem',
  filter: 'invert(100)',
};

const iconStyle = {
  height: '1.1rem',
  width: '1.1rem',
  filter: 'invert(100)',
};

const Header = () => {
  const MicIcon = () => <img src={mic} style={micStyle} alt="microphone-icon" />;
  const BackIcon = () => <img src={backArrow} style={arrowStyle} alt="back-icon" />;
  const SettingsIcon = () => <img src={settings} style={iconStyle} alt="settings-icon" />;

  return (
    <Container>
      <Nav>
        <Back>
          <Link to="/"><BackIcon /></Link>
          {/* <Year>2022</Year> */}
        </Back>
        <Link to="/" style={TitleStyle}>Daily Covid-19</Link>
        <Options>
          <MicIcon />
          <SettingsIcon />
        </Options>
      </Nav>
    </Container>
  );
};

export default Header;
