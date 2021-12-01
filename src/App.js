import React from 'react';

class App extends React.Component {
  render() {
    return(
    <div>
      <h1>Github Card</h1>
      <form>
        <input
          type='text'
          // id='search-bar'
          // value={}
          // onChange={}
          placeholder='Search Git Handle'
        />
        <button>Search</button>
      </form>
    </div>
    );
  }
}

export default App;
