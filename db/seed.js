var Schema = require("./connection.js");
var End = Schema.End
var Framework = Schema.Framework
var Comment = Schema.Comment

End.remove({}, err => {
  if(err){
    console.log(err)
  }
});

Framework.remove({}, err => {
  if(err){
    console.log(err)
  }
});

Comment.remove({}, err => {
  if(err){
    console.log(err)
  }
});



var frontend = new End({
  type: "Front End",
  description: "Front End development engineers build elements that the user sees - the look, feel and interactivity of an application or a website. Front End frameworks are ready-made libraries or components that give the code more structure, organization or functionality.",
  icon: "https://d30y9cdsu7xlg0.cloudfront.net/png/3281-200.png",
  data: [
    {
    name: "Angular",
    number: 6000
  },
    {name: "JQuery",
    number: 4000
  },
  {
    name: "Vue",
    number: 500
  }
  ]
});
var backend = new End({
  type: "Back End",
  description: "Back End development engineers build functionality that a user does not see - the transfer of data between the user and the server and underlying database. Backend frameworks allow developers to use simpler code, allowing for faster and more collaborative development.",
  icon: "https://maxcdn.icons8.com/Share/icon/dotty/Network//server1600.png",
  data: [
    {
    name: "Django",
    number: 6000
  },
    {name: "Flask",
    number: 4000
  },
  {
    name: "Rails",
    number: 500
  }
  ]
});

 var angular_comment = new Comment({
   link: "https://github.com/wjpurdum/Matchup",
   username: "wjpurdum"
 })

var angular = new Framework({
  hook: "Superheroic JavaScript MVW Framework",
  title: "AngularJS",
  summary: "Use AngularJS to create dynamic front-end web applications. AngularJS extends the capability of your HTML elements and directly binds them to specific Angular controllers and directives that are responsible for that it's functionality. AngularJS allows you to divide your application up into seperate modules, and then and inject different dependencies into each model. Each part of your application only uses what it needs.",
  notable: "Angular JS has two-way data-binding between the model and the view. This allows developers to write less code to achieve dynamic front-end functionality. Large scale applications using AngularJS include PayPal, Jet Blue and Weather.com.",
  language: "JavaScript Framework",
  languageSite: "https://angularjs.org/",
  docs: "https://docs.angularjs.org/api",
  npm: "",
  cdn: "Insert the script tag: <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js'></script>",
  bower: "",
  github: "https://github.com/angular/angular.js",
  twitter: "https://twitter.com/angularjs_io",
  assistance: "https://docs.angularjs.org/tutorial",
  maintainers: "Google",
  image: "https://d1067y8t86k9le.cloudfront.net/wp-content/uploads/2016/04/22150642/angular_js.jpg"
});

var react = new Framework({
  hook: "A JavaScript Library for Building User Interfaces",
  title: "React",
  notable: "React uses a virtual DOM (Document Object Model). When a change is made on the client side, it's then made on the virtual DOM, and then compared with the actual DOM, so that only the elements that have changed are re-rendered. This is allows for notably better application performance. Some large scale applications using React JS include AirBnB, Facebook, Instagram and UberEats.",
  summary: "Use React to create fast web applications that you want to take to scale. React allows you to update and re-render individual components of your application without refreshing the entire page. More compartmentalized code allows for faster de-bugging.",
  language: "JavaScript Library",
  languageSite: "https://facebook.github.io/react/",
  docs: "https://facebook.github.io/react/docs/installation.html",
  npm: "In your Command Line: $ npm install -g create-react-app; $ create-react-app my-app; $ cd my-app; npm start",
  cdn: "",
  bower: "",
  github: "https://github.com/facebook/react",
  twitter: "https://twitter.com/reactjs",
  assistance: "https://facebook.github.io/react/tutorial/tutorial.html",
  maintainers: "Facebook",
  image: "https://cdn-images-1.medium.com/max/640/1*XaGxIa_JuHc8YTR5Znv6tg.png"
});

var vue = new Framework({
  title: "Vue.js",
  hook: "The Progressive JavaScript Framework",
  notable: "It prides itself on being a simplified and more streamlined framework that is more developer-friendly than existing JavaScript frameworks. Like React, it also works through a virtual DOM (Document Object Model), allowing for faster performance. VueJS is one of the most popular open source repositories on GitHub, and has had more Forks than jQuery, or AngularJS.",
  summary: "VueJS provides a framework to build dynamic user interfaces. It is a simpler and “less opinionated” framework than AngularJS, and doesn’t have two-way data binding, making it a bit easier to quickly build out smaller applications.",
  language: "JavaScript Framework",
  languageSite: "https://vuejs.org/",
  docs: "https://vuejs.org/v2/api/",
  npm: "In your Command Line: $ npm install vue",
  cdn: "Insert the script tag: <script src='https://unpkg.com/vue'></script>",
  bower: "",
  github: "https://github.com/vuejs/vue",
  twitter: "https://twitter.com/vuejs",
  assistance: "https://vuejs.org/v2/guide/",
  maintainers: "Evan You and the Vue Core Team",
  image: "https://coligo.io/vuejs-the-basics/cover-850x416.jpg"
});


