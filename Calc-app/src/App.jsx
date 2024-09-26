import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <div className='phone-layout'> 
      <div className='results-view'>
      <p className='first-row-results' style={{display: 'inline'}}>6000<p style={{display: 'inline', color: 'rgb(0, 139, 245)'}}>/</p>2
      <p style={{display: 'inline', color: 'rgb(0, 139, 245)'}}>+</p>3227<p style={{display: 'inline', color: 'rgb(0, 139, 245)'}}>*</p>2</p>
      <h1>=12,454</h1>
      </div>
      <div className='calculator-grid'>
          <button className='top-row-btn'>e</button>
          <button className='top-row-btn'>μ</button>
          <button className='top-row-btn'>sin</button>
          <button className='top-row-btn'>deg</button>
          <button className='grey-btn'>Ac</button>
          <button className='grey-btn'><img src='C:\Users\henko\Desktop\Calculator\Calculator-app\public\backspace.png'/></button>
          <button>/</button>
          <button>*</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button className='vert-span-plus'>+</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>       
          <button className='vert-span-equal'>=</button>
          <button className='hori-span'>0</button>
          <button>.</button>
        </div> 
      </div>     
      
    </>
  )
}

export default App
