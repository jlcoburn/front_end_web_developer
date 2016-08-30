// I use js create bio, work, project and education objects including all the properties this project requries.
var bio = {
    "name": "Hanyu Jiang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "415-404-2120",
        "email": "ptchiang12@gmail.com",
        "github": "https://github.com/ptchiangchloe",
        "location": "San Francisco, CA"
    },
    "welcomeMessage": "Hi guys, welcome to my resume page, my name is Hanyu Jiang and I'm from China. I have a brief career in business and sales, which built my strong work ethic and the ability to work well with others.\
  I took my first JavaScript class in my graduate school and I fell in love with the magic of coding since then.\
  I start learning coding systematically and intensively by self-taught and the help from the online community a year ago. I've been repeatedly learning and practicing front-end web\
  development and CS principle over the past year. I've been with joined a few notable coding schools so that I know I'm ready to step into \
  the professional world. I’m hard-working, eager to learn and I enjoy creating application, challenging myself with new knowledge. Now I'm ready to be a full time web developer.\
  In my spare time, I like movie and design, I also took advantage from my design background that I think software programming is definitely a design process because it involves creativity and user experience.\
  If you are interested in knowing more about me, please don’t hesitate to reach me by email.",
    "biopic": "images/headshot.jpg",
    "skills": ["HTML", "CSS", "Responsive Web Design", "JavaScript","Node.js","jQuery", "Ruby on Rails", "Software Testing", "Git", "Github", "Rspec"],
// I create the display function by deploying jQuery to fill in all the values I just declared and to be present in html page
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", this.name),
            formattedRole = HTMLheaderRole.replace("%data%", this.role),
            formattedPicture = HTMLbioPic.replace("%data%", this.biopic),
            formattedMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

        $("#header").prepend(formattedName, formattedRole).append(formattedPicture, formattedMessage, HTMLskillsStart);
        for (var i = 0; i < this.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio['skills'][i] + " , "));
        }

        for (var key in this.contacts) {
          if (this.contacts.hasOwnProperty(key)) {
              $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", key).replace('%data%', this["contacts"][key]));
              $("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", key).replace('%data%', this["contacts"][key]));
          }
        };
    }
},

work = {
        "jobs": [{
            "employer": "Real Estate Ebroker",
            "url": "http://reebroker.com",
            "title": "Sales",
            "location": "San Francisco, CA, US",
            "dates": "2015 - 2016",
            "description": "working with real estate buyer and help them find the perfect home."
        }, {
            "employer": "Tiffany&Co.",
            "url": "http://www.tiffany.com/",
            "title": "Sales",
            "location": "San Francisco, CA, US",
            "dates": "2014",
            "description": "Helping people buy high end fashion jewlery and give them styling advice."
        }, {
            "employer": "Emporio Armani",
            "url": "http://www.armani.com/",
            "title": "Sales",
            "location": "San Francisco, CA, US",
            "dates": "2012-2013",
            "description": "working with clients to sell high end fashion products and give them styling advice."
        }],
        "display": function() {
            for (var i = 0; i < work.jobs.length; i++) {
                var formarttedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer).replace('#', this.jobs[i].url);
                var formarttedTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
                var formattedEmployerTitle = formarttedEmployer + formarttedTitle;
                var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[i]['location']);
                var formattedDates = HTMLworkDates.replace("%data%", this.jobs[i]['dates']);
                var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[i]['description']);

                $("#workExperience").append(HTMLworkStart);
                $(".work-entry").eq(i).append(formattedEmployerTitle, formattedLocation,formattedDates, formattedDescription );
            }
        }
    },

projects = {
    "projects": [{
        "title": "Bloccit",
        "dates": "2016",
        "description": "I built a social communication like reddit in ruby on rails, It's my \
        I faced a lot of challengings, meanwhile, I learnded a lot by all means.",
        "images": ["images/blocimg1.png","images/blocimg2.png","images/blocimg3.png","images/blocimg4.png"]
    }, {
        "title": "My first website",
        "dates": "2015",
        "description": "I built website by HTML and CSS, It's my \
        I faced a lot of challengings, meanwhile, I learnded a lot by all means.",
        "images": ["images/mfwimg1.png","images/mfwimg2.png","images/mfwimg3.png","images/mfwimg4.png"]
    }],
    "display": function() {
        for (var i = 0; i < this.projects.length; i++) {
            var formarttedTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
            var formarttedDates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
            var formarttedDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);

            $("#projects").append(HTMLprojectStart); // to create a new project entry
            $(".project-entry:last").append(formarttedTitle, formarttedDates, formarttedDescription);

            if (this.projects[i].images.length > 0) {
                 this.projects[i].images.forEach(function(val){
                     var formattedImage = HTMLprojectImage.replace("%data%", val);
                     $(".project-entry:last").append(formattedImage);
                 })
            };
        }
    }
},

education = {
    "schools": [{
        "name": "Hongling High school",
        "location": "Shenzhen, China",
        "degree": "GED",
        "majors": ["General study"],
        "dates": "2007",
        "url": "http://hlzx.szftedu.cn/InternationalEn/index.aspx"
    }, {
        "name": "Fudan University",
        "location": "Shanghai, China",
        "degree": "BFA",
        "majors": ["Art and Design"],
        "dates": "2011",
        "url": "http://www.siva.edu.cn/"
    }, {
        "name": "Academy of Art University",
        "location": "San Francisco, CA, US",
        "degree": "MFA",
        "dates": "2012",
        "majors": ["Web Design and Development"],
        "url": "http://www.academyart.edu/academics/web-design/graduate"
    }],
    "onlineCourses": [{
        "title": "Front-end developement program",
        "school": "Treehouse",
        "date": "2015",
        "url": "https://teamtreehouse.com/home"
    }, {
        "title": "Front-end developement program",
        "school": "CodeAcademy",
        "date": "2016",
        "url": "https://www.codecademy.com"
    }, {
        "title": "Ruby on Rails foundation",
        "school": "Bloc",
        "date": "2016",
        "url": "https://www.bloc.io"
    }, {
        "title": "Front-end developement program",
        "school": "Udacity",
        "date": "2016",
        "url": "www.udacity.com"
    }],
    "display": function() {
        for (var i = 0; i < this.schools.length; i++) {
            $('#education').append(HTMLschoolStart);
        };
        $('.education-entry').each(function(i) {
            var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i]['location']);
            var formattedNameAndDegree = HTMLschoolName.replace('%data%', education.schools[i]['name'].replace("#", education.schools[i]['url']) +
                HTMLschoolDegree.replace('%data%', education.schools[i]['degree']));
            var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i]['dates']);
            var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i]['majors'].join(', '));
            $(this).append(formattedLocation, formattedNameAndDegree, formattedDates, formattedMajor);
        });
        $('#education').append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
            var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i]['title'].replace("#", education.onlineCourses[i]['url']) +
            HTMLonlineSchool.replace('%data%', education.onlineCourses[i]['school']));
            var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i]['date']);
            var formattedUrl = HTMLonlineURL.replace(/%data%|#/g, education.onlineCourses[i]['url'])
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(formattedTitle, formattedDates, formattedUrl)
        };
    }
};

function locationizer(work_obj) {
    var locationArray = []
    work_obj.jobs.forEach(function(job){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation)
    })
    return locationArray;
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
$(function() {
    initializeMap();
});
