import {useEffect, userEffect,useState} from "react";

const UserData =()=>{
    const [user,setUser]= useState();
    const [loading,setLoading]=useState(true);

    useEffect (()=> {
        fetch ("https://jsonplaceholder.typicode.com/users/1")
        .then ((response)  => response.json ())
        .then ((data) =>{ setUser(data);
            setLoading (false);
        })
        .catch((error) => {
            console.error ("Error fetching user data:",error);
            setLoading (false);
        });
    },[]);
    if (loading){
        return
        <h1>Loading....</h1>
    }
    return (
        <div>
            <h2 style={{color:"blueviolet"}}>User Data </h2>
            <p><strong>Name:--</strong>{user.name}</p>
             <p><strong>Email:--</strong>{user.email}</p>
              <p><strong>Phone:--</strong>{user.phone}</p>
        </div>
    )
};
export default UserData;
