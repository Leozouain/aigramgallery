import { useRef, useState } from "react";
// import { NewPost } from "../reducers/newPost";
import Card from "./Card";

export default function Post({list, dispatch}) {
  // const [list, dispatch] = NewPost();
  const [prompt, setPrompt] = useState("");
  const [negPrompt, setNegPrompt] = useState("");
  const [postLoad, setPostLoad] = useState();
  const [image, setImage] = useState("");
  const [msgPrompt, setMsgPrompt] = useState({ prompt: "", image: "" });

  

  const fileInputRef = useRef(null);

  const msgList = [
    "File Not Selected",
    "Minimum 15 characters",
    "Prompt Required",
  ];
  const errorList = { prompt: "", image: "" };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
   
  };

  const handleNegPromptChange = (e) => {
    setNegPrompt(e.target.value);
  };
  const handleImageUrl = (e) => {
    const image = e.target.files[0];

    setImage(image);
  };

  const modalPost = () => {
    setPostLoad(!postLoad);
    
  };

  const handleClickPost = () => {
    let imageUrl = null;
    if (image) {
      imageUrl = URL.createObjectURL(image);
    }

    errorList.prompt = "";
    errorList.image = "";

    if (prompt.length < 15) {
      errorList.prompt = msgList[1];
    }
    if (prompt.length === 0) {
      errorList.prompt = msgList[2];
    }

    if (image.length < 1) {
      errorList.image = msgList[0];
    }

    setMsgPrompt(errorList);

    if (prompt.length >= 15 && imageUrl) {
      dispatch({
        type: "ADD",
        payload: {
          prompt: prompt,
          negPrompt: negPrompt,
          imageUrl: imageUrl,
        },
      });
      setPostLoad(!postLoad);
      setPrompt("");
      setImage(null);
      setNegPrompt("");
      fileInputRef.current.value = "";
    }
  };

 
  return (
    <div id="gallerytop" className="flex flex-col justify-center items-center my-7 ">
      <div 
        className={`${
          !postLoad && "hidden"
        } rela flex justify-center items-center h-screen z-50 fixed top-0 w-screen bg-[rgba(19,19,19,0.74)]`}
      >
        <div className={`flex flex-col xl:w-[45vw] sm:w-[70vw] 
        w-[80vw]   `}>
          <div
            className="  text-[var(--text-color)] relative 
          bg-[var(--secondary-color)] flex flex-col gap-[35px]
          justify-center items-center p-16 h-full rounded-xl"
          >
            <button
              onClick={modalPost}
              className="w-max absolute top-2 right-2"
            >
              x
            </button>

            <textarea
              required
              value={prompt}
              className="w-4/5 "
              onChange={handlePromptChange}
              type="text"
              pattern=".{8,}"
              placeholder="Least 15 characters"
              minLength="15"
              rows={6}
              name="promptReq"
            />

            {msgPrompt.prompt.length > 0 && <span className=" text-red-600 mt-[-30px] "> {msgPrompt.prompt}</span>}

            <textarea
              value={negPrompt}
              className="w-4/5 h-2/5"
              onChange={handleNegPromptChange}
              type="text"
              placeholder="TYPE YOUR NEGATIVE PROMPT "
              rows={6}
            />

            

            <input
              id="photo"
              ref={fileInputRef}
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Upload Your Image"
              className="block text-sm"
              onChange={handleImageUrl}
              type="file"
              placeholder="IMAGE URL"
              accept="image/*"
            />
            {msgPrompt.image.length > 0 && <span className="text-red-600 mt-[-30px] "> {msgPrompt.image}</span>}
            <button onClick={handleClickPost}>Post </button>
          </div>
        </div>
      </div>

      <button onClick={modalPost}>Make New Post</button>

      <div className="">
        <Card  list={list} dispatch={dispatch} />
      </div>
    </div>
  );
}
