import { useState } from "react";
import "./Register.css";

let guest = {
  FullName: "",
  Email: "",
  IsBringingExtra: 0,
};

const admin = false;
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
    let value = e.target.checked ? 1 : 0;

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
            <div className="row no-gutters ">
              {" "}
              <div className="fill-in col-sm text-sm-end">
                {" "}
                <label>Full Name</label>{" "}
              </div>
              <div className="fill-in col-sm ">
                {" "}
                <input className="" onChange={setFullName} type="text"></input>
              </div>
            </div>
            <div className="row">
              {" "}
              <div className="fill-in col-sm text-sm-end">
                <label>Email</label>{" "}
              </div>
              <div className="fill-in col-sm">
                {" "}
                <input
                  className="col-sm"
                  onChange={setEmail}
                  type="text"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="fill-in col-sm text-sm-end">
                {" "}
                <label>Bringing Extra Person?</label>{" "}
              </div>
              <div className="fill-in col-sm ">
                {" "}
                <input
                  className="checkbox-size"
                  onChange={setIsBringingExtra}
                  type="checkbox"
                ></input>
              </div>
            </div>
          </div>

          <input type="submit" value="Submit" />
        </form>
      )}
      {admin && (
        <div>
          <input onClick={getUsers} type="button" value="Check Registers" />
          <a>{messageConfirm}</a>
        </div>
      )}
    </div>
  );
};

export default Register;