var backbone = new Framework({
  hook: "Give your JS App some Backbone with Models, Views, Collections, and Events",
  title: "Backbone.js",
  notable: "Backbone is a lightweight library that requires only one dependency (Underscore.js). Backbone is structured so that the applications's data and views are completely decoupled. Backbone's Model functionality watches for changes in the data and notifies the rest of the application when a change occurs. Some large-scale applications using Backbone include Sony Entertainment, Goje, Zen Payroll and Stitcher.",
  summary: "Backbone is a considered to be a less opinionated JavaScript library that provides flexible ways to query, manipulate and  update data from the server. ",
  language: "JavaScript Library",
  languageSite: "http://backbonejs.org/",
  docs: "http://backbonejs.org/docs/backbone.html",
  npm: "Download the latest version here: 'http://backbonejs.org/'",
  cdn: "<script type = 'text/javascript' src = 'https://ajax.cdnjs.com/ajax/libs/backbone.js/0.3.3/backbone-min.js'></script>",
  bower: "",
  github: "https://github.com/jashkenas/backbone",
  twitter: "",
  assistance: "https://hackr.io/tutorials/learn-backbone-js",
  maintainers: "Jeremy Ashkenas and team",
  image: "http://www.korenlc.com/wp-content/uploads/2014/09/backbone-js.gif"
});

var rails = new Framework({
  hook: "Optimizing for programmer happiness with Convention over Configuration is how we roll",
  title: "Rails",
  notable: "A lot of scaffolding and structure comes right out of the box, which will minimize your initial set up. To optimize this framework's functionality, you must follow Rails' naming conventions so that Rails can make assumptions about your web application's behavior. Some large scale applications using Rails include Soundcloud, GitHub, Twitter and Hulu.",
  summary: "The Rails framework provides the full structure for an application's database, web service and front-end views written in the Ruby programming language. ",
  language: "Server-side web application",
  languageSite: "http://rubyonrails.org/",
  docs: "http://api.rubyonrails.org/",
  npm: "In your Command Line: $ gem install rails $ rails mynewapp $ cd myapp $ rails server",
  cdn: "",
  bower: "",
  github: "https://github.com/rails/rails",
  twitter: "https://twitter.com/rails?lang=en",
  assistance: "http://guides.rubyonrails.org/getting_started.html",
  maintainers: "Basecamp",
  image: "https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/158/Ruby_on_Rails_2-512.png",
  comments: [angular_comment]
});

var jquery = new Framework({
  hook: "The Write Less, Do More, JavaScript Library",
  title: "jQuery",
  notable: "As long as one is familiar with CSS selectors, jQuery is relatively simple to use. It’s currently the most widely used JavaScript library.",
  summary: "The jQuery library provides more streamlined manipulation of DOM elements and AJAX requests. This allows for easier styling, animation and execution of 3rd party API requests.",
  language: "JavaScript Library",
  languageSite: "https://jquery.com/",
  docs: "https://api.jquery.com/",
  npm: "In your Command Line: $ npm install jquery",
  cdn: "Choose the appropriate version to install: https://code.jquery.com/",
  bower: "bower install jquery",
  github: "https://github.com/jquery/jquery",
  twitter: "https://twitter.com/jquery?lang=en",
  assistance: "https://learn.jquery.com/",
  maintainers: "the jQuery Foundation",
  image: "http://www.logoeps.com/wp-content/uploads/2011/08/jquery-logo.jpg"
})




var django = new Framework({
  hook: "The Web framework for perfectionists with deadlines",
  title: "Django",
  notable: "Because Django is great for scaling applications up, it's frequently used for large projects. Some large scale applications that use Django include Mozilla, Instagram and the Public Broadcast Corporation. ",
  summary: "Django is a framework written in Python. It has a learner-friendly syntax, and simplifies the creation and manipulation of data.",
  language: "Python Web Framework",
  languageSite: "https://www.djangoproject.com/start/overview/",
  docs: "https://docs.djangoproject.com/en/1.11/",
  npm: "After Python installation, run in your Command Line: $ django-admin startproject mysite",
  cdn: "",
  bower: "",
  github: "https://github.com/django/django",
  twitter: "https://twitter.com/djangoproject",
  assistance: "https://docs.djangoproject.com/en/1.11/intro/tutorial01/",
  maintainers: "Django Software Foundation",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1200px-Django_logo.svg.png"
})

