import styled from '@emotion/styled';
import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSets } from '../../hooks/useSets';
import { ISet } from '../../types/types';
import useLearn from '../../hooks/useLearn';

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

  // const prevBtnClickHandler = (): void => {
  //   if (currentSet && currentTermIndex === 0)
  //     setCurrentTermIndex(currentSet.termCards.length - 1);
  //   else {
  //     setCurrentTermIndex(currentTermIndex - 1);
  //   }
  // };

  // const nextBtnClickHandler = (): void => {
  //   if (currentSet && currentTermIndex === currentSet.termCards.length - 1)
  //     setCurrentTermIndex(0);
  //   else {
  //     setCurrentTermIndex(currentTermIndex + 1);
  //   }
  // };

  const { modifiedExampleStrArray, getJsxElements, currentTermIndex } =
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
                modifiedExampleStrArray.map(getJsxElements)}
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
