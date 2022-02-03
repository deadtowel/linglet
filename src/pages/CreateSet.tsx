import { Button, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useSets } from '../hooks/useSets';
import DragDrop from '../components/DragDrop';
import { useNavigate } from 'react-router-dom';
import TermCard from '../components/TermCard';
import styled from '@emotion/styled';
import { ITerm } from '../types/types';
import { generateId } from '../utils/generateId';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const StyledCreateSet = styled.div`
  padding: 1rem 0 3rem;
`;

const GridFormContainer = styled(Grid)`
  margin-bottom: 3rem;
`;

const SetTextField = styled(TextField)`
  margin-bottom: 1rem;
  &:last-child {
    margin: 0;
  }
`;

export default function CreateSet() {
  const [terms, setTerms] = useState<ITerm[]>([]);

  const { addSet } = useSets();

  const navigate = useNavigate();

  const createButtonClickHandler = (e: any): void => {
    addSet({
      title: formik.values.title,
      description: formik.values.description,
      id: Date.now(),
      termCards: terms.length,
    });

    navigate(-1);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(40, 'Must be 40 characters or less')
        .required('This field cannot be empty'),
      description: Yup.string().max(100, 'Must be 100 characters or less'),
    }),
    onSubmit: createButtonClickHandler,
  });

  const addTermButtonHandler = () => {
    setTerms([...terms, { term: '', definition: '', id: generateId() }]);
  };

  return (
    <StyledCreateSet>
      <GridFormContainer container columnSpacing={2} rowSpacing={3}>
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
            type='submit'
            form='set-form'
            variant='contained'
            color='primary'
          >
            Create
          </Button>
        </Grid>
        <Grid item xs={6}>
          <form id='set-form' onSubmit={formik.handleSubmit}>
            <SetTextField
              id='title'
              {...formik.getFieldProps('title')}
              value={formik.values.title}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              label='Title'
              variant='standard'
              fullWidth
            />
            <SetTextField
              id='description'
              {...formik.getFieldProps('description')}
              value={formik.values.description}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              label='Description'
              multiline
              variant='standard'
              fullWidth
            />
          </form>
        </Grid>
        <Grid item xs={6}>
          <DragDrop />
        </Grid>
      </GridFormContainer>
      <Grid container rowSpacing={2}>
        {terms.map((term: ITerm, index: number) => (
          <Grid item xs={12} key={term.id}>
            <TermCard
              termIndex={index}
              term={term}
              terms={terms}
              setTerms={setTerms}
            />
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          container
          justifyContent='center'
          alignItems='center'
        >
          <Button variant='contained' onClick={() => addTermButtonHandler()}>
            Add card
          </Button>
        </Grid>
      </Grid>
    </StyledCreateSet>
  );
}
