import React from 'react'

function MyProfile(props) {
    return (
      <div className="container">
        <div className="card">
          <img src={props.profile.avatar_url} />
          <div className="info">
            <h1 className="name">{props.profile.login}</h1>
            <h2>{props.profile.location}</h2>
            <p>{props.profile.bio}</p>
          </div>
        </div>
      </div>
    );
}

export default MyProfile
