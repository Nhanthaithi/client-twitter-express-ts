// UserList.tsx
import { Link } from "react-router-dom";

import { Images } from "../../Assets/images";

const UserList = () => {
  return (
    <div className="user-list">
      {/* {users.length ? ( */}
      {/* users.map((user) => ( */}
      <div className="user">
        <div className="flex items-center">
          <Link to={"/profile/id"} className="flex items-center">
            <img src={Images.Notfound} alt={"avatar"} />
            <div className="details ">
              <div className="user-info flex">
                <div className="name">{"Thái Thị Nhàn"}</div>
                <div className="username">{"@Nhanthai123"}</div>
              </div>

              <div className="timestamp">{"07-Jul"}</div>
            </div>
          </Link>
        </div>
        <div className="last-message text-sm text-gray-500">
          {"đoạn chat cuối"}
        </div>
      </div>
    </div>
  );
};

export default UserList;
