import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ChildOne from './ChildOne/ChildOne';
import ChildThree from './ChildThree/ChildThree';
import ChildTwo from './ChildTwo/ChildTwo';

const NestedRoute = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ margin: "20px" }}>
                <h1>NestedRoute</h1>
                <ul>
                    <li> <Link to={'one'}>Child One </Link> </li>
                    <li> <Link to={'two'}>Child Two </Link> </li>
                    <li> <Link to={'three'}>Child Three </Link> </li>
                </ul>
            </div>
            <div>
                <h1 style={{color: 'gray', backgroundColor: 'yellow', padding: '20px', width: '100%'}}>Click child and change route</h1>
                <Routes>
                    <Route path="one" element={<ChildOne />} />
                    <Route path="two" element={<ChildTwo />} />
                    <Route path="three" element={<ChildThree />} />
                </Routes>
            </div>
        </div>
    );
};

export default NestedRoute;