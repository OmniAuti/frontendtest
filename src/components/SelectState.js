import { useState, useEffect } from "react";

const SelectState = ({
  pulledFormData,
  userObj,
  handleStates,
  responseActive,
}) => {
  const [active, setActive] = useState(false);
  const [selectedStates, setSelectedStates] = useState("");

  useEffect(() => {
    setSelectedStates(userObj);
  }, [userObj]);

  const handleSelectActive = () => {
    setActive(!active);
  };

  const handleSelectState = (e) => {
    setSelectedStates(e.target.innerText);
    handleStates(e.target.innerText);
    setActive(!active);
  };

  return (
    <>
      <input
        onChange={() => handleSelectActive()}
        value={selectedStates}
        name="states-input"
        tabIndex={-1}
        type="text"
        required
        className="absolute z-10 bg-black w-full focus:outline-none border-none focus:border-0"
      />

      <label
        required
        htmlFor="states"
        className={
          selectedStates.length > 0
            ? "z-40 absolute text-lg text-slate-500 transition duration-300 -translate-y-7 pl-2"
            : "z-40 cursor-pointer absolute bottom-0 text-md text-slate-300 transition duration-300 group-hover:text-lg group-hover:text-slate-500 group-hover:-translate-y-7 pl-2"
        }
      >
        Select State
      </label>

      <button
        tabIndex={responseActive ? -1 : 0}
        onClick={() => handleSelectActive()}
        aria-label="Occupation State"
        type="button"
        name="states"
        id="states"
        className="h-[30px] text-xl z-30 border-b-2 pb-[28px] cursor-pointer w-full text-left p-2 focus:outline-none bg-white focus:border-b-blue-300"
      >
        {selectedStates}
      </button>
      <ul
        className={
          active
            ? "z-40 h-[135px] overflow-scroll absolute bg-white border border-t-0 w-full top-[99%]"
            : "hidden z-40 h-[150px] overflow-scroll absolute bg-white border border-t-0 w-full top-[99%]"
        }
      >
        {pulledFormData.states &&
          pulledFormData.states.map((state) => (
            <li
              aria-selected={selectedStates === state.name ? true : false}
              onClick={(e) => handleSelectState(e)}
              key={state.abbreviation}
              role="option"
              className={selectedStates === state.name ? "py-2 cursor-pointer hover:bg-slate-100 px-2 bg-slate-200" : "py-2 cursor-pointer hover:bg-slate-100 px-2"}
            >
              {state.name}
            </li>
          ))}
      </ul>
    </>
  );
};

export default SelectState;
