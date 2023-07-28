import { useState } from "react";

const SignUp = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup"
      );
      const result = await response.json();
      result;
    } catch (error) {
      seterror(error.message);
    }
  }

  return (
    <div>
      <h2> Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{""}
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </label>
        <label>
          Password:{""}
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
