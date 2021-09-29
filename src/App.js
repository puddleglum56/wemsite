import { animated, useChain, useSpring, useSpringRef } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux';
import { setAnimating } from './redux/animatingSlice';
import logoBack from './resources/logo_and_back.svg';
import redBackground from './resources/red_back.svg';
import MenuItem from './components/menu-item/MenuItem';
import BackButton from './components/back-button/BackButton';
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
          <MenuItem item='about' />
          <MenuItem item='projects' />
          <MenuItem item='contact' />
          <animated.div style={underlineProps} className="underline"></animated.div>
        </animated.div>
        <animated.div style={rotateProps} className="background-graphics">
          <BackButton />
          <div className={"Page-title-" + hoveredMenuItem}> {hoveredMenuItem.toUpperCase()} </div>
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
