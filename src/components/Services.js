import React, { Component } from 'react'
import {FaHiking,FaShuttleVan,FaBeer, FaCocktail} from "react-icons/fa"
import Title from "./Title"
export default class Services extends Component {
 state = {
  services:[
   {
   icon:<FaCocktail/>,
   title: "Free Cocktails",
   info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed unde ipsum maxime dolore ipsam. Voluptate fugiat magni maxime iusto ut sit saepe atque voluptas. Quae mollitia soluta inventore ratione totam?",
  },
  {
   icon:<FaHiking/>,
   title: "Endless Hiking",
   info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed unde ipsum maxime dolore ipsam. Voluptate fugiat magni maxime iusto ut sit saepe atque voluptas. Quae mollitia soluta inventore ratione totam?",
  },
  {
   icon:<FaBeer/>,
   title: "Strongest Beer",
   info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed unde ipsum maxime dolore ipsam. Voluptate fugiat magni maxime iusto ut sit saepe atque voluptas. Quae mollitia soluta inventore ratione totam?",
  },
  {
   icon:<FaShuttleVan/>,
   title: "Endless Shuttle",
   info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed unde ipsum maxime dolore ipsam. Voluptate fugiat magni maxime iusto ut sit saepe atque voluptas. Quae mollitia soluta inventore ratione totam?",
  },
 ]
 }
 render() {
  return (
   <section className="services">
   <Title title="services"></Title>
   <div className="services-center" >
    {this.state.services.map((item,index) => {
return <article key={index} className="service">
 <span>{item.icon}</span>
 <h6>{item.title}</h6>
 <p>{item.info}</p>
</article>
    })}
   </div>
    </section>
  )
 }
}

