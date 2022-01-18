import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import UserCard from "../../componants/userCard/UserCard";

const Result = () => {
    const params = useParams()
    const [users, setUsers] = useState([])


    useEffect(() => {
        axios(`https://api.github.com/search/users?q=${params.name}`)
            .then(({data}) => setUsers(data.items))
    }, [params])
    return (
        <div className="container">
            <div className="row">
                {
                    users.length
                        ? users?.map(it => {
                            return <UserCard it={it}/>
                        })
                        : "Не найдено"
                }
            </div>
        </div>
    )
}


export default Result;
