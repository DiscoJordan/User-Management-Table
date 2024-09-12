import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UserState {
  users: User[];
  filteredUsers: User[];
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: UserState = {
  users: [],
  filteredUsers: [],
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<UserState['filters']>>) => {
        state.filters = { ...state.filters, ...action.payload };
        const { name, username, email, phone } = state.filters;
      
        state.filteredUsers = state.users.filter(user => {
          const matchesName = name ? user.name.toLowerCase().includes(name.toLowerCase()) : true;
          const matchesUsername = username ? user.username.toLowerCase().includes(username.toLowerCase()) : true;
          const matchesEmail = email ? user.email.toLowerCase().includes(email.toLowerCase()) : true;
          const matchesPhone = phone ? user.phone.toLowerCase().includes(phone.toLowerCase()) : true;
      
          return matchesName && matchesUsername && matchesEmail && matchesPhone;
        });
      },
  }});

export const { setUsers, setFilters } = userSlice.actions;
export default userSlice.reducer;
