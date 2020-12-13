import React,{useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import {DataContext} from './DataProvider';
import './Details.css';
import {Link} from 'react-router-dom'

function Details() {
    const {id} = useParams()
    const [users, setUsers] = useContext(DataContext)
    const [drop, setDrop] = useState(false)
    console.log(users)
    const details = users.filter((user,index)=>{
        return user.id == id
    })
    const further = users.filter((user,index)=>{
        return user.id == (id)%10 +1
    })
    console.log("further",further)
    const [isprofile,setIsProfile] = useState(true)
    const [isposts,setIsPosts] = useState(false)
    const [isgallery,setIsGallery] = useState(false)
    const [istodo,setIsTodo] = useState(false)
    const [name , setName] = useState("")
    return (
        <div className="detail">
            {/*left*/ }
            <div className="detail__left">
                <div className="detail__leftdetails">
                <h3 className={isprofile && "bright"} onClick={() => {setIsProfile(true); setIsPosts(false);setIsGallery(false); setIsTodo(false)}}>Profile</h3>
                <hr size= '1'/>
                <h3 className={isposts && "bright"} onClick={() => {setIsPosts(true); setIsProfile(false); setIsTodo(false) ; setIsGallery(false) }} >Posts </h3>
                <hr size= '1'/>
                <h3 className={isgallery && "bright"} onClick={() => {setIsGallery(true) ; setIsPosts(false); setIsProfile(false) ; setIsTodo(false) }}>Gallery</h3>
                <hr size= '1'/>
                <h3 className={istodo && "bright"} onClick={() => {setIsTodo(true) ; setIsPosts(false) ; setIsGallery(false) ; setIsProfile(false) }} >Todo</h3>
                </div>
            </div>
            {/*Right*/ }
            {isprofile &&
            <div className="detail__right" >
                {
                    details.map((detail) => (
                        <div className="detail__rightTop">
                        <h3>Profile</h3>
                        <div  className="detail__rightTop-info">
                            <div onClick={() => setDrop(!drop)} className ="detail__rightTop-info-logo">
                                <img src={detail.profilepicture}></img>
                                <h4>{detail.name}</h4>
                            </div>
                        {drop && 
                         <div className="detail__rightTop-info-logo-popup">
                         <img src={detail.profilepicture}></img>
                         {detail.email}
                         
                         {
                             further.map((fur) => (
                                 <Link to={`/profile/${fur.id}`}>
                                <img className="Nextguy" src={fur.profilepicture}></img>
                                 <p className="Nextguy__name"> {fur.name}</p>
                                 </Link>
                             ))
                         }
                         <hr></hr>
                         <Link to="/">
                         <button className="signout__button"> Sign Out</button>
                         </Link>
                     </div>
                     }
                       
                 </div>
                    </div>
                    ))
                }
                <hr/>
                <div className="detail__rightBottom">
                    <div className="detail__rightBottom-Left">

                        {/*Profile images and details*/ }
                        {
                            details.map((detail) => (
                        <div className="detail__rightBottom-LeftTop" key={detail.id}>
                            <img src={detail.profilepicture}>
                            </img>
                            <h3>{detail.name}</h3>
                            <p>Username<span>:</span> {detail.username} </p>
                            <p> email<span>:</span>  {detail.email}</p>
                            <p>Phone<span>:</span> {detail.phone}</p>
                            <p>Website<span>:</span> {detail.website}</p>
                        </div>

                            ))
                        }
                        <hr></hr>
                        {
                                details.map((detail) => (
                                <div className="detail__rightBottom-LeftBottom">
                                    <h3>Company</h3>
                                    <p>Name : {detail.company.name}</p>
                                    <p>Catchphrase : {detail.company.catchPhrase} </p>
                                    <p>bs : {detail.company.bs}</p>
                                </div>
                                ))
                        }                

                    </div>
                    <div className="rightside">
                    {/*Profile address and pincode*/ }
                    {
                        details.map((detail) => (
                            <div className="detail__rightBottom-Right" key={detail.id}>
                                <h3>Address</h3>
                                <p>Street <span> : {detail.address.street}</span></p>
                                <p>Suite <span> : {detail.address.suite}</span></p>
                                <p>City  <span> : {detail.address.city}</span></p>
                                <p>Zipcode  <span> : {detail.address.zipcode}</span></p>
                            </div>
                        ))
                    }
                    {
                        details.map((detail) => (
                            <div className="map" key={detail.id}>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFTJMRePPReEd9MXLqT3ioCkr_v35z23cAg&usqp=CAU" alt="hello guys"></img>
                             <div className = "coordinates">
                             <p>lat :{detail.address.geo.lat}</p>
                             <p>long : {detail.address.geo.lng}</p>
                             </div>
                             </div>
                        ))
                    }
                    
                    </div>            
                </div>
            </div>}
            {isposts && 
            <div className="detail__right comming__soon">
                 {
                    details.map((detail) => (
                        <div className="detail__rightTop">
                        <h3>Posts</h3>
                        <div className="detail__rightTop-info">
                        <div className ="detail__rightTop-info-logo">
                                <img src={detail.profilepicture}></img>
                                <h4>{detail.name}</h4>
                            </div>
                        </div>
                    </div>
                    ))
                }
                <hr/>
                <h1>Comming Soon</h1>
            </div>    
                  
            }
             {isgallery && 
            <div className="detail__right comming__soon">
                 {
                    details.map((detail) => (
                        <div className="detail__rightTop">
                        <h3>Gallery</h3>
                        <div className="detail__rightTop-info">
                        <div className ="detail__rightTop-info-logo">
                                <img src={detail.profilepicture}></img>
                                <h4>{detail.name}</h4>
                            </div>
                        </div>
                    </div>
                    ))
                }
                <hr/>
                <h1>Comming Soon</h1>
            </div>
                
            }
             {istodo && 
            <div className="detail__right comming__soon">
                 {
                    details.map((detail) => (
                        <div className="detail__rightTop">
                        <h3>ToDo</h3>
                        <div className="detail__rightTop-info">
                        <div className ="detail__rightTop-info-logo">
                                <img src={detail.profilepicture}></img>
                                <h4>{detail.name}</h4>
                            </div>
                        </div>
                    </div>
                    ))
                }
                <hr/>
                <h1>Comming Soon</h1>
            </div>              
            }
        </div>
    )
}

export default Details
