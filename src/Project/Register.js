import { useState } from "react";
import "./Register.css";

let guest = {
  FullName: "",
  Email: "",
  IsBringingExtra: false,
};
const HOSTSERVER = "http://76.255.146.193:8080";
const LOCALHOST = "https://localhost:7070";
const INSERT = LOCALHOST + "/InsertUser";
const GETUSERS = LOCALHOST + "/Users";

const Register = () => {
  let [isRegistered, setIsRegistered] = useState(false);
  let [myGuest, setMyGuest] = useState(guest);
  let [messageConfirm, setMessageConfirm] = useState("message");

  let setFullName = (e) => {
    let value = e.target.value;
    let _guest = {
      ...myGuest,
      FullName: value,
    };
    setMyGuest(_guest);
  };

  let setEmail = (e) => {
    let value = e.target.value;
    let _guest = {
      ...myGuest,
      Email: value,
    };
    setMyGuest(_guest);
  };

  let setIsBringingExtra = (e) => {
    let value = e.target.checked;

    let _guest = {
      ...myGuest,
      IsBringingExtra: value,
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
          server: LOCALHOST,
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
          <div className="container">
            <div className="row">
              {" "}
              <div className="fill-in col">
                {" "}
                <label className="col-sm">Full Name</label>{" "}
                <input
                  className="col-sm"
                  onChange={setFullName}
                  type="text"
                ></input>
              </div>
              <div className="fill-in">
                <label className="col-sm">Email</label>{" "}
                <input
                  className="col-sm"
                  onChange={setEmail}
                  type="text"
                ></input>
              </div>
              <div>
                <label>Bringing Extra Person?</label>{" "}
                <input onChange={setIsBringingExtra} type="checkbox"></input>
              </div>
            </div>
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
