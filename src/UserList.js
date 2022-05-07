import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/`
      );

      setUsers(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Users List</h2>
      <div>
        {users.map((el, index) => (
          <div key={index} className="card bg-light text-whit mb-3">
            <h5 className="card-header">{el.name}</h5>
            <div className="card-body" style={{ textAlign: "left" }}>
              <p className="card-text">Username: {el.username}</p>
              <p className="card-text">Company : {el.company.name}</p>
              <p className="card-text">Address : {el.address.street}</p>
              <p className="card-text">Phone : {el.phone}</p>
              <p className="card-text">Website : {el.website}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
