import React from 'react';
import './App.css';
import UserTable from './features/user/userTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
};

export default App;