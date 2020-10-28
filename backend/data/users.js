import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync ('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jason Clark',
    email: 'jason@example.com',
    password: bcrypt.hashSync ('123456', 10),
  },
  {
    name: 'Janet Faraday',
    email: 'janet@example.com',
    password: bcrypt.hashSync ('123456', 10),
  },
];

export default users;