var express = new Framework({
  hook: "The fast, minimalist web framework for Node.js",
  title: "ExpressJS",
  notable: "Express on its own is notably minimal, allowing the developer to have more decision over the app's architecture. Many features that you would have access to out-of-the-box in more robust frameworks such as Rails are offered as plugins in Express. This allows you to include only the elements that your application needs. Some large scale applications using ExpressJS include IBM, Accenture and Uber.",
  summary: "Express is the de-factor web framework for NodeJS, which is a run-time (server-side) environment written in JavaScript. Express allows you to write all of your server-side code in succinct JavaScript. The option to have both your front-end and back-end written entirely in JavaScript is becoming increasingly popular.",
  language: "JavaScript Web Framework for NodeJS",
  languageSite: "https://expressjs.com/",
  docs: "https://expressjs.com/en/4x/api.html",
  npm: "In your Command Line: $ npm init $ npm install express --save",
  cdn: "",
  bower: "",
  github: "https://github.com/expressjs/expressjs.com?_ga=2.137347888.1424474673.1496688420-967821973.1495128838",
  twitter: "https://twitter.com/expressjs?lang=en",
  assistance: "https://expressjs.com/en/starter/hello-world.html",
  maintainers: "Node.js Foundation",
  image: "https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
})

var flask = new Framework({
  hook: "A microframework for Python. Web development, one drop at a time",
  title: "Flask",
  notable: "According to GitHub statistics, Flask is the most popular Python web framework. It requires very little boilerplate code to get your application started so it's a great framework for new developers. ",
  summary: "Flask is a web framework written in Python. It’s considered a ‘micro-framework’ because it doesn’t require any libraries or dependencies to work. Instead, any additional functionalities, such as form-validation or database abstraction, are brought in as native Flask extensions. This allows for continuity across the application. It is a light-weight framework written in Python that provides simple syntax for data manipulation.",
  language: "Python Web Framework",
  languageSite: "http://flask.pocoo.org/",
  docs: "http://flask.pocoo.org/docs/0.12/",
  npm: "In your Command Line: $ pip install Flask $ python hello.py",
  cdn: "",
  bower: "",
  github: "https://github.com/pallets/flask",
  twitter: "",
  assistance: "http://flask.pocoo.org/docs/0.12/tutorial/",
  maintainers: "Armin Ronacher and team",
  image: "https://skippy.org.uk/wp-content/uploads/Flask.jpg"
})

var meteor = new Framework({
  hook: "The fastest way to build Java Script Apps",
  title: "MeteorJS",
  notable: "Meteor has real-time data functionality - as soon as data is update by the user, the database is automatically updated. Developers do not need to write code to execute the post request to the database.",
  summary: "Meteor allows you to quickly develop scalable projects. It’s known for being developer-friendly thanks to its native templating system and real-time data functionality. It has a number of built-in 'smart packages' that add extra functionality.",
  language: "JavaScript Web Framework for NodeJS",
  languageSite: "https://www.meteor.com/",
  docs: "http://docs.meteor.com/?_ga=2.150103921.696531184.1496777033-1092281208.1495631233#/full/",
  npm: "In your Command Line: $npm install -g meteor-npm #single time operation $meteor-npm #type inside your project",
  cdn: "",
  bower: "",
  github: "https://github.com/meteor/meteor",
  twitter: "https://twitter.com/meteorjs",
  assistance: "https://www.meteor.com/tutorials",
  maintainers: "Meteor Development Group",
  image: "https://d14xs1qewsqjcd.cloudfront.net/assets/og-image-logo.png"
})

var ember = new Framework({
  hook: "A framwork for building ambitous web applications",
  title: "EmberJS",
  notable: "Ember has its own Command Line Interface (CLI), which gives you a more efficient interface with your application, as well as a number of tools to enhance development and access plug-ins for Ember applications.",
  summary: "Ember JS provides a robust framework to build both web and desktop applications. It provides a framework for the model, view and controller as well as conventions and idioms to simplify the development process and 'enforce' best development practices.",
  language: "JavaScript Web Framework",
  languageSite: "https://www.emberjs.com/",
  docs: "https://www.emberjs.com/api/",
  npm: "In your Command Line: $ npm install -g ember-cli@2.13 $ ember new ember-quickstart",
  cdn: "",
  bower: "",
  github: "https://github.com/emberjs/ember.js/",
  twitter: "https://twitter.com/emberjs?lang=en",
  assistance: "https://guides.emberjs.com/v2.13.0/tutorial/ember-cli/",
  maintainers: "Ember Core Team",
  image: "https://raw.githubusercontent.com/emberjs/website/master/source/images/brand/ember_Ember-Light.png"
})



var ends = [frontend, backend]
var frameworks = [angular, react, vue, backbone, rails]
var comments = [angular_comment]

frontend.frameworks.push(angular)
frontend.frameworks.push(react)
frontend.frameworks.push(vue)
frontend.frameworks.push(backbone)
frontend.frameworks.push(jquery)
backend.frameworks.push(rails)
backend.frameworks.push(meteor)
backend.frameworks.push(flask)
backend.frameworks.push(express)
backend.frameworks.push(django)
frontend.frameworks.push(ember)


ends.forEach((end, i)=> {
  end.save((err, end)=>{
    if(err){
      console.log(err)
    } else {
      console.log(end + "was saved");
    }
  })
})
