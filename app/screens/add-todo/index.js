import {connect} from 'react-redux';
import AddTodo from './add-todo';

function mapStateToProps(state)  {
  return {newTodo: state.newTodo}
}

export default connect(mapStateToProps)(AddTodo);