import { useState } from "react";
import { useParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function PostDetails({ list, dispatch }) {
  let { id } = useParams();
  const item = list.find((item) => item.id === id);
  const { imageUrl, prompt, negPrompt } = item;
  const [fullImg, setFullImg] = useState(false);
  const [newPrompt, setNewPrompt] = useState("");
  const [newNegPrompt, setNewNegPrompt] = useState("");
  const [showModal, setShowModal] = useState(false);

  const getFullImg = () => {
    setFullImg(!fullImg);
    console.log(fullImg);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    if (newPrompt.length >= 5) {
      dispatch({
        type: "EDIT",
        payload: {
          id: id,
          prompt: newPrompt,
          negPrompt: newNegPrompt,
        },
      });
      setNewPrompt("");
      setNewNegPrompt("");
      setShowModal(!showModal);
    }
  };

  return (
    <>
      {/* -------------- MODAL------------------  */}
      <div
        className={`w-screen h-screen absolute ${!showModal && "hidden"} 
    flex justify-center items-center z-50 bg-[#000000b7]`}
      >
        <button onClick={handleModal} className="w-max absolute top-2 right-2">
          x
        </button>
        <div className="absolute  ">
          <form action="submit" onSubmit={handleEdit}>
            <label
              htmlFor="comment"
              className=" text-[var(--text-color)] block text-sm font-medium leading-6 "
            >
              Edit Prompt:
            </label>
            <div className="mt-2 mb-4">
              <textarea
                pattern
                rows={8}
                onChange={(e) => setNewPrompt(e.target.value)}
                value={newPrompt}
                name="comment"
                id="comment"
                className=" p-4 block md:w-[75vw] w-[90vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
              {newPrompt.length > 0 & newPrompt.length < 5 &&
              <span className="text-red-600">Minimum at least 5 characters</span> }
            </div>
            <label
              htmlFor="comment"
              className=" text-[var(--text-color)] block text-sm font-medium leading-6 "
            >
              Edit Negative Prompt:
            </label>
            <div className="mt-2">
              <textarea
                onChange={(e) => setNewNegPrompt(e.target.value)}
                rows={8}
                value={newNegPrompt}
                name="comment"
                id="comment"
                className="block p-4 md:w-[75vw] w-[90vw] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
              
            </div>
            <div className="flex items-center justify-center my-4">
              <button type="submit" className="">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className={`text-white flex flex-col md:flex-row flex-nowrap ${
          !fullImg && "md:h-[85vh]"
        }
             w-screen justify-around items-center gap-8 p-4 m overflow-scroll relative
        `}
      >
        <div
          className="flex relative md:flex-row flex-col overflow-scroll
        justify-center items-start bg-[var(--secondary-color)] p-4 rounded-md"
        >
            <Link
          className="opacity-50 hover:opacity-100 duration-500 absolute  bottom-5 left-5
        hover:animate-bounce   w-fit z-20 p-2 rounded-md hover:after:content-['CLick to go Back to Gallery']
          text-[var(--text-color)]
          bg-[var(--third-color)]"
          smooth
          to="/gallery/#gallerytop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="rgb(255, 255, 255)"
            strokeWidth="10"
            stroke="black"
            height="2em"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          </Link>
          <img
            id="image"
            onClick={getFullImg}
            className={`self-center ${
              fullImg
                ? " md:w-screen  w-screen scale-150 md:scale-100 cursor-zoom-out"
                : "md:max-h-[60vh] h-/5 cursor-zoom-in"
            } rounded-md`}
            src={imageUrl}
            alt=""
          />
          <span className="md:absolute bottom-0 left-2">CLick to {!fullImg?'Zoom in': 'Zoom out'}</span>

          <div
            className={`overflow-x-scroll ${
              fullImg && "hidden"
            } bg-[var(--secondary-color)] md:max-h-[70vh] 
        overflow-scroll rounded-md p-4 gap-10 leading-relaxed 
        tracking-wide mb-24 md:mb-3`}
          >
            <h3 className="font-bold text-2xl my-3">Prompt Used: </h3>
            <p className="max-w-3xl">{prompt}</p>
            <h3 className="font-bold text-2xl my-3">Negative Prompt Used: </h3>
            <p className="max-w-3xl">{negPrompt}</p>
          </div>
          
        </div>
      </div>
      <div
        className={`${
          fullImg && "hidden"
        } flex justify-center mb-4 items-center w-screen bottom-5 `}
      >
        <button onClick={handleModal} className="mx-3">
          Edit
        </button>
      </div>
    </>
  );
}
