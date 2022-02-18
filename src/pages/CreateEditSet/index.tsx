import { Button, Grid, TextField, Typography } from '@mui/material';
import useSets from '../../hooks/useSets';
import useEdit from '../../hooks/useEdit';
import DragDrop from '../../components/DragDrop';
import { useNavigate } from 'react-router-dom';
import TermCard from './TermCard';
import styled from '@emotion/styled';
import { ITerm, ISet } from '../../types/types';
import { generateId } from '../../utils';
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

const StyledButton = styled(Button)`
  margin-inline: 0.5rem;
`;

interface CreateEditSetProps {
  edit: boolean;
}

const defaultProps: CreateEditSetProps = {
  edit: false,
};

const CreateEditSet = ({ edit }: CreateEditSetProps) => {
  const { setId, initialValues } = useEdit(edit);

  const { addSet, editSet } = useSets();

  const navigate = useNavigate();

  const createButtonClickHandler = (values: ISet): void => {
    if (edit) {
      editSet(setId, values);
    } else {
      addSet({
        ...values,
        id: generateId(),
      });
    }

    navigate(-1);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .max(40, 'Must be 40 characters or less')
        .required('This field cannot be empty')
        .trim(),
      description: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .trim(),
      termCards: Yup.array().of(
        Yup.object().shape({
          term: Yup.string().required('This field cannot be empty').trim(),
          definition: Yup.string()
            .required('This field cannot be empty')
            .trim(),
          example: Yup.string()
            .required('This field cannot be empty')
            .test(
              'validate-example',
              'The example must contain term',
              function (value) {
                return Boolean(value?.includes(this.parent?.term));
              },
            )

            .trim(),
          id: Yup.string(),
        }),
      ),
    }),
    onSubmit: (values: ISet) => createButtonClickHandler(values),
  });

  const addTermButtonHandler = () => {
    formik.setValues({
      ...formik.values,
      termCards: [
        ...formik.values.termCards,
        { term: '', definition: '', example: '', id: generateId() },
      ],
    });
  };

  const deleteTermButtonHandler = () => {
    formik.setValues({
      ...formik.values,
      termCards: [...formik.values.termCards.slice(0, -1)],
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
            {edit ? 'Save' : 'Create'}
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
        {formik.values.termCards.map((term: ITerm, index: number) => (
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
          <StyledButton variant='contained' onClick={addTermButtonHandler}>
            Add card
          </StyledButton>
          <StyledButton
            variant='contained'
            color='error'
            onClick={deleteTermButtonHandler}
          >
            Delete last
          </StyledButton>
        </Grid>
      </Grid>
    </StyledCreateSet>
  );
};

CreateEditSet.defaultProps = defaultProps;

export default CreateEditSet;
