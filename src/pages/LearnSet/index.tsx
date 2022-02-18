import styled from '@emotion/styled';
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useSets } from '../../hooks/useSets';
import { ISet } from '../../types/types';
import useLearn from '../../hooks/useLearn';
import LearnText from './LearnText';

const StyledGridContainer = styled(Grid)`
  max-width: 75%;
  margin: 0 auto;
`;

const StyledCardContent = styled(CardContent)`
  text-align: center;
`;

interface LearnSetProps {}

const LearnSet: FC<LearnSetProps> = () => {
  const { setId } = useParams();

  const { sets } = useSets();

  const currentSet: ISet | undefined = setId
    ? sets.find((set) => set.id === setId)
    : undefined;

  const { formik, modifiedExampleStrArray, currentTermIndex } =
    useLearn(currentSet);

  return (
    <div>
      <Typography variant='h5' component='h1'>
        {currentSet?.title}
      </Typography>

      <StyledGridContainer container columnSpacing={2}>
        <Grid item xs={12}>
          <Card variant='outlined'>
            <StyledCardContent>
              {modifiedExampleStrArray &&
                modifiedExampleStrArray.map(
                  (el: string, index: number, arr: string[]) => (
                    <LearnText
                      formik={formik}
                      el={el}
                      index={index}
                      arr={arr}
                    />
                  ),
                )}
            </StyledCardContent>
            <Divider />
            <StyledCardContent>
              <h4>{currentSet?.termCards[currentTermIndex]?.definition}</h4>
              <h4>term: {currentSet?.termCards[currentTermIndex]?.term}</h4>
            </StyledCardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Button type='submit' form='learn-form'>
            Next
          </Button>
        </Grid>
      </StyledGridContainer>
    </div>
  );
};

export default LearnSet;
