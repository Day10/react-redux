import ColorList from './ColorList';
import { connect } from 'react-redux';
import {
  removeColor,
  addColor,
  rateColor
} from './actions';

const mapStateToProps = state =>
  ({
    colors: state.colors
  });
const mapDispatchToProps = dispatch => 
  ({
    removeColorHandler: (id) => {
      dispatch(removeColor(id))
    },
    addColorHandler: () => {
      dispatch(addColor('happy orange', '#ff9800'))
    },
    rateColorHandler: (id) => {
      dispatch(rateColor(id, 5))
    },
  })
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorList);

export default App;
