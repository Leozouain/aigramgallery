import { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import jsonData from '../json/db.json'




const initialState = jsonData.map(item => ({
  id: uuid(),
  prompt: item.prompt,
  negPrompt: item.negPrompt,
  imageUrl: item.imageUrl
}));

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (action.payload.prompt) {
        return [
          {
            id: uuid(),
            prompt: action.payload.prompt,
            negPrompt: action.payload.negPrompt,
            imageUrl: action.payload.imageUrl,


          },...state
          ,
        ];
      }
      break;
    case "DEL":
      if (action.payload.id) {
        let newState = [...state];
        newState = newState.filter((item) => item.id !== action.payload.id);
        return newState;
      }
      break;
      case "EDIT":
      if (action.payload.id && action.payload.prompt) {
        return state.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                prompt: action.payload.prompt,
                negPrompt: action.payload.negPrompt,
                // imageUrl: action.payload.imageUrl,
              }
            : item
        );
      }
  }
  return state;
};

export const NewPost = () => useReducer(reducer, initialState)

