import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useSets } from '../hooks/useSets';
import DragDrop from '../components/DragDrop';
import { useNavigate } from 'react-router-dom';
import TermCard from '../components/TermCard';
import styled from '@emotion/styled';

const StyledCreateSet = styled.div`
  padding: 1rem 0 3rem;
  .Form-Container {
    margin-bottom: 3rem;
  }
  .Set-Form-Input {
    margin-bottom: 1rem;
    &:last-child {
      margin: 0;
    }
  }
`;

export default function CreateSet() {
  const [titleValue, setTitleValue] = useState<string>('');
  const [descriptionValue, setDescriptionValue] = useState<string>('');

  const [termsAmount, setTermsAmount] = useState<number>(1);

  const { addSet } = useSets();

  const navigate = useNavigate();

  const inputChangeHandler = (
    e: any,
    setFunction: (value: React.SetStateAction<string>) => void,
  ): void => {
    setFunction(e.target.value);
  };

  const buttonClickHandler = (e: any): void => {
    addSet({
      title: titleValue,
      description: descriptionValue,
      cardsAmount: 12,
    });

    navigate(-1);
  };

  return (
    <StyledCreateSet>
      <Grid
        container
        columnSpacing={2}
        rowSpacing={3}
        className={'Form-Container'}
      >
        <Grid item xs={6}>
          <Typography variant='h5' component='h1'>
            Create a new study set
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent='end'
          alignItems='flex-start'
          xs={6}
        >
          <Button
            variant='contained'
            color='primary'
            onClick={buttonClickHandler}
          >
            Create
          </Button>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label='Title'
            variant='standard'
            fullWidth
            value={titleValue}
            onChange={(e) => inputChangeHandler(e, setTitleValue)}
            className='Set-Form-Input'
          />
          <TextField
            label='Description'
            multiline
            variant='standard'
            fullWidth
            value={descriptionValue}
            onChange={(e) => inputChangeHandler(e, setDescriptionValue)}
            className='Set-Form-Input'
          />
        </Grid>
        <Grid item xs={6}>
          <DragDrop />
        </Grid>
      </Grid>
      <Grid container rowSpacing={2}>
        {Array(termsAmount)
          .fill(0)
          .map((_: any, index: number) => (
            <Grid item xs={12} key={index}>
              <TermCard />
            </Grid>
          ))}
        <Grid
          item
          xs={12}
          container
          justifyContent='center'
          alignItems='center'
        >
          <Button
            variant='contained'
            onClick={() => setTermsAmount(termsAmount + 1)}
          >
            Add card
          </Button>
        </Grid>
      </Grid>
    </StyledCreateSet>
  );
}
