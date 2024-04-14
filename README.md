# The Game Vault

## _- By Gaurav Khurana_

## Overview

The Game Vault is a web application for online purchase and rental of video games for Playstation & Xbox One console.

- Web Application for Mobile & Desktop
- Purpose - Online Rental & Purchase of console video games for Playstation & Xbox One

## Problem

I love games which have a story to it. For me, the problem has been that if I purchase a game and I am done with my game play & story mode, I don't know what to do with so either I have to sell it online or let it sit in my shelf. I always wished if I could rent out the game for 15days or 30days that would enough time to enjoy the game & return back to the store.
Hence, "The Game Vault" platform which lets you decide if you want to rent the game or purchase it.

## User Profile

"The Targeted Audience" for this application will be gamers who play video games on Xbox One & Playstation console.

## Features

- User will be able to navigate to the xbox & playstation games area, where they can click & select any game to see their details.
- After going through the details & photo gallery of the game, they would have an option to rent out the game for 2 or 4 weeks or they can even purchase the game.
- User will be redirect to checkout page with product in cart, where they fill out a contact details form, shipping details, payment details.
- Once order is succesfully placed, they will be redirected to order confirmation page

## Implementation

## Tech Stack

- React
- Next.js
- MySQL
- Express
- Heroku
- Netlify
- Client libraries:

  - react
  - react-router
  - axios
  - sass
  - bootstrap-react
  - material-ui-react

- Server libraries:
  - node
  - knex
  - express
  - uniqid
  - cors
  - dotenv

## APIs

No external API's will be used for "The Game Vault"

## Site Map

- Landing page
- Xbox Product Page -> Xbox Product Details Page
- Playstation Product Page -> Xbox Product Details Page
- Cart
- Checkout Page
- Shipping details
- Billing Page
- Order confirmation

## Mockups

### Home Page

![Landing Page](./app/assets/images/TGV%20Landing%20Page.png)

### Menu/Navigation Page

![Menu/Navigation Page](./app/assets/images/TGV%20Menu:Navigation%20Page.png)

### Product Page

![Product Page](./app/assets/images/TGV%20Product%20Page.png)

### Product Details Page

![Product Details Page](./app/assets/images/TGV%20Product%20Details%20Page.png)

## Data

Data would be in form of single table comprising of all games with details for Xbox & Playstation games.

## Endpoints

**GET /xbox**

- get all xbox games

Sample Response:

```
[
    {
       "id": 1,
        "title": "Hogwarts Legacy",
        "release_date": "February 10, 2023",
        "description": "Hogwarts Legacy is an upcoming action role-playing video game set in the Harry Potter universe, developed by Portkey Games and published by Warner Bros. Interactive Entertainment. The game is set in the late 1800s and allows players to attend Hogwarts School of Witchcraft and Wizardry as a student, explore the wizarding world, learn spells, brew potions, and battle magical creatures.",
        "price": "$59.99",
        "price_15days": "$20.99",
        "price_30days": "$35.99",
        "platform": "Xbox One  Xbox Series X | S",
        "genre": "Action Role-Playing Open world",
        "developer": "Portkey Games",
        "players": "Single player",
        "online_play": "Single player offline",
        "ratings": "4.5 / 5",
        "image1": "http://localhost:8080/static-files/images/HogwartsLegacy/Hogwarts1.webp",
        "image2": "http://localhost:8080/static-files/images/HogwartsLegacy/Hogwarts2.jpeg",
        "image3": "http://localhost:8080/static-files/images/HogwartsLegacy/Hogwarts3.jpeg",
        "image4": "http://localhost:8080/static-files/images/HogwartsLegacy/Hogwarts4.jpeg",
        "image5": "http://localhost:8080/static-files/images/HogwartsLegacy/Hogwarts5.jpeg",
        "created_at": "2024-04-08T03:10:21.000Z",
        "updated_at": "2024-04-08T03:10:21.000Z"
    },
    ...
]
```

**GET /xbox/:id**

- get all xbox games by id

Sample Response:

```
    {
        "id": 1,
        "title": "Hogwarts Legacy",
        "release_date": "February 10, 2023",
        "description": "Hogwarts Legacy is an upcoming action role-playing video game set in the Harry Potter universe, developed by Portkey Games and published by Warner Bros. Interactive Entertainment. The game is set in the late 1800s and allows players to attend Hogwarts School of Witchcraft and Wizardry as a student, explore the wizarding world, learn spells, brew potions, and battle magical creatures.",
        "price": "$59.99",
        "price_15days": "$20.99",
        "price_30days": "$35.99",
        "platform": "Xbox One  Xbox Series X | S",
        "genre": "Action Role-Playing Open world",
        "developer": "Portkey Games",
        "players": "Single player",
        "online_play": "Single player offline",
        "ratings": "4.5 / 5",
        "image1": "http://localhost:8080/static-files/images/HogwartsLegacy/Hogwarts1.webp",
        "image2": "http://localhost:8080/static-files/images/HogwartsLegacy/Hogwarts2.jpeg",
        "image3": "http://localhost:8080/static-files/images/HogwartsLegacy/Hogwarts3.jpeg",
        "image4": "http://localhost:8080/static-files/images/HogwartsLegacy/Hogwarts4.jpeg",
        "image5": "http://localhost:8080/static-files/images/HogwartsLegacy/Hogwarts5.jpeg",
        "created_at": "2024-04-08T03:10:21.000Z",
        "updated_at": "2024-04-08T03:10:21.000Z"
    }
```

