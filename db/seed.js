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
  description: "Front End development engineers build elements that the user sees - the look, feel and interactivity of an application or a website. Front End frameworks are ready-made libraries or components that a developer can use to give the project more structure or functionality.",
  icon: "https://d30y9cdsu7xlg0.cloudfront.net/png/3281-200.png"
});
var backend = new End({
  type: "Back End",
  description: "Back End development engineers build functionality that a user does not see - the transfer of data between the user and the server and underlying database. Backend frameworks allow developers to use simpler code, allowing for faster and more collaborative development.",
  icon: "https://maxcdn.icons8.com/Share/icon/dotty/Network//server1600.png"
 })
 var angular_comment = new Comment({
   link: "https://github.com/wjpurdum/Matchup",
   username: "wjpurdum"
 })

var angular = new Framework({
  title: "AngularJS",
  summary: "Angular allows us to make dynamic views in our applications using two-way databinding. We integrate Angular directly into our HTML to determine components and behaviors.",
  notable: "two-way databinding",
  language: "JavaScript Framework",
  languageSite: "https://angularjs.org/",
  docs: "https://docs.angularjs.org/api",
  npm: "",
  cdn: "<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js'></script>",
  bower: "",
  github: "https://github.com/angular/angular.js",
  twitter: "https://twitter.com/angularjs_io",
  assistance: "https://docs.angularjs.org/tutorial",
  maintainers: "Google",
  image: "http://codecondo.com/wp-content/uploads/2015/05/15-Directives-to-Extend-Your-Angular.js-Apps.jpg?x94435"
});

var react = new Framework({
  title: "React",
  notable: "Virtual Document Object Model and JSX(an extension of JavaScript that looks like looks and acts like HTML)",
  summary: "Use React to create fast web applications that you want to take to scale. React allows you to update and re-render individual components of your application without refreshing the entire page.",
  language: "JavaScript Library",
  languageSite: "https://facebook.github.io/react/",
  docs: "https://facebook.github.io/react/docs/installation.html",
  npm: "npm install -g create-react-app; create-react-app my-app; cd my-app; npm start",
  cdn: "",
  bower: "",
  github: "https://github.com/facebook/react",
  twitter: "https://twitter.com/reactjs",
  assistance: "https://facebook.github.io/react/tutorial/tutorial.html",
  maintainers: "Facebook, Instagram",
  image: "https://cdn-images-1.medium.com/max/640/1*XaGxIa_JuHc8YTR5Znv6tg.png"
});

var vue = new Framework({
  title: "Vue.js",
  notable: "It prides itself on being a simplified and streamlined framework that is less opinionated and more developer-friendly than other JavaScript frameworks.",
  summary: "Use Vue.js to build interactive user interfaces.",
  language: "JavaScript Framework",
  languageSite: "https://vuejs.org/",
  docs: "https://vuejs.org/v2/api/",
  npm: "$ npm install vue",
  cdn: "<script src='https://unpkg.com/vue'></script>",
  bower: "",
  github: "github.com/vuejs/vue",
  twitter: "https://twitter.com/vuejs",
  assistance: "https://vuejs.org/v2/guide/",
  maintainers: "",
  image: "https://coligo.io/vuejs-the-basics/cover-850x416.jpg"
});


var backbone = new Framework({
  title: "Backbone.js",
  notable: "Backbone is lightweight which allows applications to run quickly, and only requires one dependency (Underscore.js)",
  summary: "Use Backbone to create to create fast single page web applications that don't handle or require a lot of data.",
  language: "JavaScript Library",
  languageSite: "https://vuejs.org/",
  docs: "https://vuejs.org/v2/api/",
  npm: "$ npm install vue",
  cdn: "<script type = 'text/javascript' src = 'https://ajax.cdnjs.com/ajax/libs/backbone.js/0.3.3/backbone-min.js'></script>",
  bower: "",
  github: "https://github.com/jashkenas/backbone",
  twitter: "",
  assistance: "",
  maintainers: "Jeremy Ashkenas",
  image: "http://www.korenlc.com/wp-content/uploads/2014/09/backbone-js.gif"
});

var rails = new Framework({
  title: "Rails",
  notable: "A lot of scaffolding and structure comes right out of the box, which will minimize your initial set up. Rails also requires strict naming conventions so that it can make assumptions about your web application's behavior, creating less work for you.",
  summary: "Rails provides the structure for an applications database, web service and views. It is designed to be used with the Ruby programming language.",
  language: "Server-side web application",
  languageSite: "http://rubyonrails.org/",
  docs: "http://api.rubyonrails.org/",
  npm: "$ gem install rails $ rails mynewapp $ cd myapp $ rails server",
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
  title: "jQuery",
  notable: "It is currently the most widely used JavaScript library.",
  summary: "jQuery provides more streamlined manipulation of DOM elements and AJAX requests. This allows for easier styling, animation and 3rd party API requests.",
  language: "JavaScript Library",
  languageSite: "https://jquery.com/",
  docs: "https://api.jquery.com/",
  npm: "npm install jquery",
  cdn: "https://code.jquery.com/",
  bower: "bower install jquery",
  github: "https://github.com/jquery/jquery",
  twitter: "https://twitter.com/jquery?lang=en",
  assistance: "https://learn.jquery.com/",
  maintainers: "",
  image: "http://www.logoeps.com/wp-content/uploads/2011/08/jquery-logo.jpg"
})


