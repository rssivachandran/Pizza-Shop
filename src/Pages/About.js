import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizzas})`}}></div>
        <div className='aboutbottom'>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iure tenetur, optio dicta delectus ipsum magni architecto dolorem aspernatur reprehenderit, velit eveniet doloribus, incidunt consequuntur quaerat neque sit ab atque?. 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe porro perspiciatis error cupiditate pariatur voluptatum mollitia, sapiente esse accusamus praesentium repellat voluptatibus nulla iste animi nesciunt optio asperiores? Officiis, eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae fuga libero officia explicabo esse aspernatur corporis possimus obcaecati. Voluptate fugit possimus ad, suscipit in nemo laborum provident vel assumenda?
            </p>
        </div>
    </div>
  )
}

export default About;