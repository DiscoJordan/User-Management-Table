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
        state.filteredUsers = state.users.filter(user =>
          Object.entries(state.filters).every(([key, value]) => {
            const userValue = user[key as keyof User];
            const filterValue = value as string;
            return userValue.toString().toLowerCase().includes(filterValue.toLowerCase());
          })
        );
      },
    },
  });

export const { setUsers, setFilters } = userSlice.actions;
export default userSlice.reducer;
