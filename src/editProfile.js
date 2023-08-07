import React, { useState } from "react";

function EditProfile({ worker, updateProfile, cancelEdit }) {
  const [editedProfile, setEditedProfile] = useState(worker);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(editedProfile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={editedProfile.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={editedProfile.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={editedProfile.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={editedProfile.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={editedProfile.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={editedProfile.name}
        onChange={handleChange}
      />
      {/* Add input fields for other profile properties */}
      {/* e.g., surname, dateOfBirth, biography, email, phoneNumber, jobPosition */}
      <button type="submit">Save</button>
      <button type="button" onClick={cancelEdit}>
        Cancel
      </button>
    </form>
  );
}

export default EditProfile;
