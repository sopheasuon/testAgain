const chalk = require('chalk');
const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/users';

axios
.get(url)
.then(response => console.log(chalk.bgGreen.red(response.data[0].email)));