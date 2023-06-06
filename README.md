# Netflix React App


## Featured area

![featured-movie](https://user-images.githubusercontent.com/95390248/168711639-6b0da668-590d-4640-a13f-539d3ceddba5.png)



## List of movies and series

![movie-row](https://user-images.githubusercontent.com/95390248/168711879-187af28a-a1d2-473e-a479-73e51d15fac4.png)

## Movie trailer


![movie-trailer](https://user-images.githubusercontent.com/95390248/169439142-2c51fa85-9804-4e4f-bda3-aac952030fce.png)



## :pen: API - JSON - Test API

> **API for movie and series database**

-  [x] **https://www.themoviedb.org** 

> **Handle JSON**

- [x] **http://jsonviewer.stack.hu** 

> *Requisition test**

- [x] **http://resttesttest.com** 

## :tv: Project

This project is a simple reproduction of **NetFlix** for studying React, it does not contain all the features.

For the featured area and list of movies and series, the **themoviedb** API was used.

### :paperclip: **1. Creating and add icons**

```bash
$ npx create-react-app netflixclone
$ cd netflixclone
$ npm install @material-ui/core @material-ui/icons
$ npm start
```

### :paperclip: **2. Structure of files and folders**

```bash
$ src
	$ components
		FeaturedMovie.css
		FeaturedMovie.js
		Header.css
		Header.js
		MovieRow.css
		MovieRow.js
	App.css
	App.js
	index.css
	index.js
	Tmdb.js
```

### :computer: App.js

The main screen has been divided into **03 components**: 

* Header - **<Header />**
* Feature - **<FeaturedMovie />**
* List of movies and series - **<MovieRow />**



### :paperclip: ​Tmdb.js

This file contains the communication with the **API** of *themoviedb.org* that returns a catalog where we find information about movies and series.



### :paperclip: Header.js

This component only serves to compose the main screen. Contains only the **logo** and **icon** of the logged in user, it has no events.



### :paperclip: FeaturedMovie.js

This component is responsible for showing a featured movie or series.

Reporting: *score*, *release year*, *total seasons* and *a brief description*.

Every time the page is loaded the feature changes.



### :paperclip: **MovieRow.js**

This component is responsible for displaying lists of:

* Originais Netflix: ***originals***
* Recomendados para você: ***trending***
* Em alta: ***top_rated***
* Ação: ***action***
* Comédia: ***comedy***
* Terror: ***horror***
* Romance: ***romance***
* Documentários: ***documentary***

This component also show the trailer of the film. Just click on image one time, and trailer appears
in one player with controls. For turn off trailer, just click on image again and it be closed.


It has the scroll right and left.

## 📱 Responsivity

This application is fully responsive.

## :globe_with_meridians: Hosting 

Use the following address to see the hosted project and test its features: https://netflix-app-dumont19.vercel.app



