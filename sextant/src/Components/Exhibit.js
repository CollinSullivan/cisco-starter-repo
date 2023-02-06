import React from 'react';

function Exhibit({title, children}){
    return (
        <div className="exhibit">
            <h1>{title}</h1>
            {children}
        </div>
    )
}

export default Exhibit;