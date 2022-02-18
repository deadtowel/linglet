import { TextField } from '@mui/material';

interface LearnTextProps {
  formik: any;
  el: string;
  index: number;
  arr: string[];
}

const LearnText: React.FC<LearnTextProps> = ({ formik, el, index, arr }) => {
  if (index === arr.length - 1) {
    return <span key={index}>{el}</span>;
  } else {
    return (
      <span key={index}>
        <span>{el}</span>
        <form
          id='learn-form'
          onSubmit={formik.handleSubmit}
          noValidate
          style={{ display: 'inline-block' }}
        >
          <TextField
            variant='outlined'
            size='small'
            id='termField'
            {...formik.getFieldProps('termField')}
            value={formik.values.termField}
            error={formik.touched.termField && Boolean(formik.errors.termField)}
            autoComplete='off'
            required
          ></TextField>
        </form>
      </span>
    );
  }
};

export default LearnText;
