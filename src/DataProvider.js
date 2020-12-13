import React,{createContext , useState, useEffect} from 'react'

export const DataContext = createContext();

export const DataProvider= (props,) => {
    const [users , setUsers] = useState([]);

    useEffect(()=>{
      fetch("https://panorbit.in/api/users.json").then(res => res.json()).then((result) => {
        setUsers(result.users);
      })
    },[])

    return (
        <DataContext.Provider value = {[users , setUsers]}>
            {props.children}
        </DataContext.Provider>
    )
}


