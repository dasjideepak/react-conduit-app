import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFetchPost } from "./hooks/handleFetch";
import { useToasts } from "react-toast-notifications";
import { withRouter } from "react-router-dom";

function CreateArticle(props) {
  const [state, setState] = useFetchPost();
  const { isLoading, data, error } = state;
  const { addToast } = useToasts();

  useEffect(() => {
    if (data) {
      addToast("Article added successfully", {
        appearance: "success",
        autoDismiss: true,
      });
      props.history.push(`/`);
      console.log(data.article.slug, "data");
    }
  }, [data, addToast, props]);

  useEffect(() => {
    if (error) {
      addToast(error.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }, [error, addToast]);

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
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(/images/bg-img.jpg)`,
      }}
    >
      <form
        className="container py-1 text-gray-700 body-font relative"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-7/12 mx-auto my-16 bg-white flex flex-col px-24 py-12 rounded-lg">
          <h2 className="text-center text-indigo-700 text-2xl pb-1 leading-none font-extrabold tracking-tight sm:text-2xl sm:leading-no">
            {props.title}
          </h2>
          <p className="text-center leading-relaxed mb-5 text-gray-600">
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
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(CreateArticle);
