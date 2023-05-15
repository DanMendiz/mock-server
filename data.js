const faker = require('faker');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = function generateData() {
  // Users
  const users = [
    {
      _id: uuidv4(),
      firstName: 'James',
      lastName: 'Sherry',
      email: 'james.sherry@thejump.tech',
      username: 'admin',
      password: bcrypt.hashSync('admin', salt),
      isAdmin: true,
    },
    {
      _id: uuidv4(),
      firstName: 'Fred',
      lastName: 'Bloggs',
      email: 'fred.bloggs@thejump.tech',
      username: 'fred',
      password: bcrypt.hashSync('bloggs', salt),
      isAdmin: false,
    },
  ];

  // Courts
  const NUMBER_OF_COURTS = 10;
  const courts = [];
  Array.from({ length: NUMBER_OF_COURTS }).forEach((c, i) => {
    courts.push({
      _id: uuidv4(),
      name: `Court ${i}`,
      bookings: [],
    });
  });

  // Members
  const NUMBER_OF_MEMBERS = 10;
  const members = [];
  Array.from({ length: NUMBER_OF_MEMBERS }).forEach((c, i) => {
    members.push({
      _id: uuidv4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    });
  });

  //Todos
  const todos = [
    {
      _id: uuidv4(),
      name: 'To-do: 1',
      task: 'Use fake server',
      avatar_url:
        'https://www.freepnglogos.com/uploads/server-png/server-icon-download-icons-17.png',
    },
    {
      _id: uuidv4(),
      name: 'To-do: 2',
      task: 'Make dinner',
      avatar_url:
        'https://img.favpng.com/25/10/23/computer-icons-meal-food-png-favpng-CkrtdYwPNPsFigPs9hevLKixv.jpg',
    },
    {
      _id: uuidv4(),
      name: 'To-do: 3',
      task: 'Finish react app',
      avatar_url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    },
    {
      _id: uuidv4(),
      name: 'To-do: 4',
      task: 'Clean bathroom',
      avatar_url:
        'https://www.freeiconspng.com/thumbs/clean-home-png/clean-home-png-12.png',
    },
  ];

  // cars

  const cars = [
    {
      _id: uuidv4(),
      name: 'Car-1',
      bhp: 111,
      avatar_url:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png',
    },
    {
      _id: uuidv4(),
      name: 'Car-2',
      bhp: 222,
      avatar_url:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png',
    },
    {
      _id: uuidv4(),
      name: 'Car-3',
      bhp: 333,
      avatar_url:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png',
    },
    {
      _id: uuidv4(),
      name: 'Car-4',
      bhp: 444,
      avatar_url:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png',
    },
  ];

  return { members, users, courts, todos, cars };
};
