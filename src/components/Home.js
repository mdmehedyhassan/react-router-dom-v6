import React from 'react';
import HomeDetails from './HomeDetails';

const Home = () => {
    const fakeData = [
        {
          id: 1,
          name: 'Mehedy',
          isStudent: true,
          salary: 500
        },
        {
          id: 2,
          name: 'Hasan',
          isStudent: false,
          salary: 150
        },
        {
          id: 3,
          name: 'Easin',
          isStudent: false,
          salary: 2000
        },
        {
          id: 4,
          name: 'Rohiz',
          isStudent: false,
          salary: 5000
        },
      ]
    return (
        <div>
            <h1>This is home</h1>
            <div className="homeDiv">
                {
                    fakeData.map(data => <HomeDetails key={data.id} data={data}></HomeDetails>)
                }
            </div>
        </div>
    );
};

export default Home;