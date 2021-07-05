# Cleanurge

[![Contributors](https://img.shields.io/github/contributors/dsckgec/cleanurge-backend.svg)](https://github.com/dsckgec/cleanurge-backend/graphs/contributors) [![Forks](https://img.shields.io/github/forks/dsckgec/cleanurge-backend.svg)](https://github.com/dsckgec/cleanurge-backend/network/members) [![Issues](https://img.shields.io/github/issues/dsckgec/cleanurge-backend.svg)](https://github.com/dsckgec/cleanurge-backend/issues) [![Pull Request](https://img.shields.io/github/issues-pr-closed-raw/dsckgec/cleanurge-backend)](https://github.com/dsckgec/cleanurge-backend/pulls)

A scalable waste management system powered by IoT.

## There are 3 repositories for the entire cleanurge system in total

1. **[cleanurge-mcu](https://github.com/DSCKGEC/cleanurge-mcu):** Containing the source code for the microcontroller
2. **[cleanurge-backend](https://github.com/DSCKGEC/cleanurge-backend):** Containing the source code for the Express backend
3. **[cleanurge-app](https://github.com/DSCKGEC/cleanurge-app):** Containing the source code for the Android App

## Contents

1. [Description](#description)
1. [Project structure](#project-structure)
1. [Getting started](#getting-started)
1. [Live demo](#live-demo)
1. [Built with](#built-with)
1. [Contributing](#contributing)
1. [Authors](#authors)
1. [License](#license)
1. [Acknowledgments](#acknowledgments)

## Description

### What's the problem?

Today, waste is a significant global issue. Increasing volumes of waste are being generated as the global population and living standards rise.
The environmental impact is significant, with massive volumes of waste generated annually with only basic or little treatment to minimise its impact. People are increasingly concerned about the production of waste and its effect, and are seeking ways to deal with the problem.

### How can this project help?

Our project serves to prevent overaccumulation of waste at public bins by maintaining a log of their waste accumulation levels. The authorities will have the feature to get live status of the various public bins and appoint garbagemen to clear off any bins on overaccumulation.

### The idea

The idea is to have wireless beacons configured at various public bins to detect and measure the level of waste accumulation at the bins. When the level at any of the bins cross a certain level, a request is triggered to a web server that is then used to send notifications to the authorities in an app as well as web based software. The mobile application also supports the feature for individuals living in a locality to report of any waste accumulation directly to the authorities.

## Project structure

**This repository hosts only the server side code**

```
/
  ├── .github/            github related files like PR templates, contribution guidelines
  ├── controllers/        controller functions for every route. controllers make calls to services
  ├── middlewares/        middlewares for various routes go here
  ├── models/             database schema / models go here
  ├── routes/             routes or endpoint definitions go here, routes make calls to controllers
  ├── services/           files that process and query the database go here
  ├── utils/              utility or helper functions go here
  ├── .env                environment variables used in the project
  ├── .gitignore          stores files and directories to be ignored in commits
  ├── .prettierrc         configuration for prettier to help maintain a common code formatting
  ├── app.js              entry point for our project
  ├── LICENSE             the open source license
  ├── code_of_conduct.md  code of conduct for open source contribution
  ├── contributing.md     contribution guidelines
  ├── package.json        metadata of the project
  ├── package-lock.json   stores version of every package used in the project
  └── readme.md           details and instructions about the project go here
```

## Getting started

Everyone is welcomed to contribute to our project. Mentioning in bold, you do not need to know the tech stack and tools beforehand to be a part of our project. This is a learn-and-build projects where the contributors build alongside learning the various concepts and technologies involved.
Below are a few prerequisites and installation guides:

### Prerequisites

#### Softwares needed

-   A web browser
-   Node and npm

#### Knowledge needed

The best way to learn the following is to google each and everything!

-   Very basic understanding of git and github:

    -   What are repositories (local - remote - upstream), issues, pull requests
    -   How to clone a repository, how to fork a repository, how to set upstreams
    -   Adding, committing, pulling, pushing changes to remote repositories

-   For backend:

    -   [Reading this blog on overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
    -   [Reading this blog on APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
    -   [Reading this blog on npm](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
    -   Creating a free MongoDB cluster and fetching the connection URI. (you may read my gist on how to - [here](https://gist.github.com/singhayushh/426f10353a8051593828e92c139ebdbc))

-   For frontend:
    -   Understanding the differences between HTML and EJS.
    -   Using variables, if else, loops in EJS.
    -   CSS !

### Installing

A step by step series of instructions that tell you how to get the project running locally is given below. Google every issue you face following the below instructions or just ask us in our Discord / WhatsApp group.

-   Fork and clone the repository followed by opening the project in your text editor (with a terminal)
-   create a `.env` file, copy the contents from `.env.example` file to `.env`. Replace the values of `PORT`, `MONGO_URI` and `JWT_SECRET` with your own values.
-   In the terminal, make sure you are in the project directory.
-   run the command `npm install` or `npm i` - (you should learn when and why to use this command!)
-   run the command `npm start` - you will then receive a message mentioning of an address where the project is live
-   open the browser and browse to the above address!

## Live demo

The server is live here:

https://cleanurge.herokuapp.com/

## Built with

-   [Express](https://expressjs.com/) - A NodeJS Framework
-   [MongoDB](https://www.mongodb.com/) - as the database

## Contributing

Please read [contributing.md](contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

<a href="https://github.com/DSCKGEC/cleanurge-backend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DSCKGEC/cleanurge-backend" />
</a>

## License

This project is licensed under the GNU Public License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

[contributors-img](https://contrib.rocks)
