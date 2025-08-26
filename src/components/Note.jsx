const Note = ({ note, deleteNote }) => {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md border-l-4"
      style={{
        borderColor:
          note.priority === "High"
            ? "red"
            : note.priority === "Low"
            ? "green"
            : "yellow",
      }}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Priority: </strong>
        {note.priority}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Category: </strong>
        {note.category}
      </p>
      <p className="mt-2">{note.description}</p>
      <button
        className="mt-3 text-red-500 cursor-pointer transition hover:text-red-800"
        onClick={() => deleteNote(note.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
