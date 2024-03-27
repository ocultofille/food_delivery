import React from "react";
class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0
        }
        console.log("this is child constracture");
    }
    render(){
        console.log("this is child render");
        return(
            <>
            <div>hii {this.props.name}
            count : {this.state.count}
            </div>
            <button type="button" className="btn btn-primary" onClick={()=>{this.setState({count : this.state.count+1})}} > count </button>
            </>
            
        )
    }
}
export default User