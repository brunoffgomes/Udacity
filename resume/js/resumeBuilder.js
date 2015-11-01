// -----------------------------------------
//     JSON OBJECTS
// -----------------------------------------
var bio = {
    "name" : "Jennifer Bland",
    "role" : "Full-Stack Software Engineer",
    "contacts" : {
          "mobile": "678-778-5967",
          "email": "jennifer@jenniferbland.com",
          "github": "ratracegrad",
          "twitter": "ratracegrad",
          "blog": "www.jenniferbland.com",
          "location": "Atlanta, Georgia"
    },
    "welcomeMessage": "I am an Entrepreneur. Mountain Climber. Neil Diamond fanatic. Front-end and full stack Software Engineer with over 10 years of development experience. MBA grad. World traveler. The best Udacity Code Reviewer in the world!",
    "skills": ["JavaScript", "jQuery", "Bootstrap", "Node.js", "Express.js"],
    "biopic": "http://www.jenniferbland.com/wp-content/uploads/Jennifer-Bland-headshot.png",
    "display": "function() {}"
};

var education = {
    "schools": [
        {
            "name": "San Jose State University",
            "location": "San Jose, California",
            "degree": "MBA",
            "major": "Business",
            "dates": "1989 - 1992",
            "url": "http://www.sjsu.edu/"
        },
        {
            "name": "Furman University",
            "location": "Greenville, SC",
            "degree": "BA",
            "major": "History",
            "dates": "1980 - 1984",
            "url": "http://www.furman.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Software Engineering Intensive",
            "name": "Hack Reactor",
            "date": "2015",
            "url": "http://www.hackreactor.com"   
        },
        {
            "title": "Front-end Web Developer",
            "name": "Udacity",
            "date": "2015",
            "url": "http://www.udacity.com"   
        }
    ],
    "display": "function() {}"
};

var work = {
    "jobs": [
        {
            "employer": "Turner, Inc.", 
            "title": "Software Engineer", 
            "location": "Atlanta, Georgia", 
            "dates": "2015 - Present",
            "description": "Wrote applications to support the broadcast system division of CNN.",
            "url": "http://www.cnn.com"
        },
        {
            "employer": "Aarons, Inc", 
            "title": "Product Manager", 
            "location": "Atlanta, Georgia", 
            "dates": "2012 - 2014",
            "description": "Managed the production of training courses for store and home office employees.",
            "url": "http://www.aarons.com" 
        }
    ],         
    "display": "function) {}"
};

var projects = {
    "projects": [
        {
            "title": "SnapIT", 
            "dates": "2015",
            "description": "SnapIt is a web application that also utilizes a Chrome extension. To use SnapIt users will need to start the web application, create an account and then start snapping their favorite items using the Chrome extension.",
            "images": [
                "https://github.com/ratracegrad/SnapIt/raw/master/screenshots/Snapit-logo-blue.png?raw=true",
                "https://github.com/ratracegrad/SnapIt/raw/master/screenshots/website.png?raw=true",
                "https://github.com/ratracegrad/SnapIt/raw/master/screenshots/homepage.png?raw=true"
            ],
            "url": "http://sa-snapit.herokuapp.com/"
        },
        {
            "title": "FanBox", 
            "dates": "2015",
            "description": "Fan Box demonstrates how you would use AngularJS in a corporate website or ecommerce environment.",
            "images": [
                "https://camo.githubusercontent.com/0741be923523d09c10b7ae31e467433f0cb52b4c/687474703a2f2f7777772e6a656e6e69666572626c616e642e636f6d2f696d616765732f66616e2d626f782e706e67",
                "https://camo.githubusercontent.com/129211b99e50551fba99bb12a9abe7482a564e0f/687474703a2f2f7777772e6a656e6e69666572626c616e642e636f6d2f696d616765732f73637265656e73686f742d686f772d69742d776f726b732e706e67",
                "https://camo.githubusercontent.com/bb575e0a5663ce2c528a1a6fe0f4e2aa4df36252/687474703a2f2f7777772e6a656e6e69666572626c616e642e636f6d2f696d616765732f73637265656e73686f742d6f726465722e706e67",
                "https://camo.githubusercontent.com/33ef4b0d0ae327e7183fff21be5b06d3d8790276/687474703a2f2f7777772e6a656e6e69666572626c616e642e636f6d2f696d616765732f73637265656e73686f742d636f6e746163742e706e67"
            ],
            "url": "https://jb-fanbox.herokuapp.com/"
        }
    ],
    "display": "function() {}"
};


