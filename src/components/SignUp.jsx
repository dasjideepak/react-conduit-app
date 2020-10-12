import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, withRouter } from "react-router-dom";
import { useFetchPost } from "./hooks/handleFetch";
import Notification from "./Notification";

function SignUp(props) {
  const [state, setState] = useFetchPost();
  const { isLoading, data, error } = state;

  if (data?.user) {
    localStorage.setItem("authToken", state.data.user.token);
    props.history.push("/");
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Can't be blank")
        .min(6, "Too Short!")
        .max(20, "Too Long!"),
      email: Yup.string().email("Not a valid email").required("Can't be blank"),
      password: Yup.string()
        .required("Can't be blank")
        .min(6, "Password should be at-least 6 characters")
        .matches(
          "^.*(?=.*[a-zA-Z]).*$",
          "Password must contain a letter and a number"
        ),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      setState({
        value: { user: values },
        url: "https://mighty-oasis-08080.herokuapp.com/api/users",
      });
    },
  });

  return (
    <form className="my-40" onSubmit={formik.handleSubmit}>
      <div
        className="flex justify-between mx-auto rounded-lg"
        style={{
          width: "1080px",
          boxShadow:
            "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
        }}
      >
        <div className="w-1/2 flex justify-center flex-col p-24">
          <h1 className="text-center text-indigo-700 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 text-cente">
            Signup Page
          </h1>
          <NavLink
            className="text-center  sm:text-1xl text-1xl title-font font-bold text-indigo-600 mt-4 mb-4"
            to="/login"
          >
            Have an account?
          </NavLink>
          <div className="py-2 flex flex-col" width="100%">
            <input
              className="border-2 px-4 py-2 rounded-full active:border-4-red"
              type="text"
              name="username"
              placeholder="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              width="100%"
            />
            {formik.touched.username && formik.errors.username ? (
              <span className="text-red-500 text-sm pl-1 font-medium">
                {formik.errors.username}
              </span>
            ) : (
              false
            )}
          </div>
          <div className="py-2 flex flex-col" width="100%">
            <input
              className="border-2 px-4 py-2 rounded-full active:border-4-red"
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              width="100%"
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="text-red-500 text-sm pl-1 font-medium">
                {formik.errors.email}
              </span>
            ) : (
              false
            )}
          </div>
          <div className="py-2 flex flex-col">
            <div>
              <input
                className="border-2 px-4 py-2 rounded-full"
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span style={{ cursor: "pointer", fontSize: "36px" }}>*</span>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <span className="text-red-500 text-sm font-medium pl-1">
                {formik.errors.password}
              </span>
            ) : (
              false
            )}
          </div>
          <div className="py-2 flex flex-col">
            {error ? (
              <h1 className="text-center text-red-700 pb-2">
                Something went wrong!
              </h1>
            ) : (
              false
            )}
            {isLoading ? (
              <button
                type="submit"
                className="px-16 py-2 rounded-full text-md font-medium leading-5 text-white bg-indigo-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out hover:bg-indigo-600 mx-12"
              >
                Signup
              </button>
            ) : (
              <button
                type="submit"
                className="transition duration-500 ease-in-out px-16 py-2 rounded-full text-md font-medium leading-5 text-white bg-indigo-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out hover:bg-indigo-600 mx-12"
              >
                Signup
              </button>
            )}
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center flex-col py-24">
          <img src="/images/signup.svg" alt="login-img" width="90%" />
        </div>
      </div>
      {error ? (
        <Notification type="error" message={"Something went wrong"} />
      ) : (
        false
      )}
    </form>
  );
}
export default withRouter(SignUp);
