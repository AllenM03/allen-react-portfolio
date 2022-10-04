// store project details in an array of objects - this will be passed on to the portfolio (parent) component that will then pass it to the project (child) component
// import the images that will be used in the portfolio component
import img1 from "./img/1-Weather-APP.jpg";
import img2 from "./img/2-officeTaskPlanner.png";
import img3 from "./img/KillerKombo.jpg";
import img4 from "./img/4-start-page.jpg";
import img5 from "./img/5-Budget-Track-u-later.png";
import img6 from "./img/6-fanfood-app.png";
import img7 from "./img/3-notemaker1000.png";
import img8 from "./img/Greenhive-app.png";

const projects = [
    {
        id: 1,
        name: "Daily Weather Forecast Dashboard",
        github: "https://github.com/AllenM03/Daily-Weather-Forecast-Dashboard",
        site: "https://allenm03.github.io/Daily-Weather-Forecast-Dashboard/",
        description: `This project is a weather dashboard app with search functionality to find 
        current weather conditions and forecasted weather for multiple cities. 
        It uses the OpenWeather API to retrieve data for the cities, AJAX to hook into the API 
        to retrieve the data in JSON format, dynamically updated HTML and CSS powered by 
        jQuery, and displays a search history which the user can click to access past 
        cities searched via local storage.

        This weather dashboard shows the weather conditions in real time along with a 
        five day forecast when you enter the city in the search bar.
        
        A few different technologies were used in creating this application such 
        as, HTML, CSS, and JavaScript powered by third-party API's such as 
        Moment.js, Bootstrap, OpenWeather's GeoCoding and One Call API's.`,
        imgSrc: img1,
    },
    {
        id: 2,
        name: "Office Task Planner",
        github: "https://github.com/AllenM03/office-task-planner",
        site: "https://allenm03.github.io/office-task-planner/",
        description: `Office Task Planner is a webpage that lists every hour of the day (12am-11:59pm) 
        as a new row. Inside of each row, you can write down some task that you wish to accomplish 
        within that given hour.`,
        imgSrc: img2,
    },
    {
        id: 3,
        name: "KillerKombo Video Game Finder",
        github: "https://github.com/RenBryant/killerkombo",
        site: "https://killer-kombo.herokuapp.com/",
        description: `This app allows users to search for games they like and also new games on all 
         available platforms. Contributions from classmates helped make this application a successful team 
         building project.
        
        Front-end, React, JSX, Tailwind CSS, and apollo client.
        
        Back-end, Mongoose, JWT, bcrypt, apollo-server-express, axios, dotenv, express, and graphql.
         
        Npm concurrently package used so the front-end and the back-end to be run at the same time.
        
        RAWG api:
        Api from rawg.io to get data for over 700,000 games.
            
         `,
        imgSrc: img3,
    },
    {
        id: 4,
        name: "Timed Developer Quizzer",
        github: "https://github.com/AllenM03/DeveloperQuizzer",
        site: "https://allenm03.github.io/DeveloperQuizzer/",
        description: `This simple test was created to help developers keep their fundamentals sharp and for aspiring 
        developers a introduction into the world of coding. First, you are presented with four multiple choices answers 
        and a randomized set of questions. Next, when the user selects an answer the program will prompt the user if the 
        question is correct or not, and if correct, the app will proceed to the next question. If an incorrect answer is 
        selected, the program will deduct 10 seconds from the current time. Then after the timer reaches zero or after all 
        questions are answered, the user can add their initials and to a final score page. Finally, the program will go back 
        to the home page and can attempt many more times!
        This application uses javaScript, CSS, HTML5.`,
        imgSrc: img4,
    },
    {
        id: 5,
        name: "Budget Track-U-Lator",
        github: "https://github.com/AllenM03/Budget-Track-u-Later-PWA",
        site: "https://sunny-blossom-1442.herokuapp.com/",
        description: `A simple web application using a service worker, db to cache files, (PWA), 
        that tracks budget using addition and subtraction and a name for transactions.`,
        imgSrc: img5,
    },
    {
        id: 6,
        name: "Fan Food, the ultimate fan experience",
        github: "https://github.com/masontmorris/fanfood",
        site: "https://masontmorris.github.io/fanfood/",
        description: `Fan Food allows users to discover bars close to the 
        venues of live events using the TicketMaster and Foursquare APIs. This application 
        searches for live events such as concerts and sporting events along with restaurants
        and bars within a 1000 yard radius of the live event.
        
        A few different technologies were used in creating this application such 
        as,HTML5, CSS3, Bulma, Javascript, JQuery, JSON, and Fetch API.`,
        imgSrc: img6,
    },
    {
        id: 7,
        name: "Note Maker 1000",
        github: "https://github.com/AllenM03/NoteMaker1000",
        site: "https://notemaker1000.herokuapp.com/",
        description: `Note generator 1000 is a web application that can be used to write and save notes. 
        This uses an Express.js back end and will save and retrieve data from a JSON file.
        In this application, the user can create new notes, view the currently saved notes, and delete stored notes.
        This application will use an Express.js back end and will save and retrieve note data from a JSON file.`,
        imgSrc: img7,
    },
    {
        id: 8,
        name: "Greenhive conservation app",
        github: "https://github.com/william-horn/greenhive",
        site: "https://greenhive-com.herokuapp.com/",
        description: `This is a Conservation app where people can join communities related to different resources. 
        All users can post or comment about nature conservation and environment protection. On the home page the user 
        can sign up or log in and create a profile page to be a part of the Greenhive website. In this website you can 
        choose which areas of concerns related like Air pollution, Ocean, Wildlife and Forest to join, comment, and post.
        
        HTML, CSS3, Bulma, Javascript, JQuery, JSON, Fetch API, Node.js, Express.js, MySQL/ Sequelize, Handlebars, 
        Express Session, Bcrypt, npm axios.`,
        imgSrc: img8,
    },
];

export default projects;