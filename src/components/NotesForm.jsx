import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextArea from "./inputs/TextArea";

const NotesForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });
  const [isFormVisiable, setIsFormVisiable] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validation
    if (!formData.title || !formData.description) return;

    //create a new note object
    const newNote = { id: Date.now(), ...formData };

    //add note to state
    setNotes([newNote, ...notes]);

    //reset the form data
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <>
      <button
        className="w-full bg-gray-100 border 
        border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer 
        hover:bg-purple-200 hover: border-purple-300 transition mb-4"
        onClick={() => setIsFormVisiable(!isFormVisiable)}
      >
        {isFormVisiable ? "Hide Form" : "Add New Note"}
      </button>
      {isFormVisiable && (
        <form className="mb-6" onSubmit={handleSubmit}>
          <TextInput
            label={"Title"}
            name={"title"}
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label={"Priority"}
            name={"priority"}
            value={formData.value}
            onChange={handleChange}
            options={[
              { value: "High", label: "High" },
              { value: "Medium", label: "Medium" },
              { value: "Low", label: "Low" },
            ]}
          />
          <SelectInput
            label={"Category"}
            name={"category"}
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "Work" },
              { value: "Ideas", label: "Ideas" },
              { value: "Personal", label: "Personal" },
            ]}
          />
          <TextArea
            label={"Description"}
            name={"description"}
            value={formData.description}
            onChange={handleChange}
          />
          <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-700">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NotesForm;
