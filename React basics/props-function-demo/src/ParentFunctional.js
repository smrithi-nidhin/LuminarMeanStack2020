import React from 'react';
import ChildFunctional from './ChildFunctinal';

function ParentFunctional(){
    const[title,setTitle]=React.useState("Parent 1");
    return( 
        <div>
            <h1>Parent</h1>
            <ChildFunctional title={title} />
        </div>
    )
}
export default ParentFunctional;