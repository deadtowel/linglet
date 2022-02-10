import { Button, Grid, TextField, Typography } from '@mui/material';
import { useSets } from '../hooks/useSets';
import DragDrop from '../components/DragDrop';
import { useNavigate } from 'react-router-dom';
import TermCard from '../components/TermCard';
import styled from '@emotion/styled';
import { ITerm, TermFormsValues } from '../types/types';
import { generateId } from '../utils';
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
  const { addSet } = useSets();

  const navigate = useNavigate();

  const createButtonClickHandler = (values: TermFormsValues): void => {
    addSet({
      title: values.title.trim(),
      description: values.description.trim(),
      id: generateId(),
      termCards: values.termForms,
    });

    navigate(-1);
  };

  const initialValues: TermFormsValues = {
    title: '',
    description: '',
    termForms: [],
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .max(40, 'Must be 40 characters or less')
        .required('This field cannot be empty'),
      description: Yup.string().max(100, 'Must be 100 characters or less'),
      termForms: Yup.array().of(
        Yup.object().shape({
          term: Yup.string().required('This field cannot be empty'),
          definition: Yup.string().required('This field cannot be empty'),
          example: Yup.string()
            .required('This field cannot be empty')
            .test(
              'validate-example',
              'The example does not contain term',
              function (value) {
                return true;
              },
            ),
          id: Yup.string(),
        }),
      ),
    }),
    onSubmit: (values: TermFormsValues) => createButtonClickHandler(values),
  });

  const addTermButtonHandler = () => {
    formik.setValues({
      ...formik.values,
      termForms: [
        ...formik.values.termForms,
        { term: '', definition: '', example: '', id: generateId() },
      ],
    });
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
          <form id='set-form' onSubmit={formik.handleSubmit} noValidate>
            <SetTextField
              id='title'
              {...formik.getFieldProps('title')}
              value={formik.values.title}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              label='Title'
              variant='standard'
              autoComplete='off'
              required
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
              autoComplete='off'
              fullWidth
            />
          </form>
        </Grid>
        <Grid item xs={6}>
          <DragDrop />
        </Grid>
      </GridFormContainer>
      <Grid container rowSpacing={2}>
        {formik.values.termForms.map((term: ITerm, index: number) => (
          <Grid item xs={12} key={term.id}>
            <TermCard formik={formik} termIndex={index} />
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
