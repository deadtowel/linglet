import { Container } from '@mui/material';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateSet from './pages/CreateSet';
import Home from './pages/Home';
import Set from './pages/Set';

const StyledApp = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  min-height: 100vh;

  .Main-Container {
    flex: 1 0 auto;
  }
`;

function App() {
  return (
    <StyledApp>
      <Header />
      <Container className='Main-Container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-set' element={<CreateSet />} />
          <Route path='/set:setId' element={<Set />} />
        </Routes>
      </Container>
      <Footer />
    </StyledApp>
  );
}

export default App;
