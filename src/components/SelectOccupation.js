import { useState, useEffect, useRef } from "react";

const SelectOccupation = ({ pulledFormData, userObj, handleOccupation }) => {
  const [active, setActive] = useState(false);
  const [selectedOccupation, setSelectedOccupation] = useState("");

  useEffect(() => {
    setSelectedOccupation(userObj);
  }, [userObj]);

  const handleSelectActive = () => {
    setActive(!active);
  };

  const handleSelectOccupation = (e) => {
    setSelectedOccupation(e.target.innerText);
    handleOccupation(e.target.innerText);
    setActive(!active);
  };

  return (
    <>
      <input
        onChange={() => handleSelectActive()}
        value={selectedOccupation}
        name="states-input"
        tabIndex={-1}
        type="text"
        required
        className="absolute z-10 bg-black w-full focus:outline-none border-none focus:border-0"
      />
      <label
        required
        htmlFor="occupation"
        className={
          selectedOccupation.length > 0
            ? "z-40 absolute text-lg text-slate-500 transition duration-300 -translate-y-7 pl-2"
            : "z-40 cursor-pointer  absolute bottom-0 text-md text-slate-300 transition duration-300 group-hover:text-lg group-hover:text-slate-500 group-hover:-translate-y-7 pl-2"
        }
      >
        Choose Occupation
      </label>
      <button
        autoComplete="false"
        onClick={() => handleSelectActive()}
        aria-label="Occupation Select"
        type="button"
        name="occupation"
        id="occupation"
        className="h-[30px] text-xl z-30 border-b-2 pb-[28px] cursor-pointer w-full text-left p-2 focus:outline-none bg-white focus:border-b-blue-300"
      >
        {selectedOccupation}
      </button>
      <ul
        className={
          active
            ? "z-50 h-[210px] overflow-scroll absolute bg-white border border-t-0 w-full top-[99%]"
            : "hidden z-50 h-[150px] overflow-scroll absolute bg-white border border-t-0 w-full top-[99%]"
        }
      >
        {pulledFormData.occupations &&
          pulledFormData.occupations.map((job) => (
            <li
              onClick={(e) => handleSelectOccupation(e)}
              key={job}
              role="option"
              className="py-2 cursor-pointer hover:bg-slate-100 px-2"
            >
              {job}
            </li>
          ))}
      </ul>
    </>
  );
};

export default SelectOccupation;
