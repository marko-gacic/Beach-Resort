import React from 'react'
import Room from './Room'
export default function RoomList({rooms}) {
if(rooms.lenght === 0) {
 return (
 <div className="empty-search" >
  <h3>unfortunatly no rooms matched your search parametres</h3>
 </div>
 )
}
 
 return (
 <section className="roomsList">
  <div className="roomslist-center">
   {
    rooms.map(item => {
     return <Room key={item.id} room={item} />
    })
   }
  </div>
 </section>
 )
}
