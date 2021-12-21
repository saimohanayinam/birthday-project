import { React } from "react";

function Lists(props) {
  const removeHandler = (id) => {
    props.newState(props.state.filter((item) => item.id !== id));
    console.log("hello");
  };

  return (
    <div>
      {props.state.map((people) => {
        return (
          <>
            <div key={people.id} className="person">
              <img src={people.image} alt="" />
              <div>
                <h4>{people.name}</h4>
                <h5>{people.age}</h5>
              </div>
              <button onClick={() => removeHandler(people.id)}>remove</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Lists;
