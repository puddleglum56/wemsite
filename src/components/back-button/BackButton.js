import { toggleRotated } from '../../redux/rotatedSlice';
import backIcon from '../../resources/arrow_back_ios_white_24dp.svg'
import { useDispatch } from 'react-redux';
import './BackButton.css';

function BackButton() {

  const dispatch = useDispatch()

  return (
          <img src={backIcon} onClick={() => dispatch(toggleRotated())} className="back-button" alt="" />
  );
}

export default BackButton;
