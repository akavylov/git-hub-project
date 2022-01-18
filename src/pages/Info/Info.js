
import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios"
import Follower from "../../componants/InfoMembers/Follower/Follower";

const Info = () => {
    const params = useParams()
    const [info, setInfo] = useState({})
    const [repository, setRepository] = useState([])
    useEffect(() => {
        axios(`https://api.github.com/users/${params.name}`)
            .then(({data}) => setInfo(data))
        axios(`https://api.github.com/users/${params.name}/repos`)
            .then(({data}) => setRepository(data))
    }, [params])
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="box">
                        <h1>{info.login}</h1>
                        <img width="350px" height="300px" src={info.avatar_url} alt=""/>
                        <hr/>
                        <button className="btn-outline-secondary">View Profile</button>
                    </div>
                </div>
                <div className="col-3">
                    <h6>{info.bio}</h6>
                    <div>{info.location}</div>
                        <div>Подписчики:<Follower/></div>
                </div>
                <div className="col-3">
                    <div> Репозитории:
                        {repository.map(it => {
                            return (
                            <Link to={`/repository/${params.name}/${it.name}`}>
                                <div>{it.name}</div>
                            </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;