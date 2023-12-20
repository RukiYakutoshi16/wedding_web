import { useState } from "react";

let guest = {
  FirstName: "",
  LastName: "",
};

const INSERT = " http://127.0.0.1:8080/InsertUser";
const GETUSERS = " http://127.0.0.1:8080/Users";

const Register = () => {
  let [myGuest, setMyGuest] = useState(guest);

  let setFirstName = (e) => {
    let value = e.target.value;
    let _guest = {
      ...myGuest,
      FirstName: value,
    };
    setMyGuest(_guest);
  };

  let setLastName = (e) => {
    let value = e.target.value;
    let _guest = {
      ...myGuest,
      LastName: value,
    };
    setMyGuest(_guest);
  };

  let getUsers = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(GETUSERS, {
        "Access-Control-Allow-Origin": "no-cors",
      });
      let data = await response.json();
      console.log(data);
    } catch {
      console.log("can't get users");
    }
  };

  let onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(INSERT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          server: "http://127.0.0.1",
          "Access-Control-Allow-Origin": "no-cors",
        },
        body: JSON.stringify(myGuest),
      });
    } catch {
      console.log("can't submit");
    }
  };

  return (
    <div>
      <h1>Register Here</h1>
      <form onSubmit={onSubmit}>
        <div>
          {" "}
          <label>First Name</label>
          <input onChange={setFirstName} type="text"></input>
        </div>

        <div>
          {" "}
          <label>Last Name</label>
          <input onChange={setLastName} type="text"></input>
        </div>
        <input onClick={getUsers} type="button" value="Check Registers" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
