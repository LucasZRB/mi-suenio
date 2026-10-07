import { Route, Switch } from 'wouter';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';

// Estilos globales básicos para resetear el navegador
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.marronOscuro};
    -webkit-font-smoothing: antialiased;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar /> {/* Se mantiene fijo en toda la app */}

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/productos" component={Products} />
        <Route>404 - Página no encontrada</Route>
      </Switch>

      <Footer />
    </ThemeProvider>
  );
}
