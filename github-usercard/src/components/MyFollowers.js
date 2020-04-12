import React from 'react'



function MyFollowers(props) {
    return (
      <div className="container">
        <div className="card">
          <img src={props.followers.avatar_url} />
          <div className="info">
            <h1>{props.followers.login}</h1>
          </div>
        </div>
      </div>
    );
}

export default MyFollowers

