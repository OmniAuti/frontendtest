import { useState } from "react";
import FormButtons from "./FormButtons";
import SelectOccupation from "./SelectOccupation";
import SelectState from "./SelectState";

const Form = ({ pulledFormData, postData }) => {
  const [userObj, setUserObj] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  const handleName = (e) => {
    setUserObj({ ...userObj, name: e.target.value });
  };
  const handleEmail = (e) => {
    setUserObj({ ...userObj, email: e.target.value });
  };
  const handlePassword = (e) => {
    setUserObj({ ...userObj, password: e.target.value });
  };
  const handleOccupation = (val) => {
    setUserObj({ ...userObj, occupation: val });
  };
  const handleStates = (val) => {
    setUserObj({ ...userObj, state: val });
  };

  const handleClearForm = (e) => {
    e.preventDefault();
    setUserObj({
      name: "",
      email: "",
      password: "",
      occupation: "",
      state: "",
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData(userObj);
    setUserObj({
      name: "",
      email: "",
      password: "",
      occupation: "",
      state: "",
    });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="border h-[550px] w-screen sm:w-[450px] px-10 py-5 rounded-md bg-white"
    >
      <fieldset className="flex flex-col items-start justify-around h-full w-full">
        <legend className="text-center text-xl">User Creator</legend>

        <div className="w-full relative group h-[50px] flex items-end">
          <label
            htmlFor="name"
            className={
              userObj.name.length > 0
                ? "absolute text-lg text-slate-500 transition duration-300 -translate-y-7 pl-2 "
                : "absolute text-md text-slate-300 transition duration-300 group-hover:text-lg group-hover:text-slate-500 group-hover:-translate-y-7 pl-2"
            }
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full pl-2 text-xl border-b-2 focus:outline-none bg-white focus:border-b-blue-300"
            onChange={(e) => handleName(e)}
            value={userObj.name}
          />
        </div>

        <div className="w-full relative group h-[50px] flex items-end">
          <label
            htmlFor="email"
            className={
              userObj.email.length > 0
                ? "absolute text-lg text-slate-500 transition duration-300 -translate-y-7 pl-2"
                : "absolute text-md text-slate-300 transition duration-300 group-hover:text-lg group-hover:text-slate-500 group-hover:-translate-y-7 pl-2"
            }
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full autofill:bg-white pl-2 text-xl border-b-2 focus:outline-none bg-white focus:border-b-blue-200"
            onChange={(e) => handleEmail(e)}
            value={userObj.email}
          />
        </div>

        <div className="w-full group h-[50px] flex items-end">
          <label
            htmlFor="password"
            className={
              userObj.password.length > 0
                ? "absolute text-lg text-slate-500 transition duration-300 -translate-y-7 pl-2"
                : "absolute text-md text-slate-300 transition duration-300 group-hover:text-lg group-hover:text-slate-500 group-hover:-translate-y-7 pl-2"
            }
          >
            Secret Password
          </label>

          <input
            type="password"
            name="password"
            id="password"
            required
            autoComplete="off"
            className="w-full pl-2 text-xl border-b-2 focus:outline-none bg-white focus:border-b-blue-300"
            onChange={(e) => handlePassword(e)}
            value={userObj.password}
          />
        </div>

        <div className="w-full relative group h-[50px] flex items-end">
          <SelectOccupation
            handleOccupation={handleOccupation}
            userObj={userObj.occupation}
            pulledFormData={pulledFormData}
          />
        </div>

        <div className="w-full relative group h-[50px] flex items-end mb-10">
          <SelectState
            handleStates={handleStates}
            userObj={userObj.state}
            pulledFormData={pulledFormData}
          />
        </div>
        <FormButtons handleClearForm={handleClearForm} />
      </fieldset>
    </form>
  );
};

export default Form;
