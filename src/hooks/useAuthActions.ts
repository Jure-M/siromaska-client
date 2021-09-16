import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreators from '../store/action-creators/authActionCreators';

const useAuthActions = () => {
  const dispatch = useDispatch;

  return bindActionCreators(authActionCreators, dispatch);
};

export default useAuthActions;
