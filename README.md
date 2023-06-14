# Almabetter_BookMyShow_App
This is a backend capston project is created with [MongoDB, Expressjs, Reactjs, Nodejs] .This Bookmyshow website have vary simple UI and this website is very easy to use ( userfriendly ) and it also work in any devices ( Responsiveness ) .

## Deployment Links

click on the line to see the project 

Frontend on netlify.com
 - https://almabetter-book-my-show-frontend-app-dhanush.vercel.app

Backend on cyclic.sh

 - https://almabetter-book-my-show-app-dhanush.vercel.app/api/booking

 ## API Documentation

#### Base URL

-https://almabetter-book-my-show-app-dhanush.vercel.app

#### Booking
get  the booking

```http
  GET /booking
```
Returns a list of all bookings stored in the database in JSON format.

```http
  post /booking
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `movie name ` | `string` | *Required*. your selected movie |
| `Schedule ` | `time` | *Required*. your selected time|
| `Seats ` | `number` | *Required*. no of seats you have seleacted|

Returns the newly created booking in JSON format


## Installation

If you want to work on this project clone this repo 
```bash
 git clone https://github.com/RithikDhanush/Almabetter_BookMyShow_App.git
```

open this project on you local IDE  and in the terminal do this commands one by one 
 - for Frotend
```bash
cd frontend

npm install

npm start
```
 - for backend 
 ```bash
cd backend

npm install

npm start 
 ```
 This will start you frontend part in http://localhost:3000 and backend part running in http://localhost:8080 

    
## How to use

Click on this link for using the website
 - https://bookmyshow-app-dhanush.netlify.app/
 1) First select movie you like 
 2) select time schedule 
 3) select seats
 4) click on Book show button the confirmation pop window will open close this and see right side on the screen the previous movie ticket will show 
 


## Tech Stack

**Frontend:** React js, 

**backend:** Node js, Express js , 

**database:** Mongodb

This is a MERN stack project  


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Note : your mongodb clustur connect key 

`API_KEY`

 MONGOURI : mongodb+srv://user_name:<password>@cluster0.adfedxd.mongodb.net/<batabase_name>?retryWrites=true&w=majorit

Support
For support, 
## Email
- dhanushrithik5109@gmail.com
  
## Linkedin
