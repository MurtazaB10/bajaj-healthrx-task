import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const makeAPICall = async () => {
    try {
      const response = await axios.get(
        "https://bajaj-healthrx-task.herokuapp.com/"
      );
      console.log(response.data);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    makeAPICall();
  }, []);
  return (
    <div className="App">
      <ol>
        {data.map((key, ind) => {
          return (
            <li>
              <ul style={{ textAlign: "left" }}>
                <li>Login: {key.login ? key.login : "NA"}</li>
                <li>Avatar_URL: {key.avatar_url ? key.avatar_url : "NA"}</li>
                <li>HTML_URL: {key.url.html_url ? key.url.html_url : "NA"}</li>
                <li>type: {key.type ? key.type : "NA"}</li>
                <hr />
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
