import React,{useContext} from 'react';
import './Cards.css';
import {Link} from 'react-router-dom';
import {DataContext} from './DataProvider'


function Cards() {
    const [users, setUsers] = useContext(DataContext)
    console.log(users)
    return (
        <div>
        
        <div className="cards">       
            {users.map((user) => (
                
                    <div className="card" key = {user.id}>
                        <Link to = {`/profile/${user.id}`}>
                        <img className = "card__profile-picture" src={user.profilepicture} ></img>
                        </Link>
                      <div className="box">  
                      <Link to = {`/profile/${user.id}`}>                
                        <h3>{user.name}</h3>
                        </Link> 
                      </div>
                   </div> 
                ))}   
            
         </div>
         </div>
    )
}

export default Cards
