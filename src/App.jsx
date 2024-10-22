import React, { Component } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/hero'
import About from './component/about'
 import Contact from './component/Contact'
import Technology from'./component/Technology'
import Project from './component/project'
export class App extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='overflow-x-hidden text-neutral-300
       antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'> 
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

</div>
        </div>
     
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
      
        <div className='contanier mx-auto px-8'> 
        <Navbar />
        <Hero/>
        <About/>
         <Contact/> 
        <Technology/>
        <Project/>
        </div>
      
      </div>
    )
  }
}

export default App