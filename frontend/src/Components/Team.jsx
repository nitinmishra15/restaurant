import React from 'react'
import { data } from '../restApi.json';


const Team = () => {
  return <section className="team" id="team">
    <div className="container">
      <div className="heading_section">
        <h1 className="heading"> OUR TEAM </h1>
        <p> Our team is the heart and soul of everything we do. Comprised of talented professionals with diverse backgrounds and a shared passion for exceptional food and service, we work together to create a welcoming and memorable experience for every customer.</p>
      </div>
      <div className="team_container">
        {
          data[0].team.map((element)  =>{
            return (
              <div className="card " key ={element.id}>
                <img src={element.image} alt={element.name}/>
                <h3> {element.name}</h3>
                <p> {element.designation} </p>
                </div>
            )
          })
        }
      </div>
    </div>
  </section>
    
  
}

export default Team