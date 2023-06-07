import BasicPagination from "../../components/Pagination/BasicPagination";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="pagination">
        <BasicPagination />
      </div>
    </div>
  );
};

export default HomePage;
