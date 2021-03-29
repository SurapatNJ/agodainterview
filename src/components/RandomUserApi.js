import axios from 'axios'
import React,{useState,useEffect} from 'react'

const RandomApi = () =>{

    const [randomUser,setRandomUser] = useState([])
    const [userInfos,setUserInfos] = useState([])
    const [nextPageNumber,setNextPageNumber] = useState(1)

    const callRandomApi = async() => {
        return (await axios.get(`https://randomuser.me/api?page=${nextPageNumber}`)
        .then(res => {
            // console.log(res.data)
            // return JSON.stringify(res.data)
            if(res === undefined) return
            setUserInfos(userInfos => [...userInfos,...res.data.results])
            setRandomUser(JSON.stringify(res.data.results,null,2))
            console.log(userInfos)
            console.log("params",nextPageNumber)
            setNextPageNumber(nextPageNumber => nextPageNumber+1)
        })
        .catch(error =>  console.log(error))
    )}

    // useEffect (() => {
        // callRandomApi().then(res => {
        //     setRandomUser(res||'No User Found')
        // })
    // },[])

    return(
        <div>
            <button onClick={callRandomApi}>
                CallRandomApi
            </button>
            {
                userInfos.map((user,index) => (
                    <div>
                    <p>{Object.values(user.name)}</p>
                    <img src={user.picture.thumbnail} alt={"thumbnail"}/>
                    </div>
                ))
            }
            <pre>
                {randomUser}
            </pre> 
        </div>
    )
}

export default RandomApi