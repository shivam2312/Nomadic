import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Shivam Jaiswal",
      image:
        "https://i.ibb.co/vY3JhnN/Screenshot-2021-02-19-at-1-28-28-AM.png",
      places: "3",
    },
    {
        id: "u2",
        name: "New Name",
        image:
          "https://i.ibb.co/vY3JhnN/Screenshot-2021-02-19-at-1-28-28-AM.png",
        places: "4",
      },
  ];
  return <UserList items={USERS}/>;
};

export default Users;
