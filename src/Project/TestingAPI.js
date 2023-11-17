import { useEffect } from "react";

const TestingAPI = () => {
  const myPath = "https://dummyjson.com/users";
  const mySwaggerPath = "/Users";
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
  return (
    <div>
      <h1>COOL</h1>
    </div>
  );
};

export default TestingAPI;
