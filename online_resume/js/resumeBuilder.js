// I use js create bio, work, project and education objects including all the properties this project requries.
var bio = {
    "name": "Hanyu Jiang",
    "role": "Web developer",
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
        var a = HTMLheaderName.replace("%data%", this["name"]),
            b = HTMLheaderRole.replace("%data%", bio.role),
            c = HTMLbioPic.replace("%data%", bio.biopic),
            d = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").prepend(b).prepend(a).append(c, d).append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio['skills'][i] + " , "));
        }
        for (var key in this.contacts) {
            $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", key).replace('%data%', this["contacts"][key])),
                $("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", key).replace('%data%', this["contacts"][key]))
        };
    }
};

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
                $("#workExperience").append(HTMLworkStart);
                var formarttedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace('#', work.jobs[i]['url']);
                var formarttedTitle = HTMLworkTitle.replace("%data%", work.jobs[i]['title']);
                var formattedEmployerTitle = formarttedEmployer + formarttedTitle;
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i]['location']);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i]['dates']);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i]['description']);
                $(".work-entry").eq(i).append(formattedEmployerTitle)
                    .append(formattedLocation)
                    .append(formattedDates)
                    .append(formattedDescription);
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
    }]
}

projects.display = function() {
    for (x in projects.projects) {
        $("#projects").append(HTMLprojectStart); // to create a new project entry
        var formarttedTitle = HTMLprojectTitle.replace("%data%", projects.projects[x].title);
        $(".project-entry:last").append(formarttedTitle);
        var formarttedDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
        $(".project-entry:last").append(formarttedDates);
        var formarttedDescription = HTMLprojectDescription.replace("%data%", projects.projects[x].description);
        $(".project-entry:last").append(formarttedDescription);
        if (projects.projects[x].images.length > 0) {
            for (image in projects.projects[x].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[x].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

education = {
    "schools": [{
        "name": "Hongling High school",
        "location": "Shenzhen, China",
        "degree": "GED",
        "major": ["General study"],
        "dates": "2007",
        "url": "http://hlzx.szftedu.cn/InternationalEn/index.aspx"
    }, {
        "name": "Fudan University",
        "location": "Shanghai, China",
        "degree": "BFA",
        "major": ["Art and Design"],
        "dates": "2011",
        "url": "http://www.siva.edu.cn/"
    }, {
        "name": "Academy of Art University",
        "location": "San Francisco, CA, US",
        "degree": "MFA",
        "dates": 2012,
        "major": ["Web Design and Development"],
        "url": "http://www.academyart.edu/academics/web-design/graduate"
    }],
    "onlineCourses": [{
        "title": "Front-end developement program",
        "school": "Treehouse",
        "date": 2015,
        "url": "https://teamtreehouse.com/home"
    }, {
        "title": "Front-end developement program",
        "school": "CodeAcademy",
        "date": 2016,
        "url": "https://www.codecademy.com"
    }, {
        "title": "Ruby on Rails foundation",
        "school": "Bloc",
        "date": 2016,
        "url": "https://www.bloc.io"
    }, {
        "title": "Front-end developement program",
        "school": "Udacity",
        "date": 2016,
        "url": "www.udacity.com"
    }],
    "display": function() {
        for (var i = 0; i < education.schools.length; i++) {
            $('#education').append(HTMLschoolStart);
        };
        $('.education-entry').each(function(i) {
            $(this).append(HTMLschoolLocation.replace('%data%', education.schools[i]['location']))
                .append(HTMLschoolName.replace('%data%', education.schools[i]['name'])
                    .replace("#", education.schools[i]['url']) +
                    HTMLschoolDegree.replace('%data%', education.schools[i]['degree']))
                .append(HTMLschoolDates.replace('%data%', education.schools[i]['dates']))
                .append(HTMLschoolMajor.replace('%data%', education.schools[i]['major'].join(', ')));
        });
        $('#education').append(HTMLonlineClasses);
        for (var i in education.onlineCourses) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[i]['title'])
                    .replace("#", education.onlineCourses[i]['url']) +
                    HTMLonlineSchool.replace('%data%', education.onlineCourses[i]['school']))
                .append(HTMLonlineDates.replace('%data%', education.onlineCourses[i]['date']))
                .append(HTMLonlineURL.replace(/%data%|#/g, education.onlineCourses[i]['url']));
        };
    }
};

bio.display();
work.display();
projects.display();
education.display();

function locationizer(work_obj) {
    var locationArray = []
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation)
    }
    return locationArray;
}

$("#mapDiv").append(googleMap);
$(function() {
    initializeMap();
});
