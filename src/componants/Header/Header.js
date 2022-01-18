import React, {useState} from 'react';
import {useNavigate, Link} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")

    const nameSearch = (e) => {
        setName(e.target.value.trim())
    }

    const search = () => {
        navigate(`/search/${name}`)
    }


    return (
        <header className="container d-flex justify-content-between mb-3 p-3">
            <Link to={`/`}>Главная</Link>
                <form onSubmit={nameSearch}>
                    <input onChange={nameSearch} type="text"/>
                    <button disabled={!name} onClick={search} className="search" >Search</button>
                </form>
            <div>for media</div>
        </header>
    );
};

export default Header;