import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba( 255, 255, 255, 0.30 )',
    boxShadow: 'inset -16px 20px 32px 0px rgb(44 123 144 / 57%);',
    backdropFilter: 'blur( 10.0px )',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));
