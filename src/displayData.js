import axios from "axios";
import { useState, useEffect } from "react";

function DisplayData() {
  const [profile, setProfile] = useState([]);
  const [editingWorkerId, setEditingWorkerId] = useState(null);
  const [image, setImage] = useState(null);
  const [tempWorker, setTempWorker] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:7000/profile");
      const data = await res.json();
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const deleteProfile = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/profile/${id}`);
      setProfile(profile.filter((worker) => worker.id !== id));
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  const updateProfile = async (updatedProfile) => {
    try {
      const updatedWorker = { ...updatedProfile };

      if (image) {
        updatedWorker.image = image;
      }

      await axios.put(`http://localhost:7000/profile/${updatedProfile.id}`, updatedWorker);
      setProfile((prevProfile) =>
        prevProfile.map((worker) => (worker.id === updatedWorker.id ? updatedWorker : worker))
      );
      setEditingWorkerId(null);
      setImage(null);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const startEditing = (id) => {
    const worker = profile.find((w) => w.id === id);
    setTempWorker(worker);
    setEditingWorkerId(id);
  };

  const cancelEdit = () => {
    setEditingWorkerId(null);
    setImage(null);
    setTempWorker(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const image = reader.result;
      setImage(image);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempWorker((prevTempWorker) => ({ ...prevTempWorker, [name]: value }));
  };

  return (
    <div className="Front">
      <h1>Worker profiles</h1>
      {profile.map((worker) => (
        <div className="worker-preview" key={worker.id}>
          <div className="image">
            {editingWorkerId === worker.id && image ? (
              <img src={image} alt="Profile" style={{ width: "200px", height: "200px" }} />
            ) : (
              worker.image && <img src={worker.image} alt="Profile" />
            )}
          </div>
          <div className="Name">
            <p>{worker.surname} - {worker.name}</p>
          </div>
          <div className="dateOfBirth">
            <p>Born in {worker.dateOfBirth}</p>
          </div>
          <div className="biography">
            <p>{worker.biography}</p>
          </div>
          <div className="email">
            <p>Email - {worker.email}</p>
          </div>
          <div className="phoneNumber">
            <p>Call - {worker.phoneNumber}</p>
          </div>
          <div className="Position">
            <p>{worker.jobPosition}</p>
          </div>
          {editingWorkerId === worker.id ? (
            <div className="edit">
              <div>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={tempWorker.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="surname"
                  value={tempWorker.surname}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={tempWorker.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="biography"
                  value={tempWorker.biography}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  value={tempWorker.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phoneNumber"
                  value={tempWorker.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="jobPosition"
                  value={tempWorker.jobPosition}
                  onChange={handleInputChange}
                />
              </div>
              <button onClick={() => updateProfile(tempWorker)}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </div>
          ) : (
            <div className="edit">
              <button onClick={() => startEditing(worker.id)}>Edit</button>
            </div>
          )}
          <div className="delete">
            <button onClick={() => deleteProfile(worker.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayData;
