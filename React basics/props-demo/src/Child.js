import React from 'react';
class Child extends React.Component{
    render(){
        return(<div>
            <h3>{this.props.title}</h3>
            Child
        </div>)
    }
}
export default Child;