import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    backgroundDark: '#312056',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

interface IProps {
  children: React.ReactNode;
}

const Theme = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
