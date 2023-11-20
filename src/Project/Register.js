const Register = () => {
  return (
    <div>
      <h1>Register Here</h1>
      <form>
        <div>
          {" "}
          <label>Name</label>
          <input type="text"></input>
        </div>

        <div>
          {" "}
          <label>Email</label>
          <input type="text"></input>
        </div>
        <input type="button" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
