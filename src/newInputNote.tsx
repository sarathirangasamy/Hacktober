import React from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (e: any) => {
    setNote(e.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };
  return (
    <>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="name"
        placeholder="Note"
      />
         <input
        onChange={updateNote}
        type="text"
        name="email"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add Note</button>
    </>
  );
};

export default NewNoteInput;
