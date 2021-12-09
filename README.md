# REST API
## _Test task from Sigma_
#### Create REST API and implement CRUD for menegement users & posts

## Tech

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [MongoDB, Mongoose, MongoDB Atlas] - for creating and save database
- [Joi] - for validators
- [JWT] - create jsonwebtoken
- [Swagger] - for documentation
- [AWS - Elastic Beanstalk] - for aplloy project
- [Docker]

## Installation
Make a clone of this repository

You need [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd backend
npm i
node app
```
## _The REST API to the example app is described below_.

### Authorization
###### Request

```sh
GET /auth
```
###### Body

```sh
{
    "email": "example@gmail.com",
    "password": "example$"
}
```
###### Response

```sh
{
    "user": {
        "_id": "......",
        "email": "user@email",
        "name": "username",
        "age": number,
        "createdAt": "date",
        "updatedAt": "date",
        "__v": 0
    },
    "access_token": ".......",
    "refresh_token": "......."
}
```
### Сlosed endpoints, only after authorization -
- #### Get list of Users
##### Request

```sh
GET /users
```

