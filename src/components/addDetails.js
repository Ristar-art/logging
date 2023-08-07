import axios from 'axios';
import { useState } from 'react';

function AddDetails() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [biography, setBiography] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [jobPosition, setJobPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    const profile = {
      name,
      surname,
      dateOfBirth,
      biography,
      email,
      phoneNumber,
      jobPosition,
      image,
    };

    axios
      .post('http://localhost:7000/profile', profile)
      .then(() => {
        setIsPending(false);
      })
      .catch((error) => {
        console.error('Error uploading profile:', error);
        setIsPending(false);
      });
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

  return (
    <div>
      <h1>Log your profile</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} /> <br />
        <input
          type="text"
          placeholder="Surname"
          required
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />{' '}
        <br />
        <input
          type="date"
          placeholder="Date of birth"
          required
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />{' '}
        <br />
        <input
          type="text"
          placeholder="Biography"
          required
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />{' '}
        <br />
        <input
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
        <br />
        <input
          type="text"
          placeholder="Phone Number"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />{' '}
        <br />
        <input
          type="text"
          placeholder="Job position"
          required
          value={jobPosition}
          onChange={(e) => setJobPosition(e.target.value)}
        />{' '}
        <br />
        <input type="file" name="image" accept="image/*" onChange={handleImageUpload} /> <br />
        <div className="input-button">
          {!isPending && <button type="submit">Load details</button>}
          {isPending && <button type="submit" disabled>Loading...</button>}
        </div>
      </form>
    </div>
  );
}

export default AddDetails;
