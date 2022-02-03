import { Container } from '@mui/material';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateSet from './pages/CreateSet';
import Home from './pages/Home';
import StudySet from './pages/StudySet';

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

function App() {
  return (
    <StyledApp>
      <Header />
      <MainContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-set' element={<CreateSet />} />
          <Route path='/set:setId' element={<StudySet />} />
        </Routes>
      </MainContainer>
      <Footer />
    </StyledApp>
  );
}

export default App;
