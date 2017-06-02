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

var frontend = new End({type: "Front End" })
var backend = new End({type: "Back End" })

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
  image: "https://angular.io/resources/images/logos/angular/angular.svg"
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
  image: "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
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
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/215px-Vue.png"
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
  image: "http://file.mrbool.com/mrbool/articles/MuhammadAzamuddin/BackBoneEvents/BackBoneEvents01.png"
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
  image: "https://thinkster.io/assets/homepage/rails-9b13de39de9d2eed10a2418734ee1e584cdc9634c04206af1c2bfcc8b0d0e3d5.png"
});

var ends = [frontend, backend]
var frameworks = [angular, react, vue, backbone, rails]

frontend.frameworks.push(angular)
frontend.frameworks.push(react)
frontend.frameworks.push(vue)
frontend.frameworks.push(backbone)
backend.frameworks.push(rails)

ends.forEach((end, i)=> {
  end.save((err, end)=>{
    if(err){
      console.log(err)
    } else {
      console.log(end + "was saved");
    }
  })
})