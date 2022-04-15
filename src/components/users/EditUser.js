import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  const { name, username, email, phone, website } = user;

  const onInputChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:3002/users/${id}`, user);
    navigate('/');
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit a User</h2>
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">
              Enter your name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="e.g. John Doe"
              name="name"
              value={name}
              onChange={(e) => onInputChangeHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label">
              Enter your username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="e.g. John"
              name="username"
              value={username}
              onChange={(e) => onInputChangeHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Enter your email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="e.g. johndoe@gmail.com"
              name="email"
              value={email}
              onChange={(e) => onInputChangeHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone" className="form-label">
              Enter your phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="e.g. +919876543210"
              name="phone"
              value={phone}
              onChange={(e) => onInputChangeHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="website" className="form-label">
              Enter your website
            </label>
            <input
              type="url"
              className="form-control"
              id="website"
              placeholder="e.g. www.johndoe.com"
              name="website"
              value={website}
              onChange={(e) => onInputChangeHandler(e)}
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
