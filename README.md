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
## Docker

Yuu can also to install and deploy in a Docker container.

```sh
$ docker-compose build
$ docker-compose up

```
http://sigmatesttask-env.eba-v3txmsem.us-east-1.elasticbeanstalk.com/api/posts

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
### Example closed endpoint, only after authorization
- #### Get list of users
##### Request

```sh
GET /users
```
http://localhost/api/users 

### Example open endpoint
- #### Get list of posts
##### Request

```sh
GET /posts
```
http://localhost/api/posts 

## Documentation

http://sigmaproject-env.eba-r9efiqtd.us-east-1.elasticbeanstalk.com/docs/


