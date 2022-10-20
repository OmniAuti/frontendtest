import "./App.css";
import Form from "./components/Form";
import User from "./components/User";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pulledFormData, setPulledFormData] = useState([]);
  const [responseData, setResponseData] = useState({});
  const [responseActive, setResponseActive] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((res) => setPulledFormData(res.data));
  };

  const postData = async (userInfo) => {
    await axios
      .post("https://frontend-take-home.fetchrewards.com/form", userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setResponseData(res.data);
        setResponseActive(true);
      });
  };

  const handleResponseActive = () => {
    setResponseActive(false);
  };

  return (
    <div className="App flex items-center justify-center h-screen min-h-[750px] bg-black overflow-hidden">
      <div className="bg-white rounded-md relative overflow-hidden">
        <Form responseActive={responseActive} postData={postData} pulledFormData={pulledFormData} />
        <User
          responseData={responseData}
          handleResponseActive={handleResponseActive}
          responseActive={responseActive}
        />
      </div>
    </div>
  );
}

export default App;
