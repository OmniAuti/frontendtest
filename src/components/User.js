const User = ({ responseActive, handleResponseActive, responseData }) => {
  return (
    <div
      className={
        responseActive
          ? "bg-white rounded-md absolute top-0 translate-x-0 w-full h-full z-50 duration-500 transition-all"
          : "bg-white rounded-md absolute top-0 -translate-x-full w-full h-full z-50 duration-500 transition-all"
      }
    >
      <h2 className="w-full my-2 text-center text-xl">Congratulations!</h2>
      <div className="flex items-center justify-center mt-5">
        <img
          className="w-50 h-[200px]"
          src="https://cdn-icons-png.flaticon.com/512/126/126486.png"
          alt="User Icon"
        />
      </div>
      <div className="flex flex-col items-center justify-around h-[300px]">
        <div className="text-center w-full p-5">
        <p className="my-2 text-xl">Welcome, {responseData.name}</p>
        <p className="mb-2">
          You'll soon be transported to your new home in lovely {responseData.state}
        </p>
        <p>Your new occupation, {responseData.occupation}, begins Monday when the sun comes up.</p>
        <p className="mt-2 underline underline-offset-1">Best of luck!</p>
        </div>
        <button className="mb-5 cursor-pointer w-[30%] bg-blue-200 py-2 rounded-md text-center hover:bg-gradient-to-b hover:from-blue-200 hover:to-blue-500 hover:scale-105 transition-all duration-300 active:scale-95 focus:outline-blue-500" onClick={() => handleResponseActive()}>Create New User</button>
      </div>
    </div>
  );
};

export default User;
