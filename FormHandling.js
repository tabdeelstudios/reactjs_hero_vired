import React from 'react';
//Class Components
class BlogPost extends React.Component
{
    constructor(){
        super();
        console.log("Constructor called...");
        this.state={userName:'', userPassword:''};
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUsername(event){
        this.setState({userName:event.target.value});
    }

    handlePassword(event){
        this.setState({userPassword:event.target.value});
        console.log(this.state.userPassword);
    }

    render(){
        return(
            <div>
                <form method='GET'>
                    <input name="userName" placeholder="Enter username here" value={this.state.userName} onChange={this.handleUsername} type="text" />
                    <br/>
                    <input name="userPassword" placeholder="Enter password here" value={this.state.userPassword} onChange={this.handlePassword} type="password" />
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default BlogPost;

//title of the post
//description of the post
//background image
//published datetime
//author name

//draft
//published
//likes count
//comments (child component)
