import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFetchPost } from "./hooks/handleFetch";

export default function UpdateProfile(props) {
  const [state, setState] = useFetchPost();
  const { isLoading, data, error } = state;

  if (data) {
    console.log(data, "data");
  }

  if (error) {
    console.log(error, "error");
  }

  if (isLoading) {
    console.log(isLoading, "isLoading");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      bio: "",
      image: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Can't be blank").min(6, "Too Short!"),
      description: Yup.string()
        .required("Can't be blank")
        .min(100, "Too Short!"),
      body: Yup.string().required("Can't be blank").min(250, "Too Short!"),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      setState({
        value: {
          article: values,
        },
        url: "api/articles",
        headers: {
          Authorization: `Token ${localStorage.authToken}`,
          "Content-Type": "application/json",
        },
      });
    },
  });

  return (
    <form
      className="container py-12 text-gray-700 body-font relative"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-2/6 mx-auto my-16 bg-white flex flex-col">
        <h2 className="text-center text-indigo-700 text-2xl pb-1 leading-none font-extrabold tracking-tight sm:text-2xl sm:leading-no">
          Update Profle
        </h2>
        <p className="text-center leading-relaxed mb-5 text-gray-600">
          Fill all the required details
        </p>
        <input
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mt-4"
          placeholder="email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="text-red-500 text-sm pl-1 font-medium">
            {formik.errors.email}
          </span>
        ) : (
          false
        )}
        <textarea
          className="bg-white rounded border border-gray-400 focus:outline-none h-16 focus:border-indigo-500 text-base px-4 py-2 mt-4 resize-none"
          placeholder="bio"
          name="bio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bio}
        ></textarea>
        {formik.touched.bio && formik.errors.bio ? (
          <span className="text-red-500 text-sm pl-1 font-medium">
            {formik.errors.bio}
          </span>
        ) : (
          false
        )}
        <input
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mt-4"
          placeholder="image url"
          type="text"
          name="image"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <span className="text-red-500 text-sm pl-1 font-medium">
            {formik.errors.image}
          </span>
        ) : (
          false
        )}
        <input
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mt-4"
          placeholder="username"
          type="text"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <span className="text-red-500 text-sm pl-1 font-medium">
            {formik.errors.username}
          </span>
        ) : (
          false
        )}
        <input
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mt-4"
          placeholder="password"
          type="text"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className="text-red-500 text-sm pl-1 font-medium">
            {formik.errors.password}
          </span>
        ) : (
          false
        )}
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-4"
        >
          Update
        </button>
      </div>
    </form>
  );
}
