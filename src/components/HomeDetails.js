import React from 'react';
import { Link } from 'react-router-dom';

const HomeDetails = (props) => {
    const {name, id, isStudent, salary} = props.data;
    return (
        <div className="HomeDetailsDiv">
            <h4>Name: {name}</h4>
            <p>Id: {id}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
            <p>salary: {salary}</p>
            <Link to={`/get/${name}`}><button style={{width: '100%', backgroundColor: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', border: 'none'}}>more info</button></Link>
        </div>
    );
};

export default HomeDetails;