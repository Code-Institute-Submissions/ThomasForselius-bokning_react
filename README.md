[] [What is it](#what-is-bokning)
[] [User Stories](#user-stories)
[] [UI & UX](#UI-&-UX)
[] [Features and pages](#features-and-pages)
[] [Showing Booking from db](#showing-bokoing-from-database)
[] [Adding Booking to db](#adding-booking)
[] [Updating Booking in db](#update-booking)
[] [Deleting Booking from db](#remove-booking)
[] [Testing](#testing)
[] [Deployment](#deployment)
[] [Tech](#technologies) 
[] [Support](#support)


# What is Bokning?

The word *Bokning* is Swedish for 'booking'. It's sole purpose is a booking system to book an apartment by date, using ReactJS on the front end, connecting to a Django Restful API on the backend.
This project is the front end part of a full stack project for my 5th and last project in my Code Institute Full Stack Program. 

# User stories

## Navigation & Authentication
- Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages
- Routing: As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
- Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users
- Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
- Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
- Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
- Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up

## Adding, deleting and editing Bookings
- Create booking: As a logged in user I can book the apartment so others can see that it is booked
- Delete booking: As a logged in user I can delete a booking so others can see that it is vacant
- Edit booking: As a logged in user I can edit the booking if I need to change the date or description

## The Bookings List Page
- View bookings: As a user I can view all the current bookings of the apartment, ordered by date of booking, increasing so that I can se what is available
- As a user, I can search for a booking y choosing a specific date with a date picker, so that I can quickly find the date I am looking for
- As a user, I can edit/delete a booking by using the drop down menu on my bookings. 

## The DM Page 
- Create a direct message: As a logged in user I can send direct messages to the other users
- Delete a direct message: As a logged in user I can delete direct messages to other users

## The Profile Page
- Profile page: As a user I can view other users profiles so that I can see their posts and learn more about them
- Edit profile: As a logged in user I can edit my profile so that I can change my profile picture and bio
- Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure


# UI & UX

The design has followed basic simple principles regarding conrast, font sizes, color contrast and fonts to keep the page simple but appealing. 

The color of the background is chosen to give a warm and fuzzy feel.
On both the login and register page there are a small image to the right (on larger than mobile devices) to give a mental connection to what it is the page is about. 

Sign in- page: A rendered image of a bed in a large room with the sun shining in through the window
Sign up- page: A picture of the sky scrapers stretching up into the clear sky

# Features and Pages

## Sign Up
Sign up page for the booking

## Sign In
Sign in page for the booking

## Book 
This is where you book a specific date

## Calendar
Shows a list of all the current bookings
Allows you to edit/delete your bookings

## DM
Shows a list of messages to other users

## Profile
Allows you to view and change your profile information including username and password

## Sign Out
Signs you out from the webpage


# Adding Booking
Adds a booking to the database via the backend Restful API

# Update Booking
Updates a booking in the database via the backend Restful API

# Remove Booking
Removes a booking from the database via the backend Restful API

# Testing

Manual testing has been done with the following steps: 

- Sign up using too short password
- Sign up using no wrong password requirements
- Sign in using wrong credentials

- Book a date without choosing date in date picker

- Delete a booking if you are the user
    - Login as different users and check if the drop down changes based on ownership
- Edit a booking

- Change username
- Change password

# Deployment



# Tech

- HTML
- CSS, React-Bootstrap
- Javascript / React
- VSCode
- Heroku
- GitHub
- Google chrome

# Support

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!