var express = new Framework({
  title: "jQuery",
  notable: "It is currently the most widely used JavaScript library.",
  summary: "jQuery provides more streamlined manipulation of DOM elements and AJAX requests. This allows for easier styling, animation and 3rd party API requests.",
  language: "JavaScript Library",
  languageSite: "https://jquery.com/",
  docs: "https://api.jquery.com/",
  npm: "npm install jquery",
  cdn: "https://code.jquery.com/",
  bower: "bower install jquery",
  github: "https://github.com/jquery/jquery",
  twitter: "https://twitter.com/jquery?lang=en",
  assistance: "https://learn.jquery.com/",
  maintainers: "",
  image: "https://camo.githubusercontent.com/02ed3f6695f288aedec24c2a329c667281efef5f/687474703a2f2f707265636973696f6e2d736f6674776172"
})


var django = new Framework({
  title: "Django",
  notable: "Becuase Django is great for scaling applications up, it's frequently used for large projects. Some notable sites that use Django include Mozilla, Instagram and the Public Broadcast Corporation.",
  summary: "Django is a framework written in Python. Use Django to sfimplify the creation and manipulation of data.",
  language: "Python Web Framework",
  languageSite: "https://www.djangoproject.com/start/overview/",
  docs: "https://docs.djangoproject.com/en/1.11/",
  npm: "After installation: $ django-admin startproject mysite",
  cdn: "",
  bower: "",
  github: "https://github.com/django/django",
  twitter: "https://twitter.com/djangoproject",
  assistance: "https://docs.djangoproject.com/en/1.11/intro/tutorial01/",
  maintainers: "Django Software Foundation",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1200px-Django_logo.svg.png"
})

var express = new Framework({
  title: "ExpressJS",
  notable: "Out of the box, Express is notably minimal. Many features that you would have acess to out-of-the-box in more robust frameworks such as Rails are offered as plugins in Express.",
  summary: "Express is the de-factor web framework for NodeJS, which is a run-time (server-side) environment written in JavaScript.",
  language: "JavaScript Web Framework for NodeJS",
  languageSite: "https://expressjs.com/",
  docs: "https://docs.djangoproject.com/en/1.11/",
  npm: "npm init $ npm install express --save",
  cdn: "",
  bower: "",
  github: "https://github.com/expressjs/expressjs.com?_ga=2.137347888.1424474673.1496688420-967821973.1495128838",
  twitter: "https://twitter.com/expressjs?lang=en",
  assistance: "https://expressjs.com/en/starter/hello-world.html",
  maintainers: "Node.js Foundation",
  image: "https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
})

var flask = new Framework({
  title: "Flask",
  notable: "According to GitHub statistics, Flask is the most popular Python web framework.",
  summary: "Lorem ipsum dolor sit amet, nec quam aliquam quam, donec vivamus aenean orci, morbi sit tempus eget duis vestibulum risus. In ut, ut neque, mi tristique a ipsum. Feugiat non hymenaeos elit proin dapibus, rhoncus mauris sit dui cursus diam. Hymenaeos id ultricies, pulvinar ac",
  language: "Python Web Framework",
  languageSite: "http://flask.pocoo.org/",
  docs: "http://flask.pocoo.org/docs/0.12/",
  npm: "$ pip install Flask $ python hello.py",
  cdn: "",
  bower: "",
  github: "https://github.com/pallets/flask",
  twitter: "",
  assistance: "http://flask.pocoo.org/docs/0.12/tutorial/",
  maintainers: "Armin Ronacher",
  image: "https://skippy.org.uk/wp-content/uploads/Flask.jpg"
})

var meteor = new Framework({
  title: "MeteorJS",
  notable: "Meteor has real-time data functionality - as soon as data the database is update (such as on a user submitting a form), the database is automatically updated. Developers do not need to write code to execute this data transfer.",
  summary: "Meteor allows you to quickly develop scaleable projects. Meteor is known for being developer-friendly thanks to its native templating system and real-time data functionality. It has a number of built-in 'smart packages' that add extra functionality.",
  language: "JavaScript Web Framework for NodeJS",
  languageSite: "https://www.meteor.com/",
  docs: "http://docs.meteor.com/?_ga=2.150103921.696531184.1496777033-1092281208.1495631233#/full/",
  npm: "curl https://install.meteor.com/ | sh",
  cdn: "",
  bower: "",
  github: "https://github.com/meteor/meteor",
  twitter: "https://twitter.com/meteorjs",
  assistance: "https://www.meteor.com/tutorials",
  maintainers: "Meteor Development Group",
  image: "https://shmck.herokuapp.com/content/images/2015/07/meteor.png"
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


ends.forEach((end, i)=> {
  end.save((err, end)=>{
    if(err){
      console.log(err)
    } else {
      console.log(end + "was saved");
    }
  })
})
