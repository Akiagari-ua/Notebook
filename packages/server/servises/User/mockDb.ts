import fs from 'fs/promises';

// export const DB = [
//   {
//     id: '1',
//     email: 'qwe@gmail.com',
//     password: '123',
//     firstName: 'Nikita',
//     lastName: 'Chudakov',
//   },
//   {
//     id: '2',
//     email: 'xxxx@gmail.com',
//     password: '123',
//     firstName: 'Nikita1',
//     lastName: 'Chudakov1',
//   },
//   {
//     id: '3',
//     email: 'qwasde@gmail.com',
//     password: '123',
//     firstName: 'Nikita2',
//     lastName: 'Chudakov2',
//   },
//   {
//     id: '4',
//     email: 'qw123e@gmail.com',
//     password: '123',
//     firstName: 'Niki',
//     lastName: 'Chudak',
//   },
// ];

export const DB = {
  create() {
    console.log('!!!!!!!!');
    fs.writeFile('./user.json', `${Math.random()}`);
  },
};