// -----------------------------------------
//     BIO
// -----------------------------------------
bio.display = function() {
    $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

    $('#topContacts').append(HTMLmobile.replace('%data%',bio.contacts.mobile));
    $('#topContacts').append(HTMLemail.replace('%data%',bio.contacts.email));
    $('#topContacts').append(HTMLtwitter.replace('%data%',bio.contacts.twitter));
    $('#topContacts').append(HTMLgithub.replace('%data%',bio.contacts.github));
    $('#topContacts').append(HTMLblog.replace('%data%',bio.contacts.blog));
    $('#topContacts').append(HTMLlocation.replace('%data%',bio.contacts.location));

    $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(value, index, array){
            $('#skills').append(HTMLskills.replace('%data%', value));
        })
        
    }
};


// -----------------------------------------
//      WORK
// -----------------------------------------
work.display = function() {
    var formattedTitle = "";

    if (work.jobs.length > 0) {
        work.jobs.forEach(function(value, index, array){
            $('#workExperience').append(HTMLworkStart);
            formattedTitle = HTMLworkEmployer.replace('#', value.url)
            $('.work-entry:last').append(formattedTitle.replace('%data%', value.employer) + HTMLworkTitle.replace('%data%', value.title) );
            $('.work-entry:last').append(HTMLworkLocation.replace('%data%', value.location) );
            $('.work-entry:last').append(HTMLworkDates.replace('%data%', value.dates) );
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%', value.description) );
            
        });
    }
};


// -----------------------------------------
//      PROJECTS
// -----------------------------------------
projects.display = function() {
    var formattedTitle = "";

    if (projects.projects.length > 0 ) {
        projects.projects.forEach(function(value, index, array){
            $('#projects').append(HTMLprojectStart);
            formattedTitle = HTMLprojectTitle.replace('#', value.url)
            $('.project-entry:last').append(formattedTitle.replace('%data%', value.title) );
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', value.dates) );
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', value.description) );
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', value.images[0]) );
            
        });
    }
}


// -----------------------------------------
//     EDUCATION
// -----------------------------------------
education.display = function() {
    var formattedTitle = "";
    if (education.schools.length > 0) {
        education.schools.forEach(function(value, index, array){
            $('#education').append(HTMLschoolStart);
            formattedTitle = HTMLschoolName.replace('#', value.url)
            $('.education-entry:last').append(formattedTitle.replace('%data%', value.name) + HTMLschoolDegree.replace('%data%', value.degree) );
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', value.location) );
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', value.dates) );
            $('.education-entry:last').append();
            $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', value.major) );
        });
    }

    if (education.onlineCourses.length > 0) {
        $('.education-entry:last').append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(value, index, array){    
            formattedTitle = HTMLonlineTitle.replace('#', value.url);
            $('.education-entry:last').append(formattedTitle.replace('%data%', value.title) + HTMLonlineSchool.replace('%data%', value.name) );
            $('.education-entry:last').append(HTMLonlineDates.replace('%data%', value.date) );
        }); 
    }
    
};


// -----------------------------------------
//     FOOTER
// -----------------------------------------
function footerDisplay() {
    $('#footerContacts').append(HTMLmobile.replace('%data%',bio.contacts.mobile));
    $('#footerContacts').append(HTMLemail.replace('%data%',bio.contacts.email));
    $('#footerContacts').append(HTMLtwitter.replace('%data%',bio.contacts.twitter));
    $('#footerContacts').append(HTMLgithub.replace('%data%',bio.contacts.github));
    $('#footerContacts').append(HTMLblog.replace('%data%',bio.contacts.blog));
    $('#footerContacts').append(HTMLlocation.replace('%data%',bio.contacts.location));
};


// -----------------------------------------
//     DISPLAY EVERYTHING
// -----------------------------------------
bio.display();
work.display();
projects.display();
education.display();
footerDisplay();
