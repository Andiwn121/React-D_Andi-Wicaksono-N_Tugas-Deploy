import React, {useEffect} from "react";
import "./aboutUs.css";
import { USERS_DATA } from "./Constants";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { useGetUsers } from "./hooks/useUsersData";
import LoadingComponent from "../../component/loadingComponent/loadingComponent";


const AboutUs = () => {
  const { id } = useParams();

  const [isLoadingUsersData, usersData, getUsersData] = useGetUsers();

  console.log({usersData})

  const data = id ? USERS_DATA.filter((item) => item.id === id) : USERS_DATA;

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <div>
      <h1>About Us</h1>

      {isLoadingUsersData ? (<LoadingComponent/>):(
        usersData.map((user) => (
          <Link to={user.id} key={user.id}>
            <div className="user-cards">
              <div>{user.firstName}</div>
              <div>{user.age}</div>
              <div>{user.hobby}</div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default AboutUs;
