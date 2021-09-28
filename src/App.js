import { useState } from 'react'
import { animated, useChain, useSpring, useSpringRef } from 'react-spring'
import logoBack from './logo_and_back.svg';
import redBackground from './red_back.svg';
import './App.css';

function App() {

  const underlineStyleByMenuItem = {
    'project': {marginLeft: '13vw', width: '9vw'},
    'about': {marginLeft: '2vw', width: '6vw'},
    'contact': {marginLeft: '26.4vw', width: '8.5vw'},
  }

  const [state, toggle] = useState(false)
  const [hoveredMenuItem, hoverMenuItem] = useState('project')

  const disappearRef = useSpringRef()
  const rotateRef = useSpringRef()
  const slideRef = useSpringRef()

  const rotateProps = useSpring({
    to: {rotateZ: state ? -45 : 0.00001},
    ref: rotateRef
  })

  const slideProps = useSpring({
    to: {
      translateX: state ? '40vw' : '0vw',
      translateY: state ? '40vw' : '0vw'
    },
    ref: slideRef
  })

  const disappearProps = useSpring({
    to: {
      translateY: state ? '10vw' : '0vw',
      translateX: state ? '-10vw' : '0vw',
      rotateZ: '45deg'
    },
    ref: disappearRef
  })

  const underlineProps = useSpring({
    to: underlineStyleByMenuItem[hoveredMenuItem]
  })

  useChain([disappearRef, rotateRef, slideRef], [0, 0.2, 0.5])

  return (
    <div className="App">
      <header className="App-header">
        <animated.div style={disappearProps} className={state ? "Menu-z0" : "Menu-z5"} >
          <div className="Menu-item" onClick={() => toggle(!state)} onMouseEnter={() => hoverMenuItem('about')}> ABOUT </div>
          <div className="Menu-item" onClick={() => toggle(!state)} onMouseEnter={() => hoverMenuItem('project')}> PROJECTS </div>
          <div className="Menu-item" onClick={() => toggle(!state)} onMouseEnter={() => hoverMenuItem('contact')}> CONTACT </div>
          <animated.div style={underlineProps} className="underline"></animated.div>
        </animated.div>
        <animated.div style={rotateProps} className="background-graphics">
          <img src={redBackground} className="red-back" alt="logo" />
          <animated.div style={slideProps}> 
            <img src={logoBack} className="logo-back" alt="logo" />
          </animated.div>
        </animated.div>
      </header>
    </div>
  );
}

export default App;
