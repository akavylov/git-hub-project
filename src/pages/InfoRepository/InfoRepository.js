import React, {useState, useEffect}  from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";

// import {Link} from "react-router-dom";

const InfoRepository = () => {
    const params = useParams()
    const [infoRepository, setInfoRepository] = useState({})
    const [readme, setReadme] = useState("")

    useEffect(() => {
        axios(`https://raw.githubusercontent.com/${params.login}/${params.name}/master/README.md`)
            .then(({data}) => setReadme(data))
        axios(`https://api.github.com/repos/${params.login}/${params.name}`)
            .then(({data}) => setInfoRepository(data))
    }, [params])

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="box">
                        <h1>{infoRepository.name}</h1>
                        <ReactMarkdown>
                            {readme}
                        </ReactMarkdown>
                        {/*<img width="350px" height="300px" src={it.avatar_url} alt=""/>*/}
                        {/*<h6>{info.bio}</h6>*/}
                        {/*<div>{info.location}</div>*/}
                    </div>
                </div>
            {/*    <div className="col-3">*/}
            {/*        <div>Подписчики:<Follower/></div>*/}
            {/*    </div>*/}
            {/*    <div className="col-3">*/}
            {/*        <div> Репозитории:*/}
            {/*            {repository.map(it => {*/}
            {/*                return (*/}
            {/*                    <Link to={`/repository/${it.name}`}>*/}
            {/*                        <div>{it.name}</div>*/}
            {/*                    </Link>*/}
            {/*                )*/}
            {/*            })}*/}
            {/*        </div>*/}
            {/*    </div>*/}
            </div>
        </div>
    );
};

export default InfoRepository;