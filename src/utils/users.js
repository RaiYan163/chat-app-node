const users = [];

//addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, Room }) => {
  //clean the data
  username = username.trim().toLowerCase();
  Room = Room.trim().toLowerCase();

  //validate the data

  if (!username || !Room) {
    return {
      error: "Username and room are required!",
    };
  }

  //check for existing user

  const existingUser = users.find((user) => {
    return user.Room === Room && user.username === username;
  });

  //validate username

  if (existingUser) {
    return {
      error: "Username is in use!",
    };
  }

  //store user

  const user = { id, username, Room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (Room) => {
  Room = Room.trim().toLowerCase();
  return users.filter((user) => user.Room === Room);
};

// addUser({
//   id: 22,
//   username: "Raiyan ",
//   room: " DHAKA",
// });

// //console.log(users);

// addUser({
//   id: 33,
//   username: "RAIYAN",
//   room: "Khulna",
// });

// addUser({
//   id: 23,
//   username: "UTSHO",
//   room: "Khulna",
// });

// const user = getUser(421);

// console.log(user);

// const userList = getUsersInRoom("Sylhet");
// console.log(userList);

// const removedUser = removeUser(22);

// //console.log(removedUser);
// //console.log(users);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
