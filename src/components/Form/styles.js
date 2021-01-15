import { indigo } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
  },
  input: {
    background: indigo[500],
  },
  formButton: {
    margin: theme.spacing(2),
  },
  icons: {
    color: indigo[300],
  },
  textFiledSpacing: {
    margin: '8px 2px',
  },
}));
