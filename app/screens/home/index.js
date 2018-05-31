import {connect} from 'react-redux';
import Home from './home';

function mapStateToProps(state)  {
  return {todos: state.todos, orientation: state.dimensions.orientation}
}

export default connect(mapStateToProps)(Home);