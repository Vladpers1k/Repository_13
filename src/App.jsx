import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StatefulCounter from './components/StatefulCounter'
import StatelessDisplay from './components/StatelessDisplay'
import './App.css'

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Components: Stateful and Stateless</h1>
      <StatefulCounter />
      <StatelessDisplay message="This is a stateless component!" />
    </div>
  )
}

export default App
