import React from 'react';
import './index.css';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';


class App extends React.Component {

  state = {
    search: 'morvin12',
    user: {},
    followers: []
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.search}`)
      .then( response => {
        this.setState({
          ...this.state,
          user: response.data
        })
      })
      .catch( err => {
        console.error(err);
      })
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.user !== prevState.user){
      axios.get(`https://api.github.com/users/${this.state.user.login}/followers`)
        .then( response => {
          this.setState({
            ...this.state,
            followers: response.data
          })
        })
        .catch( err => {
          console.error(err);
        })
        .finally(
          this.setState({...this.state, search: ''})
        )
    } 
  }

  handleChange = (e) => {
    this.setState({...this.state, search: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.search}`)
      .then(response => {
        this.setState({
          ...this.state,
          user: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleFollowerClick = (followerLogin) => {
    axios.get(`https://api.github.com/users/${followerLogin}`)
      .then(response => {
        this.setState({
          ...this.state,
          user: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return(
    <div>
      <h1>Github Card</h1>
      <form>
        <input
          type='text'
          id='search-bar'
          value={this.state.search}
          onChange={this.handleChange}
          placeholder='Search Git Handle'
        />
        <button onClick={this.handleSubmit}>Search</button>
      </form>
      <User user={this.state.user}/>
      <FollowerList followers={this.state.followers} handleFollowerClick={this.handleFollowerClick}/>
    </div>
    );
  }
}

export default App;
