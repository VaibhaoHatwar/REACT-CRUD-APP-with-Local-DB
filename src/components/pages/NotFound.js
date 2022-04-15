import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="display-1">Page Not Found</h1>
      <p className="lead">
        <Link to="/">Back To Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
