# Cosmologue
We created this app as a way for people to stay in touch with nature and the cosmic forces that are constantly at work in our lives. Cosmologue allows users to view a feed of NASA news, a photo of the day + description, upcoming cosmic events (both as a list and in calendar form), and personalized astrological information. A user can create a profile where they choose a user name, a password, and provide their astrological sign. The user can then log in to their profile page, which will allow them to view information that is updated on a daily basis about their horoscope.

## Home
![Home Page](/client/src/assets/images/home.png?raw=true)
The home/landing page features the pic of the day (as chosen by NASA), the title of the picture, and a short description about the image. The home page also features a scrollable list of the twenty most recent news articles provided by NASA, as well as the time the article was posted. Clicking on the title of the article will direct the user to the actual article itself.

## Events
![Events Page](/client/src/assets/images/events.png?raw=true)
The events page displays a calendar of upcoming significant cosmic events. Users can choose which month they which to view events for, whether it be a past month or a future month. There is also a scrollable list of these events on the right side of the page, which features the date the event will take place. Clicking on the title of the event will direct the user to a page from in-the-sky.org, which will provide more detailed information about said event.

## Profile
![Profile Page](/client/src/assets/images/profile.png?raw=true)
The profile page features horoscope information for the user. At the top of the page, text appears welcoming the specific user by user name (users can only access this page once they have made an account and logged in). The left side of the page features an image of the current year’s astrological calendar, while the right side displays a short horoscope, lucky color, compatibility with other signs, mood, lucky number, and lucky time.

## Signup/Login
![Signup Page](/client/src/assets/images/signup.png?raw=true)
![Login Page](/client/src/assets/images/login.png?raw=true)
A user can use this page to sign up for an account, and then log in to that account. Users provide a username, password, and their astrological sign, then they press the “sign up” button. An alert will appear welcoming the user to Cosmologue. After they have signed up, the user enters their username and password into the log in section and presses “log in.” Once they have successfully logged in, an alert will appear that says “Hello [username].” At this point, the user is successfully authenticated and they may navigate to the profile page.

## Links
[Deployed Application](https://cosmologue.herokuapp.com)

[Github Repository](https://github.com/kelstho/cosmologue)