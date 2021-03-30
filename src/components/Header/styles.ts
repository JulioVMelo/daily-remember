import styled from 'styled-components';
// import Theme from '../../styles/Theme';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 150px 0;

  background-color: ${(props) => props.theme.colors.backgroundDark};

  h1 {
    font-size: 30px;
    color: #fff;
    font-weight: 500;
  }
`;
