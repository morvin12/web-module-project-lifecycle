import React from 'react';

class Follower extends React.Component {

    handleClick = (event) => {
        this.props.handleFollowerClick(event.target.id)
    }

    render (){
        return (
            <div className='follower'>
                <img 
                    id={this.props.follower.login} 
                    className='follower-image' 
                    src={this.props.follower.avatar_url} 
                    alt='Avatar'
                    onClick={this.handleClick}
                />
                <p>{this.props.follower.login}</p>
            </div>
        )
    }
}

export default Follower;
