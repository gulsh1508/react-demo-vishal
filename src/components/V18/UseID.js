import { useId } from "react";

const UseID = () => {
  const id = useId();

  return (
    <div>
      <h1>USE ID Exmaple</h1>
      <form>
        <label htmlFor={`${id}-firstName`}>First Name</label>
        <input id={`${id}-firstName`} type="text" />

        <label htmlFor={`${id}-lastName`}>Last Name</label>
        <input id={`${id}-lastName`} type="text" />
      </form>
      <hr />
    </div>
  );
};

export default UseID;
