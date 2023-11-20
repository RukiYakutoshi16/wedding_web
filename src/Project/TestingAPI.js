import { useEffect } from "react";

let user = {
  id: "1",
  Firstname: "josh",
  Lastname: "MOOOOOEE",
};

const TestingAPI = () => {
  const myPath = "https://dummyjson.com/users";
  const mySwaggerPath = "/Users";
  const mySending = "/InsertUser";
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(mySwaggerPath, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            server: "Kestrel",
            "Access-Control-Allow-Origin": "*",
          },
        });
        let data = await response.json();
        console.log(data);
      } catch (e) {
        console.log("failed");
      }
    }

    fetchData();
  }, []);

  const sendData = async () => {
    try {
      let response = await fetch(mySending, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          server: "Kestrel",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(user),
      });
    } catch (e) {
      console.log("failed");
    }
  };

  return (
    <div>
      <h1>COOL</h1>
      <button onClick={sendData}>Add Me</button>
    </div>
  );
};

export default TestingAPI;
