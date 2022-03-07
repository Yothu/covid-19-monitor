import styled from 'styled-components';
import backArrow from '../../assets/icons/back-arrow.png';
import mic from '../../assets/icons/microphone.png';
import settings from '../../assets/icons/settings.png';

const Container = styled.header`
  padding: 0.5rem;
  background-color: red;
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

const Year = styled.p`
  margin: 0;
`;

const Category = styled.div`

`;

const Options = styled.div`
  display: flex;
  align-items: center;
`;

const iconStyle = {
  height: '2rem',
  width: '2rem',
};

const Header = () => {
  const BackIcon = () => <img src={backArrow} style={iconStyle} alt="back-icon" />;
  const MicIcon = () => <img src={mic} style={iconStyle} alt="microphone-icon" />;
  const SettingsIcon = () => <img src={settings} style={iconStyle} alt="settings-icon" />;

  return (
    <Container>
      <Nav>
        <Back>
          <BackIcon />
          <Year>2022</Year>
        </Back>
        <Category>Daily Covid-19</Category>
        <Options>
          <MicIcon />
          <SettingsIcon />
        </Options>
      </Nav>
    </Container>
  );
};

export default Header;
