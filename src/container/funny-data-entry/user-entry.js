import { addValue } from '../../actions/data-action';
import DataSection from '../../component/funny-data-entry/data-section';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {search: state.dataReduce.search, list: state.dataReduce.list};
};

const mapDispatchToProps = dispatch => {  
  return {handleAdd: value => {dispatch(addValue(value));} }
}

const UserEntry = connect(mapStateToProps, mapDispatchToProps)(DataSection);

export default UserEntry;