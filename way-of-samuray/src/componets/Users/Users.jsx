import React from "react";
import css from "./users.module.css";
//edit users module css

const Users = (props)=>{
debugger;
    if (props.users.length === 0) {
    props.setUsers (
         [

        { 
            id: 1, 
            photoUrl: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg', 
            followed: false, 
            fullName: 'Dmitry', 
            status: 'I am a boss', 
            location: {city: 'minsk', country: 'Belarus'} },
          { 
            id: 2, 
            photoUrl: 'https://www.meme-arsenal.com/memes/36b78c8b7cd957e082f53148b74787ea.jpg', 
            followed: true, 
            fullName: 'Sasha', 
            status: 'I am a boss too', 
            location: {city: 'Moscow', country: 'Russia'} },
          { 
            id: 3, 
            photoUrl: 'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg', 
            followed: false, 
            fullName: 'Andrew', 
            status: 'I am a boss too', 
            location: {city: 'Kiev', country: 'Ukraine'} },
          ]
      
    )
        }


    return (
        <div>
           {

props.users.map(u => <div>
<span>
    <div><img src={u.photoUrl} alt="" className={css.photo}/></div>
    <div>
        {u.followed 
        ? <button onClick={()=>{props.unfollow(u.id)}}> follow</button> : 
        <button onClick={()=>{props.follow(u.id)}}> unfollow</button> }
        
    </div>
</span>
<span>
<span>
    <div>{u.fullName}</div> <div>{u.status}</div>
</span>
<span>
    <div>{u.location.city}</div> <div>{u.location.country}</div> 
</span>

</span>

</div>)
   
   
   
   
   }

        </div>
    )
}

export default Users;