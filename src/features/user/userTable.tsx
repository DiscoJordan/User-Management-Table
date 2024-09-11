import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { setUsers, setFilters } from "./userSlice";

import axios from "axios";

const UserTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredUsers, filters } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(setUsers(response.data));
    };
    loadUsers();
  }, [dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="inputs"></div>
        <table className="table">
          <thead className="table-head">
            <tr className="head-row">
              <th>
                Name
                <input
                  className="search"
                  name="name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  placeholder="Search by name"
                />
              </th>
              <th>
                Username
                <input
                  className="search"
                  name="username"
                  value={filters.username}
                  onChange={handleFilterChange}
                  placeholder="Search by username"
                />
              </th>
              <th>
                Email
                <input
                  className="search"
                  name="email"
                  value={filters.email}
                  onChange={handleFilterChange}
                  placeholder="Search by email"
                />
              </th>
              <th>
                Phone
                <input
                  className="search"
                  name="phone"
                  value={filters.phone}
                  onChange={handleFilterChange}
                  placeholder="Search by phone"
                />
              </th>
            </tr>
          </thead>
          <tbody className="table-body">
            {filteredUsers.length ? (
              filteredUsers.map((user) => (
                <tr className="body-row" key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))
            ) : (
              <h1>Nothing was found</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
