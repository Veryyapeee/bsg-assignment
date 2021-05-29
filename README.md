# Better Software Group Recruitment task

This project was made due to the BSG recruitment task for the position of Junior Front End Developer.

### Table of Contents
* [Technologies](#technologies)
* [Requirements](#requirements)
* [Setup](#setup)
* [Cross platform](#cross-platform)

### Technologies
-----------------
Project is created with:
* TypeScript
* React
* Redux with Thunk middleware
* SCSS Modules
* React HLS Player
* Ionic
* Capacitor

### IDE
- Visual Studio Code with extensions

### Requirements
-----------------
To be able to run our project locally, you need to have installed **yarn package manager**
If you do not know if you have it installed on your computer and you still want to run our project follow these steps:

#### Windows command prompt/Linux bash

##### Run *npm -v*
* *If you received a number like 'x.x.x' you already have installed* **npm package manager** *on your computer and you can follow the next part, which is installing **yarn**
* *Otherwise, you will have to install it, the best way to do it is installing it globaly by running the command **npm install npm@latest -g***
* *After that you can run again the command from the first line just to confirm that you have succesfully installed required* **package manager**
##### Install yarn
* *To install yarn* **package manager (faster version of npm)** *run the commnad **npm install --global yarn***
* *confirm yarn install by typing command **yarn --version***

### Setup
-----------------
#### To run the project locally follow these steps:
* *Clone this repository*
* *Open repository in your code editor*
* *Run command **yarn*** to install all dependencies
* *Run command **yarn dev*** to run local server on localhost:3000
* *Run command **yarn build*** to build the project

### Cross platform
-----------------
To be able to build the Android/IOS project, you need to have installed **Ionic CLI**. To do that run command **npm install -g @ionic/cli**.
Then build ReactApp using command **yarn build**

#### Android
* Run command **ionic capacitor add android** to crate android build
* Run command **npx cap open android** to open project in Android Studio

#### IOS
* Run command **ionic capacitor add ios** to crate ios build
* Run command **npx cap open ios** to open project in Xcode

After building cross platform project, you have to again run **yarn** to install dependencies or again clone repo to be able to run React App on localhost.
