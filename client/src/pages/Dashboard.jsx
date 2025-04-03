import React, { useState } from "react";
// import { Sidebar } from '../components/Sidebar/Sidebar'
import axios from "axios";
import parse from "html-react-parser";

function Dashboard() {
  const [link, setLink] = useState("");
  const [comments, setComments] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    if (!link) return alert("Please enter a valid YouTube URL");
    setLoading(true);
    setError(null);
    try {
      // const res = await axios.get("http://localhost:8080/api/comments", {
      //   params: { url: link },
      // });
      const res = await axios.post("http://192.168.226.60:8080/api/comments", {
        link: link,
      });
      console.log("Response Data: ", res.data.ans[0]);

      setComments(res.data.ans[0]);
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

        <div className="comments h-auto text-white w-[70%] flex flex-col justify-center items-center bg-[#424242]">
          {comments.length > 0 && (
            <div className="comments-container w-full p-4 bg-[#1e1e1e] rounded-md mt-4 overflow-y-auto max-h-[300px]">
              <h2 className="text-lg font-semibold">Output:</h2>
             
              <p >
                {parse(comments)}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
