import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  // let errorElement;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  // if (loading || sending) {
  //   return <Loading></Loading>;
  // }

  if (user) {
    navigate(from, { replace: true });
  }

  // if (error) {
  //   errorElement = <p className="text-danger">Error: {error?.message}</p>;
  // }

  const navigateRegister = (event) => {
    navigate("/register");
  };

  // const resetPassword = async () => {
  //   const email = emailRef.current.value;
  //   if (email) {
  //     await sendPasswordResetEmail(email);
  //     toast("Sent email");
  //   } else {
  //     toast("please enter your email address");
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div div className="container w-50 mx-auto">
      <h2 className="text-primary text-center mt-2">Please Login</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {/* <p>
        New to Genius Car?{" "}
        <Link
          to="/register"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Please Register
        </Link>{" "}
      </p> */}
      <br />
      <p className="text-center">
        Don't have an account?
        <Link
          to="/register"
          className="text-danger ps-1 pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Create here
        </Link>
      </p>
    </div>
  );
};
export default Login;
