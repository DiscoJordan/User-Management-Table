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
                <div className="title">
                  <span className="material-symbols-outlined">badge</span>
                  Name
                </div>
                <br />
                <div className="search-input">
                  <span className="material-symbols-outlined">search</span>
                  <input
                    className="search"
                    name="name"
                    value={filters.name}
                    onChange={handleFilterChange}
                    placeholder="Search by name"
                  />
                </div>
              </th>
              <th>
                <div className="title">
                  <span className="material-symbols-outlined">
                    account_circle
                  </span>
                  Username
                </div>
                <br />
                <div className="search-input">
                  <span className="material-symbols-outlined">search</span>
                  <input
                    className="search"
                    name="username"
                    value={filters.username}
                    onChange={handleFilterChange}
                    placeholder="Search by username"
                  />
                </div>
              </th>
              <th>
                <div className="title">
                  <span className="material-symbols-outlined">mail</span>
                  Email
                </div>
                <br />
                <div className="search-input">
                  <span className="material-symbols-outlined">search</span>
                  <input
                    className="search"
                    name="email"
                    value={filters.email}
                    onChange={handleFilterChange}
                    placeholder="Search by email"
                  />
                </div>
              </th>
              <th>
                <div className="title">
                  <span className="material-symbols-outlined">call</span>
                  Phone
                </div>
                <br />
                <div className="search-input">
                  <span className="material-symbols-outlined">search</span>
                  <input
                    className="search"
                    name="phone"
                    value={filters.phone}
                    onChange={handleFilterChange}
                    placeholder="Search by phone"
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="table-body">
            {filteredUsers.length ? (
              filteredUsers.map((user,i) => (
             
                <tr className="body-row" key={user.id}>
                  <td>{++i}. {user.name}</td>
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
