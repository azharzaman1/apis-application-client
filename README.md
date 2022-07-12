# API Archive Application - [Frontend]

**Backend Link**: [https://github.com/azharzaman1/apis-application-server.git](https://github.com/azharzaman1/apis-application-server.git)

#### Technologies used

**Frontend**

- ReactJs
- Redux - (used intentionally - Context was enough)
- Tailwind CSS
- Material UI(Mui)
- CSS3

**Backend**

- NodeJs
- ExpressJs
- MongoDB
- mongoose

**HTTP(S) - Async**

- React Query
- Axios

## Application Manual

This is a must read manual for this Application.

### Project setup

To setup this application on locally on your machine, create an empty directory inside your machine and navigate to it.\
Now its time to clone frontend and backend to your machine with following commands;

Clone Frontend:\
`git clone https://github.com/azharzaman1/apis-application-client.git client`

Similarly, clone Backend:\
`git clone https://github.com/azharzaman1/apis-application-server.git server`

#### Setup Frontend

Navigate to cloned frontend directory by running;\
`cd client`

And install dependencies,\
`npm i` or `npm install`

And thats it for the frontend, for now.

#### Setup Backend

First of all, navigate 1-step back from Frontend directory;\
`cd ..`

And, navigate to cloned backend directory by running\
`cd server`

And install dependencies;\
`npm i` or `npm install`

Well, thats not it for the backend. Here are few things to be noted carefully.

**NOTE:** If you are running your MongoDB on local machine with default connection URI, which is;\
`mongodb://127.0.0.1:27017`

Then you are good to go.

**Otherwise**: Please update MongoDB instance **URI** inside `.env` file at root of `server` directory as;\
`LOCAL_MONGO_URL=CUSTOM_MONGO_CONNECTION_URI`

**In case**: You are going to test application with cloud MongoDB database, like atlas, again update `LOCAL_MONGO_URL=CLOUD_MONGO_CONNECTION_URI`

Please start server by running;\
`npm run dev`

Now server must be running at [localhost:3500](http://localhost:3500)

If we did everything fine, we must be able to see `Hurrah! Server Up and Running` message by visiting [localhost:3500](http://localhost:3500).

##### Copy Data From API Endpoint to MongoDB

This is step must be followed because I have added few extra fields while saving data to MongoDB to make application even awesome.

I have created an endpoint, which automatically fetches data from API endpoint and stores it to MongoDB.\
Simply make a **`GET`** call to following endpoint through any client like **Postman** or **Thunder Client** (VSCode extension).

`localhost:3500/api/v1/apis/sync`

If you do not have any of these clients, please skip this step for now. I have put little button on the Fronted, which will do this for you.

#### Run Frontend

After making sure backend is running at `port=3500`, please start frontend, by navigating to frontend root directory and running;\
`npm run dev` or `npm start`

Frontend should be up and running at;\
`localhost:3000`

##### Copy Data From API Endpoint to MongoDB [if haven't already]

Please store API data to MongoDB by hitting **`Sync Data`** Button, and you should get **`Data fetched and synced in MongoDB`** message back with **`201`** status code.

If that is the case, thats it for the setup, and if any error occurs please let me know.

### ALL YOURS

Thanks and Regards\
**Azhar Zaman**
