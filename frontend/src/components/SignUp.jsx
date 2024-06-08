import { useToast } from "@chakra-ui/react";
import React from "react";
import { BASE_URL } from "../util/vars";


const SignUp = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });
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
    const { name, email, password } = state;
    const data = { name, email, password };

    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: 'include', // Include cookies in the request
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }
      const result = await response.json();
      toast({
        title: `${result.message}`,
        status: "success",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
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
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>

        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export { SignUp };
