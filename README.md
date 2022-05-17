# Netflix React App

_By Bonieky Lacerda_

> **https://www.youtube.com/watch?v=tBweoUiMsDg**



## Featured area

![featured-movie](https://user-images.githubusercontent.com/95390248/168711639-6b0da668-590d-4640-a13f-539d3ceddba5.png)



## List of movies and series

![image1](Movie-row.png)



## :pen: API - JSON - Test API

> **API for movie and series database**

-  [x] **https://www.themoviedb.org** 

> **Handle JSON**

- [x] **http://jsonviewer.stack.hu** 

> *Requisition test**

- [x] **http://resttesttest.com** 

> **Icons from Material-UI**

- [x] **https://material-ui.com/pt/components/material-icons/**



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

