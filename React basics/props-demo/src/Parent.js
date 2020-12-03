import React from 'react';
import Child from './Child';
class Parent extends React.Component{
    state={
        title:"Parent 1"
    }
    render(){
        return(
            <div>
                <h1>Parent</h1>
                <Child title={this.state.title} />
            </div>
        );
    }
}
export default Parent;