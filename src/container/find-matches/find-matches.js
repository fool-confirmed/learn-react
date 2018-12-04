import { tryMatches } from '../../actions/regexp-action';
import FindMatches from '../../component/find-matches/find-matches';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    source: state.regExpReduce.source,
    regexp: state.regExpReduce.regexp,
    matches: state.regExpReduce.matches
  };
};

const mapDispatchToProps = dispatch => {
  return {handleMatch: (source, regexp) => {dispatch(tryMatches(source, regexp));} }
}

const FindRegExpMatches = connect(mapStateToProps, mapDispatchToProps)(FindMatches);

export default FindRegExpMatches;