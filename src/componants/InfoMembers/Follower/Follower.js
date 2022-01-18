import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import UserCard from "../../userCard/UserCard";

const Follower = () => {
    const params = useParams()
    const [follower, setFollower] = useState([])

    useEffect(() => {
        axios(`https://api.github.com/users/${params.name}/followers`)
            .then(({data}) => setFollower(data))
    }, [params])
    return (
        <div className="container">
            <div className="row">
                {
                    follower
                        ? follower?.map(it => {
                            return <UserCard it={it}/>
                        })
                        : "Не найдено"
                }
            </div>
        </div>
    );
};

export default Follower;