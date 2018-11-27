import { addValue } from '../actions/data-action';
import DataSection from '../component/data-section'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  console.log("state");console.log(state);
  return {search: state.search, list: state.list};
};

const mapDispatchToProps = dispatch => {
  console.log("dispatch");
  return {handleAdd: value => {dispatch(addValue(value));} }
}

const UserEntry = connect(mapStateToProps, mapDispatchToProps)(DataSection);

export default UserEntry;