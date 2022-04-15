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
      <ul>
        {data.map((key, ind) => {
          return (
            <>
              <li>{key.login}</li>
              <li>{key.avatar_url}</li>
              <li>{key.url.html_url}</li>
              <li>{key.type}</li>
              <hr />
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
