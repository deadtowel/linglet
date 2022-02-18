import { Grid, Typography, Button, Container, Box } from '@mui/material';
import styled from '@emotion/styled';
import SetCard from './SetCard';
import useSets from '../../hooks/useSets';
import { ISet } from '../../types/types';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)`
  margin: 1rem 0;
  & > Button {
    margin: 0 0.5rem;
  }
`;

export default function Home() {
  const { sets, clearSets } = useSets();

  return (
    <div>
      <StyledBox>
        <Link to='/create-set'>
          <Button variant='contained'>New Set</Button>
        </Link>
        <Button variant='contained' color='error' onClick={() => clearSets()}>
          Clear sets
        </Button>
      </StyledBox>

      <Grid container spacing={3}>
        {sets &&
          sets.map((set: ISet) => {
            return (
              <Grid item lg={3} key={set.id}>
                <SetCard currentSet={set} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
