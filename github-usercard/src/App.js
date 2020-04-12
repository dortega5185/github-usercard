import React from 'react';
import './App.css';
import MyProfile from "./components/MyProfile";
import MyFollowers from './components/MyFollowers';
import axios from 'axios';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      MyProfile: {},
      MyFollowers: []
    }
  }

  componentDidMount() { // runs after react runs everything
    axios.get('https://api.github.com/users/dortega5185').then(res => {
      console.log('This is our response for my profile', res)
      this.setState({
        MyProfile: res.data

      })
    })
    axios.get("https://api.github.com/users/dortega5185/followers").then(res => {
      console.log('This is our response for my followers', res)
      this.setState({
        MyFollowers: res.data
      })
    })
  }

  render() {
    console.log('This is the current state ==========>', this.state.MyProfile)
    return (
    <div className="App">
      <MyProfile profile={this.state.MyProfile} />
      {this.state.MyFollowers.map( people => {
        return <MyFollowers key={people.id} followers={people} />
      })}
    </div>
    )
  }
}

export default App;
