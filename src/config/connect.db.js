/* The code snippet is importing the dorenv package and the Sequelize class from the sequelize
package in a JavaScript file. */
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config({ path: '.env' });

/* The code snippet is creating a new instance of the Sequelize class from the sequelize package.
It is passing the database name, database user, database password, host, and dialect as
configuration options to the Sequelize constructor. This configuration is used to establish a 
connecttion to a database using Sequelize ORM in a Node.js application. */
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

/* The function testConnection checks the connection to a database using Sequelize in JavaScript.
*/
async function testConnection() {
    try {
        await sequelize
        .authenticate()
        .then(() => {
            console.log("DATABASE CONNECTED...");
        })
        .catch((err) => {
            console.log(err);
        });
    } catch (error) {
        //check database
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();
export default sequelize;