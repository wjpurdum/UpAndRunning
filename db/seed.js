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

var frontend = new End({type: "Front End", frameworks: [angular]})
var backend = new End({type: "Back End" })

var angular = new Framework({
  title: "AngularJS",
  summary: "Angular allows us to make dynamic views in our applications using two-way databinding. We integrate Angular directly into our HTML to determine components and behaviors."
  notable: "two-way databinding"
  language: "JavaScript",
  languageSite: "https://angularjs.org/",
  docs: "https://docs.angularjs.org/api",
  npm: "String",
  cdn: "<script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js'></script>",
  bower: "",
  latest: "v1.6.5",
  github: "https://github.com/angular/angular.js",
  twitter: "https://twitter.com/angularjs_io",
  assistance: "https://docs.angularjs.org/tutorial",
  maintainers: "Misko Hevery",
  image: "https://angular.io/resources/images/logos/angular/angular.svg"
});

var react = new Framework({
  title: "React",
  notable: "Virtual Document Object Model and JSX(an extension of JavaScript that looks like looks and acts like HTML)"
  summary: "Use React to create fast web applications that you want to take to scale. React allows you to update and re-render individual components of your application without refreshing the entire page."
  language: "JavaScript library",
  languageSite: "https://facebook.github.io/react/",
  docs: "https://facebook.github.io/react/docs/installation.html",
  npm: "npm install -g create-react-app; create-react-app my-app; cd my-app; npm start",
  cdn: "",
  bower: "",
  latest: "v15.5.4",
  github: "https://github.com/facebook/react",
  twitter: "https://twitter.com/reactjs",
  assistance: "https://facebook.github.io/react/tutorial/tutorial.html",
  maintainers: "Facebook, Instagram",
  image: "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
});

var vue = new Framework({
  title: "Vue.js",
  notable: "It prides itself on being a simplified and streamlined framework that is less opinionated and more developer-friendly than other JavaScript frameworks."
  summary: "Use Vue.js to build interactive user interfaces."
  language: "JavaScript framework",
  languageSite: "https://vuejs.org/",
  docs: "https://vuejs.org/v2/api/",
  npm: "$ npm install vue",
  cdn: "<script src='https://unpkg.com/vue'></script>",
  bower: "",
  latest: "",
  github: "github.com/vuejs/vue",
  twitter: "https://twitter.com/vuejs",
  assistance: "https://vuejs.org/v2/guide/",
  maintainers: "",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/215px-Vue.png"
});

var vue = new Framework({
  title: "Vue.js",
  notable: "It prides itself on being a simplified and streamlined framework that is less opinionated and more developer-friendly than other JavaScript frameworks."
  summary: "Use Vue.js to build interactive user interfaces."
  language: "JavaScript framework",
  languageSite: "https://vuejs.org/",
  docs: "https://vuejs.org/v2/api/",
  npm: "$ npm install vue",
  cdn: "<script src='https://unpkg.com/vue'></script>",
  bower: "",
  latest: "2.3.3",
  github: "github.com/vuejs/vue",
  twitter: "https://twitter.com/vuejs",
  assistance: "https://vuejs.org/v2/guide/",
  maintainers: "Evan You",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/215px-Vue.png"
});

var backbone = new Framework({
  title: "Backbone.js",
  notable: "It prides itself on being a simplified and streamlined framework that is less opinionated and more developer-friendly than other JavaScript frameworks."
  summary: "Use Vue.js to build interactive user interfaces."
  language: "JavaScript framework",
  languageSite: "https://vuejs.org/",
  docs: "https://vuejs.org/v2/api/",
  npm: "$ npm install vue",
  cdn: "<script src='https://unpkg.com/vue'></script>",
  bower: "",
  latest: "2.3.3",
  github: "github.com/vuejs/vue",
  twitter: "https://twitter.com/vuejs",
  assistance: "https://vuejs.org/v2/guide/",
  maintainers: "Evan You",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/215px-Vue.png"
});


// var ends = [frontend, backend]
// var frameworks = [angular]

frontend.frameworks.push(angular)

frontend.save((err, end)=>{
  if(err) {
    console.log(err)
  } else {
    console.log(end + "end has been saved")
  }
})
