export type AddNoteAction = {
    type: "ADD_NOTE";
    payload: string;
  };
  
  export const addNote = (note: string): AddNoteAction => ({
    type: "ADD_NOTE",
    payload: note
  });
  

  