**GET /playstation**

- get all playstation games

Sample Response:

```
[
    {
        "id": 12,
        "title": "Spider-Man: Miles Morales",
        "release_date": "November 12, 2020",
        "description": "Spider-Man: Miles Morales is an action-adventure game developed by Insomniac Games. Players assume the role of Miles Morales as he becomes the new Spider-Man and must save his home, Harlem, from various threats while learning to master his newfound abilities. The game features thrilling web-swinging mechanics, fast-paced combat, and a heartfelt story.",
        "price": "$49.99",
        "price_15days": "$17.99",
        "price_30days": "$29.99",
        "platform": "PS4 PS5",
        "genre": "Action Role-playing Open world",
        "developer": "Insomniac Games",
        "players": "Single player",
        "online_play": "Single player offline",
        "ratings": "4.6 / 5",
        "image1": "http://localhost:8080/static-files/images/SpidermanMilesMorales/spiderman1.png",
        "image2": "http://localhost:8080/static-files/images/SpidermanMilesMorales/spiderman2.jpeg",
        "image3": "http://localhost:8080/static-files/images/SpidermanMilesMorales/spiderman3.jpeg",
        "image4": "http://localhost:8080/static-files/images/SpidermanMilesMorales/spiderman4.jpeg",
        "image5": "http://localhost:8080/static-files/images/SpidermanMilesMorales/spiderman5.jpeg",
        "created_at": "2024-04-08T03:10:21.000Z",
        "updated_at": "2024-04-08T03:10:21.000Z"
    },
    ...
]
```

**GET /playstation/:id**

- get all playstation games by id

Sample Response:

```
    {
        "id": 12,
        "title": "Spider-Man: Miles Morales",
        "release_date": "November 12, 2020",
        "description": "Spider-Man: Miles Morales is an action-adventure game developed by Insomniac Games. Players assume the role of Miles Morales as he becomes the new Spider-Man and must save his home, Harlem, from various threats while learning to master his newfound abilities. The game features thrilling web-swinging mechanics, fast-paced combat, and a heartfelt story.",
        "price": "$49.99",
        "price_15days": "$17.99",
        "price_30days": "$29.99",
        "platform": "PS4 PS5",
        "genre": "Action Role-playing Open world",
        "developer": "Insomniac Games",
        "players": "Single player",
        "online_play": "Single player offline",
        "ratings": "4.6 / 5",
        "image1": "http://localhost:8080/static-files/images/SpidermanMilesMorales/spiderman1.png",
        "image2": "http://localhost:8080/static-files/images/SpidermanMilesMorales/spiderman2.jpeg",
        "image3": "http://localhost:8080/static-files/images/SpidermanMilesMorales/spiderman3.jpeg",
        "image4": "http://localhost:8080/static-files/images/SpidermanMilesMorales/spiderman4.jpeg",
        "image5": "http://localhost:8080/static-files/images/SpidermanMilesMorales/spiderman5.jpeg",
        "created_at": "2024-04-08T03:10:21.000Z",
        "updated_at": "2024-04-08T03:10:21.000Z"
    }
```

## Auth.

Auth is not included in the application.

## Roadmap

- Files & Folder structure - Client & Server side

- Install Dependencies - Client & Server side

- Create client

  - react project with routes and boilerplate pages
  - Sass - typo - variables setup on Client side

- Create server

  - express project with routing, with placeholder 200 responses

- Create migrations

- Create migrations for table containing xbox & playstation games

- Create seeds database with xbox & playstation game data

- Check database functionality using Postman

- Deploy client and server projects so all commits will be reflected in production

- Create Server routes, controllers for all get requests

- Feature: Landing Page

  - Implement landing page with animations

- Feature: Menu/Navigation Page

  - Implement Menu/Navigation page with animations

- Feature: Xbox & Playstation product page

  - Create GET /xbox - to get all xbox games
  - Create GET /playstation - to get all playstation games

- Feature: Xbox & Playstation product page

  - Create GET /xbox/:id - to get xbox game by id
  - Create GET /playstation/:id - to get playstation game by id

- Feature: Checkout Page

  - Implement Accodian with Billing details, Shipping details & payments details with form

- Feature: Order confirmation

  - Implement Order confirmation page
  - Navigate back to Homepage/Menu page

- Bug fixes

- Deploy using Heroku & Netlify

- DEMO DAY

## Nice-to-haves

```
> Auth - User Login Page
> POST methods to post all customer details to endpoint & GET method to all customer details to render on Order Confirmation Page
> Page to track order status
```
