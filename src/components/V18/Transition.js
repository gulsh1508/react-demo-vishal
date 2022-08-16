import { useState, useTransition } from "react";

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(() => {
      const data = [];
      for (let i = 0; i < 20000; i++) {
        data.push(e.target.value);
      }
      setList(data);
    });
  };

  return (
    <>
      <h1>useTransition Exmaple</h1>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "List is Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
      <hr />
    </>
  );
};

export default Transition;
