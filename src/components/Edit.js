import React ,{useState}from 'react';
import "../App.css";

const Edit = ({edit,setTodos,todos}) => {


    

const [updatedTitlename, setUpdatedTitleName] = useState(edit.title);
  const [updatedDetailname, setUpdatedDetail] = useState(edit.description);
  const formSubmited = (e) => {
    e.preventDefault();
    setTodos([
        ...todos,
        {  title: updatedTitlename, description: updatedDetailname, completed: false },
      ]);
      setUpdatedTitleName="";
      setUpdatedDetail="";
  };

  return (
    <div role="dialog">
      <form className="edit_form" onSubmit={formSubmited} >
        <div className="edit_add">
          <input
            type="text"
            placeholder="What's the new task..."
            className='edit_title'
            maxLength={39}
            required
            value={updatedTitlename}
            onChange={(e) => setUpdatedTitleName(e.target.value)}
          />
          
        </div>

        <div className="details_parent">
          <textarea
            placeholder="Details....."
            className="details"
            id="edit_detail"
            name="description"
            maxLength={100}
            value={updatedDetailname}
            onChange={(d) => setUpdatedDetail(d.target.value)}
          ></textarea>
         
        </div>
        <button>DONE</button>
      </form>
    </div>
  );
}

export default Edit
