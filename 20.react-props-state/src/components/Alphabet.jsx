import React, { useRef, useState } from "react";
import "../App.css";

export default function UserInfo() {
  const [users, setUsers] = useState([]);
  const [searchType, setSearchType] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleAddUser = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    if (name.trim() === "" || email.trim() === "") return;
    const newUser = {
      id: Date.now(),
      name,
      email,
    };
    setUsers([...users, newUser]);
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddUser();
    }
  };

  const handleSearch = () => {
    const results = users.filter(user =>
      searchType === "name" ? user.name.includes(searchTerm) : user.email.includes(searchTerm)
    );
    setFilteredUsers(results);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          ref={nameRef}
          onKeyDown={handleKeyDown}
        />
        <input
          type="email"
          placeholder="이메일"
          ref={emailRef}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleAddUser}>등록</button>
      </div>
      <div>
        <select onChange={(e) => setSearchType(e.target.value)}>
          <option value="name">이름</option>
          <option value="email">이메일</option>
        </select>
        <input
          type="text"
          placeholder="검색"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      <h2>전체 사용자 목록</h2>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} onDoubleClick={() => handleDeleteUser(user.id)}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>검색 결과</h2>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
