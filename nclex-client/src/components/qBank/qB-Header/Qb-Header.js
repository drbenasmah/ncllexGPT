import { Link } from "react-router-dom";
import "./qB-header.css";

const QbHeader = () => {
  return (
    <div className="header">
      <Link to="/qbank" className="title">
        Intuitive Quiz Hub
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default QbHeader;
