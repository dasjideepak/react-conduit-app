import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFetchPost } from "./hooks/handleFetch";

export default function CreateArticle() {
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
      title: "",
      description: "",
      body: "",
      tags: "",
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
      <div className="w-2/4 mx-auto my-16 bg-white flex flex-col">
        <h2 className="text-indigo-700 text-2xl pb-1 leading-none font-extrabold tracking-tight sm:text-2xl sm:leading-no">
          Create New Article
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Fill all the required details
        </p>
        <input
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mt-4"
          placeholder="Title"
          type="text"
          name="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <span className="text-red-500 text-sm pl-1 font-medium">
            {formik.errors.title}
          </span>
        ) : (
          false
        )}
        <textarea
          className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mt-4 resize-none"
          placeholder="What's this article about?"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        ></textarea>
        {formik.touched.description && formik.errors.description ? (
          <span className="text-red-500 text-sm pl-1 font-medium">
            {formik.errors.description}
          </span>
        ) : (
          false
        )}
        <textarea
          className="bg-white rounded border border-gray-400 focus:outline-none h-56 focus:border-indigo-500 text-base px-4 py-2 mt-4 resize-none"
          placeholder="Write your article (in markdown)"
          name="body"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
        ></textarea>
        {formik.touched.body && formik.errors.body ? (
          <span className="text-red-500 text-sm pl-1 font-medium">
            {formik.errors.body}
          </span>
        ) : (
          false
        )}
        <input
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mt-4"
          placeholder="Enter tags"
          type="text"
          name="tags"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tags}
        />
        {formik.touched.tags && formik.errors.tags ? (
          <span className="text-red-500 text-sm pl-1 font-medium">
            {formik.errors.tags}
          </span>
        ) : (
          false
        )}
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg my-4"
        >
          Publish Article
        </button>
      </div>
    </form>
  );
}
