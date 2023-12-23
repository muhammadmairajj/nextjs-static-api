import Link from "next/link";
import AddUser from "../adduser/page";
import DeleteBtn from "../components/DeleteBtn";

const getUsers = async () => {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();
  // console.log(data);
  return data.users;
};

const Users = async () => {
  const users = await getUsers();
  // console.log(users.users);
  return (
    <div>
      <h1>User Lists</h1>
      <Link
        href={"/adduser"}
        style={{
          margin: 10,
          border: "1px solid black",
          textDecoration: "none",
          color: "#fff",
          background: "#0073c7",
          padding: 5
        }}
      >
        Add User
      </Link>
      <div>
        <table border={"1px"} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>
                    <Link href={`/users/${user.id}`}>View</Link>
                    &nbsp; &nbsp;
                    <Link href={`/users/${user.id}/update`}>Edit</Link>
                    &nbsp; &nbsp;
                    <DeleteBtn userId={user.id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
