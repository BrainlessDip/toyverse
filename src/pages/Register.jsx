import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { handleRegister } = useContext(AuthContext);
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await handleRegister(email, password);
    if (result) {
      navigate("/profile");
    }
  };

  return (
    <div>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Login</legend>
        <form onSubmit={registerUser}>
          <label className="label">Email</label>
          <input
            type="email"
            className="input focus:outline-0"
            name="email"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input focus:outline-0"
            placeholder="Password"
            name="password"
          />
          <button className="btn btn-neutral mt-4 w-full">Register</button>
        </form>
      </fieldset>
    </div>
  );
};

export default Register;
