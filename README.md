# front-end-angularjs-automate-tasks

I replaced the Java application shipped with the exercise with a NodeJS
app. The app is in inside the _node\_src_ folder.

The service can be reached using the original URL:

    http://localhost:8090/rest/people

As usual, it will return an array of JSON objects. To run the app, you will
need to install NodeJS, either with a binary release from:

    https://nodejs.org/en/download/

Or via the package manager of your OS. The instructions for each platform
can be found here:

    https://nodejs.org/en/download/package-manager/

After that, you need to install all the dependencies and the project itself. To do this,
change into the _node\_src_ directory and run the following command:

    npm install

Then, simply call...

    node app.js

...and the server app will be running.

The frontend code developed for the exercise is located inside the _public_
directory, within _node\_src_. If the server app is running, the frontend
can be reached at:

    http://localhost:8090/index.html

## Results

The data from the server is presented with a set of card-like sections,
one for each person. In Full HD, there will be three cards per row, while
in HD it will be 2 cards, and WVGA, one card per row. The application is
responsive. This can be verified by changing the screen size at will and
observing that the card's width will be adjusted accordingly.
Enclosed in this project, lies a small Java application that expose a
REST service that returns a list of People.

As requested, no layout frameworks were used. The app contains only HTML5
standard directives and pure CSS. However, I took the liberty to use a simple CSS Framework
to do the heavy-lifting. The framework is called W3CSS and can be found here:

    http://www.w3schools.com/w3css/default.asp

There is an additional file, called _w3-people.css_ which contains the
HD screen definitions that makes the app responsive.
