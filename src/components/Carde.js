import React from "react";

function Carde({ complete }) {
  
 return complete.map((todo) => (   
 
  
    <div className="carde">
       { todo.map((data) => (
        data.title
       )) }
    </div>
  ));
}

export default Carde;
