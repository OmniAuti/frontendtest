const FormButtons = ({handleClearForm}) => {
    return (
        <div className="w-full flex items-center justify-around">
        <input type="submit" value="Create User" className="text-xs sm:text-base cursor-pointer w-[30%] bg-blue-200 py-2 rounded-md text-center hover:bg-gradient-to-b hover:from-blue-200 hover:to-blue-500 hover:scale-105 transition-all duration-300 active:scale-95 focus:outline-blue-500"/>
        <button onClick={(e) => handleClearForm(e)} className="text-xs sm:text-base cursor-pointer bg-red-200 w-[30%] py-2 rounded-md text-center hover:bg-gradient-to-b hover:from-red-200 hover:to-red-500 hover:scale-105 transition-all duration-300 active:scale-95 focus:outline-red-500">Clear Form</button>
        </div>
    )
}

export default FormButtons;