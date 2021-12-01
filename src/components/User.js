import React from 'react';


class User extends React.Component {

    render () {
        return (
            <div className='user-section'>
                <div className='user-container'>
                    <img className='user-image' width='200px' src={this.props.user.avatar_url} alt='Avatar'/>
                    <div className='user-info'>
                        <div className='user-name'>
                            <h2>{this.props.user.name}</h2>
                            <h4>({this.props.user.login})</h4>
                        </div>
                        <div className='user-totals'> 
                            <h4>TOTAL REPOS: {this.props.user.public_repos}</h4>
                            <h4>TOTAL FOLLOWERS: {this.props.user.followers}</h4>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default User;
