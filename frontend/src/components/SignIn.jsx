import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { BASE_URL } from "../util/vars";

const SignIn = () => {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const toast = useToast();
  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = state;
    
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Include cookies in the request
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
      const result = await response.json();
      setAuth({
        isAuth: true,
        username: result.data.username,
        accessToken: result.accessToken,
      });
      toast({
        title: `${result.message}`,
        status: "success",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      toast({
        title: `${error.message}`,
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
    }
    setState({
      email: "",
      password: "",
    });
  };
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export { SignIn };
