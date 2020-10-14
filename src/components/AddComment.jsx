import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { withRouter, useParams } from "react-router-dom";
import { useFetchPost } from "./hooks/handleFetch";
import { useToasts } from "react-toast-notifications";

function AddComment(props) {
  const [state, setState] = useFetchPost();
  const { isLoading, data, error } = state;
  const params = useParams();
  const { addToast } = useToasts();

  if (data) {
    console.log(data, "data");
    addToast("Logout successfull", {
      appearance: "success",
      autoDismiss: true,
    });
  }

  if (error) {
    addToast(error.message, {
      appearance: "error",
      autoDismiss: true,
    });
    console.log(error, "error");
  }

  if (isLoading) {
    console.log(isLoading, "isLoading");
  }

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Can't be blank").min(3, "Too Short!"),
    }),
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(`api/articles/:${params.slug}/comments`, values);
      setState({
        value: {
          comment: {
            body: values,
          },
        },
        url: `api/articles/:${params.slug}/comments`,
        headers: {
          Authorization: `Token ${localStorage.authToken}`,
          "Content-Type": "application/json",
        },
      });
    },
  });

  return (
    <form className="px-16" onSubmit={formik.handleSubmit}>
      <div className="flex justify-between rounded-lg">
        <div className="w-full flex flex-col">
          <h1 className="text-center text-indigo-700 text-1xl leading-9 font-extrabold tracking-tight sm:text-2xl sm:leading-10 text-center">
            Add Comment
          </h1>
          <div className="py-2 flex flex-col" width="100%">
            <textarea
              className="border-2 px-4 py-2"
              rows="4"
              type="text"
              name="comment"
              placeholder="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.comment}
            />
            {formik.touched.comment && formik.errors.comment ? (
              <span className="text-red-500 text-sm pl-1 font-medium">
                {formik.errors.comment}
              </span>
            ) : (
              false
            )}
            <button
              type="submit"
              className="transition duration-500 ease-in-out px-8 py-2 rounded-md text-md font-medium leading-5 text-white bg-indigo-700 focus:outline-none focus:text-white focus:bg-indigo-500 transition duration-150 ease-in-out hover:bg-indigo-600 my-4 w-1/2 mx-auto"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default withRouter(AddComment);
