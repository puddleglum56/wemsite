import {  useDispatch } from 'react-redux';
import { toggleRotated } from './redux/rotatedSlice';
import { setHoveredMenuItem } from './redux/hoveredMenuItemSlice';
import './MenuItem.css';

function MenuItem(props) {

  const dispatch = useDispatch()

  return (
    <div className="Menu-item" onClick={() => dispatch(toggleRotated())} onMouseEnter={() => dispatch(setHoveredMenuItem(props.item))}> {props.item.toUpperCase()} </div>
  );
}

export default MenuItem;
