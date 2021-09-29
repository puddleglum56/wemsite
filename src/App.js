import { animated, useChain, useSpring, useSpringRef } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux';
import { toggleRotated } from './redux/rotatedSlice';
import { setHoveredMenuItem } from './redux/hoveredMenuItemSlice';
import { setAnimating } from './redux/animatingSlice';
import backIcon from './arrow_back_ios_white_24dp.svg'
import logoBack from './logo_and_back.svg';
import redBackground from './red_back.svg';
import './App.css';

function App() {

  const dispatch = useDispatch()

  const rotated = useSelector((state) => state.rotated.value)
  const animating = useSelector((state) => state.animating.value)
  const hoveredMenuItem = useSelector((state) => state.hoveredMenuItem.value)

  const underlineStyleByMenuItem = {
    'projects': {marginLeft: '13vw', width: '9vw'},
    'about': {marginLeft: '2vw', width: '6vw'},
    'contact': {marginLeft: '26.4vw', width: '8.5vw'},
  }

  const disappearRef = useSpringRef()
  const rotateRef = useSpringRef()
  const slideRef = useSpringRef()

  const rotateProps = useSpring({
    to: {rotateZ: rotated ? -45 : 0.00001},
    ref: rotateRef,
    onStart: () => dispatch(setAnimating(true)),
    onRest: () => dispatch(setAnimating(false))
  })

  const slideProps = useSpring({
    to: {
      translateX: rotated ? '40vw' : '0vw',
      translateY: rotated ? '40vw' : '0vw'
    },
    ref: slideRef,
    onStart: () => dispatch(setAnimating(true)),
    onRest: () => dispatch(setAnimating(false))
  })

  const disappearProps = useSpring({
    to: {
      translateY: rotated ? '10vw' : '0vw',
      translateX: rotated ? '-10vw' : '0vw',
      rotateZ: '45deg'
    },
    ref: disappearRef,
    onStart: () => dispatch(setAnimating(true)),
    onRest: () => dispatch(setAnimating(false))
  })

  const underlineProps = useSpring({
    to: underlineStyleByMenuItem[hoveredMenuItem]
  })

  useChain(rotated ? [disappearRef, rotateRef, slideRef] : [slideRef, rotateRef, disappearRef], [0, 0.2, 0.5])

  return (
    <div className="App">
      <header className="App-header">
        <animated.div style={disappearProps} className={(rotated || animating) ? "Menu-z0" : "Menu-z5"} >
          <div className="Menu-item" onClick={() => dispatch(toggleRotated())} onMouseEnter={() => dispatch(setHoveredMenuItem('about'))}> ABOUT </div>
          <div className="Menu-item" onClick={() => dispatch(toggleRotated())} onMouseEnter={() => dispatch(setHoveredMenuItem('projects'))}> PROJECTS </div>
          <div className="Menu-item" onClick={() => dispatch(toggleRotated())} onMouseEnter={() => dispatch(setHoveredMenuItem('contact'))}> CONTACT </div>
          <animated.div style={underlineProps} className="underline"></animated.div>
        </animated.div>
        <animated.div style={rotateProps} className="background-graphics">
          <img src={backIcon} onClick={() => dispatch(toggleRotated())} className="back-button" alt="" />
          <div className="Page-title"> {hoveredMenuItem.toUpperCase()} </div>
          <img src={redBackground} className="red-back" alt="" />
          <animated.div style={slideProps}> 
            <img src={logoBack} className="logo-back" alt="" />
          </animated.div>
        </animated.div>
      </header>
    </div>
  );
}

export default App;
