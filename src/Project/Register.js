import { useState } from "react";

let guest = {
  FirstName: "",
  LastName: "",
};
const HOSTSERVER = "http://76.255.146.193:8080";
const INSERT = HOSTSERVER + "/InsertUser";
const GETUSERS = HOSTSERVER + "/Users";

const Register = () => {
  let [isRegistered, setIsRegistered] = useState(false);
  let [myGuest, setMyGuest] = useState(guest);
  let [messageConfirm, setMessageConfirm] = useState("message");

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
        method: "GET",
      });
      let data = await response.json();
      console.log(data);
      //setMessageConfirm(data);
    } catch {
      console.log("can't get users");
      setMessageConfirm("can't get users");
    }
  };

  let onSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(INSERT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          server: HOSTSERVER,
        },
        body: JSON.stringify(myGuest),
      });
      setMessageConfirm("submit is good: " + JSON.stringify(myGuest));
      setIsRegistered(true);
    } catch (e) {
      console.log("can't submit");
      setMessageConfirm("can't submit " + e);
    }
  };

  return (
    <div>
      <h1>Register Here</h1>
      {!isRegistered && (
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

          <input type="submit" value="Submit" />
        </form>
      )}
      <input onClick={getUsers} type="button" value="Check Registers" />
      <a>{messageConfirm}</a>
    </div>
  );
};

export default Register;
