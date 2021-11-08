import React from 'react';

export const Home = ({data})=> {
    return(
        <div>
            <h1>{data.project_name}</h1>
            <h1>{data.build}</h1>
        </div>
    )
}