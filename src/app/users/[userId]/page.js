const getUsers = async (id) => {
    const response = await fetch(`http://localhost:3000/api/users/${id}`);
    const data = await response.json();
    // console.log(data);
    return data.result;
  }
  

const UserDetail = async (params) => {
    console.log(params.params.userId);
    const user = await getUsers(params.params.userId);
    // console.log(user);
  return (
    <div>
        <h1>User Detail Page...</h1>
        <ul>
            <li>Id: {user.id}</li>
            <li>FirstName: {user.firstName}</li>
            <li>LastName: {user.lastName}</li>
            <li>UserName: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>Phone: {user.phone}</li>
            <li>Age: {user.age}</li>
            <li>Gender: {user.gender}</li>
        </ul>
    </div>
  )
}

export default UserDetail