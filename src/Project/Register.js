import { useState } from "react";

let guest = {
  FirstName: "",
  LastName: "",
};

const INSERT = "/InsertUser";
const GETUSERS = "/GetUsers";

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

  let getUsers = async () => {};

  let onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(INSERT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          server: "Kestrel",
          "Access-Control-Allow-Origin": "*",
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
        <input onClick={getUsers} type="button" value="Check Regiters" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
