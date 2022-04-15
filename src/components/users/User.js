import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const User = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  });

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(res.data);
  };

  const { name, username, email, phone, website } = user;

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {name}</li>
        <li className="list-group-item">name: {username}</li>
        <li className="list-group-item">name: {email}</li>
        <li className="list-group-item">name: {phone}</li>
        <li className="list-group-item">name: {website}</li>
      </ul>
    </div>
  );
};

export default User;
