import { Container } from '@mui/material';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateEditSet from './pages/CreateEditSet';
import Home from './pages/Home';
import LearnSet from './pages/LearnSet';
import useInit from './hooks/useInit';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  min-height: 100vh;
  background-color: ${(props) => props.color};
`;

const MainContainer = styled(Container)`
  flex: 1 0 auto;
  padding: 1rem 0;
`;

export default function App() {
  useInit();

  return (
    <StyledApp>
      <Header />
      <MainContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-set' element={<CreateEditSet />} />
          <Route path='/edit-set:setId' element={<CreateEditSet edit />} />
          <Route path='/set:setId' element={<LearnSet />} />
        </Routes>
      </MainContainer>
      <Footer />
    </StyledApp>
  );
}
