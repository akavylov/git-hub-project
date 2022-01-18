import React from 'react';
import {Link} from "react-router-dom";

const UserCard = ({it}) => {
    return (
            <div>
                <div className="box">
                    <Link to={`/user/${it.login}`}>
                        <div>{it.login}</div>
                    </Link>
                </div>
            </div>
    );
};

export default UserCard;