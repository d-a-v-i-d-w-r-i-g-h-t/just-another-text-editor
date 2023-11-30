# Just Another Text Editor

## Description 

Your GitHub profile is an extremely important aspect of your public identity as a developer. A well-crafted one allows you to show off your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README.md file.

The quality of a README often differentiates a good project from a bad project. A good one takes advantage of the opportunity to explain and showcase what your application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

There's no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all or to create a very anemic one. This guide outlines a few best practices. As you progress in your career, you will develop your own ideas about what makes a good README.

At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? 

My project is deployed on Heroku at this [link](https://floating-eyrie-53578-efda4f2185f3.herokuapp.com/).


## Installation

To install locally for development purposes, copy the files and folders from the repo into the desired directory.

From the root folder, install dependencies with the command
```
npm install
```

Alternatively, the application can be run from its deployed location, [here](https://floating-eyrie-53578-efda4f2185f3.herokuapp.com/).

## Usage 

If installed locally for development purposes, the webpack can be built and the application started with a single script command,
```
npm run start
```
Then, the user can simply navigate to ```http://localhost:3000/``` and use the app.

Text can be input on any line. The text is saved to both Local storage and IndexedDB whenever the editor window loses focus. In this way it does not require an internet connection after its first load.

Additionally, the application be installed as a *Progressive Web Application* by clicking on the **Install!** button. See a screenshot of the application below.

![JATE Screenshot](assets/images/jate.png)


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.


## License

Please refer to the LICENSE in the repo.

---
