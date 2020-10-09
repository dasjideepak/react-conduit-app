import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink, withRouter } from "react-router-dom";
import { useFetchPost } from "./hooks/handleFetch";

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
    <form className="login-signup-sec" onSubmit={formik.handleSubmit}>
      <div className="form-container">
        <h1 className="text-center">Signup Page</h1>
        <NavLink to="/login">Have an account?</NavLink>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <span className="err-msg">{formik.errors.username}</span>
            ) : (
              false
            )}

            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="err-msg">{formik.errors.email}</span>
            ) : (
              false
            )}

            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="err-msg">{formik.errors.password}</span>
            ) : (
              false
            )}
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          {error ? <h1>Something went wrong...</h1> : false}
          <p className="control text-center">
            {isLoading ? (
              <button
                className="button is-success is-loading button-signup"
                disabled
              >
                Loading
              </button>
            ) : (
              <button type="submit" className="button is-success button-signup">
                <span>Signup</span>
              </button>
            )}
          </p>
        </div>
      </div>
    </form>
  );
}

export default withRouter(SignUp);
