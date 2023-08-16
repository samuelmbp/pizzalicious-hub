import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <header>
      <Link to="/">Pizzalicious Hub Co.</Link>

      <SearchOrder />
      <p>Samuel</p>
    </header>
  );
};

export default Header;
