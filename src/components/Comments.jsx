import React from "react";
import { withRouter, useParams } from "react-router-dom";
import { ROOT_URL } from "../constants";
import { useFetch } from "./hooks/handleFetch";
import { v4 as uuid } from "uuid";

function Comments(props) {
  const params = useParams();

  const { data, error, isLoading } = useFetch(
    ROOT_URL + `articles/${params.slug}/comments`
  );

  if (data) {
    return (
      <div className="w-full px-16">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        {data.comments.length
                          ? `${data.comments.length} Comments`
                          : "No Comment on this article"}
                      </th>
                      <th className="px-6 py-3 bg-gray-50"></th>
                    </tr>
                  </thead>
                  {data.comments.map((comment) => {
                    return (
                      <tbody
                        key={uuid()}
                        className="bg-white divide-y divide-gray-200"
                      >
                        <tr>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full border-2"
                                  src={comment.author.image}
                                  alt={`${comment.author.username}-img`}
                                />
                              </div>
                              <div className="ml-4 w-full">
                                <div className="text-sm leading-5 font-medium text-gray-900">
                                  {comment.author.username}
                                </div>
                                <div className="text-sm leading-5 text-gray-500 w-full">
                                  {comment.body}
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-20">
        <h1>{error}</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full p-20">
        <h1>Loading Comments...</h1>
      </div>
    );
  }

  return (
    <div className="w-full p-20">
      <h1>Loading Comments...</h1>
    </div>
  );
}

export default withRouter(Comments);
