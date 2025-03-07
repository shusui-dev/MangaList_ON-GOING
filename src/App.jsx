import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Card components
const Card = ({ title }) => {
  const [count, setCount] = useState(0)
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been set to: ${hasLiked}`)
  }, [hasLiked])

  return (
      <div className="card" onClick={() => setCount( count + 1)}> 
        <h2>{title} <br/> {count || null}</h2>

        <button onClick={() => setHasLiked(!hasLiked)}>
          {hasLiked ? "Liked" : "Like"}
        </button>
      </div>
  )
}

// class components
const App = () => {
  return(
    <div className="card-container">
      <Card title="Blue Lock" rating={7} isCool = {true}/>
      <Card title="Fullmetal Alchemist" rating={10} isCool = {true}/>
      <Card title="Love Bullet" rating={10} isCool = {true}/>
    </div>
  )
}

export default App
