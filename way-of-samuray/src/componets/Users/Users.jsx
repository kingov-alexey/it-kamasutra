import React from "react";

const Users = (props)=>{
    return (
        <div>
           {

props.users.map(u => <div>
<span>
    <div><img src="" alt="" /></div>
    <div>
        <button> follow</button>
    </div>
</span>
<span>s
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