import React, { useState } from "react";
// import { Sidebar } from '../components/Sidebar/Sidebar'
import axios from "axios";
import parse from "html-react-parser";

function Dashboard() {
  const [link, setLink] = useState("");
  const [comments, setComments] = useState([]);
  const [ans, setAns] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    if (!link) return alert("Please enter a valid YouTube URL");
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post("http://192.168.151.22:8080/api/comments", {
        link: link,
      });
      console.log("Response Data: ", res.data);

      setComments(res.data.comments);
      setAns(res.data.ans[0]);
    } catch (err) {
      setError("Failed to fetch comments. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // eg yt link: https://youtu.be/kyqpSycLASY?si=JcCqVdbZYJGLmZBX

  return (
    <>
      <div className="Dashbaord-container h-[100%] w-[100vw] flex flex-col justify-center items-center ">
        <div className="Dashbaord-form w-[30%] max-md:w-[80%] h-[70%] py-[40px] bg--500 text-white flex flex-col justify-center items-center gap-[20px]  ">
          <h1 className="text-[40px] font-bold ">Paste YT link</h1>

          <div className="input-section h-auto w-full flex flex-col justify-center items-center gap-[20px] ">
            <input
              className="outline-none bg-[#242424] w-full focus:transition-all focus:border-[#424242] px-[2vw] py-[1.4vh] rounded-[8px] border-[2px] border-solid border-zinc-800 "
              type="text"
              placeholder="YouTube URL"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <button
            onClick={fetchComments}
            className="button-container rounded-[8px] bg-[#fff] hover:shadow-md hover:shadow-[#404040] w-[30%] px-[1.4vw] py-[1.2vh] text-black cursor-pointer hover:scale-[1.05] transition-all font-medium   "
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>

        <div className="comments text-white w-[70%] flex flex-col justify-center items-center -[#424242]">
          {comments.length > 0 && (
            <div className="comments-container w-full p-4 bg-[#2e2e2e] rounded-md mt-4 overflow-y-auto max-h-[300px]">
              <h2 className="text-lg font-semibold">Output:</h2>
              <div className="content-container h-[200px] w-full flex justify-center items-center overflow-hidden ">
                <p className="w-[40%] px-[2vw] h-full flex justify-center items-center ">
                  {ans}
                </p>

                <div className="w-[60%] px-[2vw] h-full flex flex-col justify-start items-start ">
                  <h2 className="text-lg font-semibold">Comments:</h2>

                  <div className="comments-section h-auto flex flex-col justify-start items-start overflow-y-auto relative">
                  <ul className="mt-2 text-sm">
                    {Array.isArray(comments) &&
                      comments.map((comment, index) => (
                        <li
                          key={index}
                          className="mb-4 border-b border-gray-600 pb-2"
                        >
                          {parse(comment)}
                        </li>
                      ))}
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
