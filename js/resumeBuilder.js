
//*******************BIO STARTS HERE***********************************//
var skills = ["JavaScript","HTML,CSS","jQuery","Quality assurance and testing","Project Management", "CMS: Umbraco, Django, WordPress, custom etc.", "Information Architecture"];

var bio = {

    "name" : "Amourie",
    "surname" : "Fourie",
    "role" : "Front-End Developer in Brisbane, Australia",
    "welcomeMessage" : "I'm a web professional with over ten years experience as a Webmaster looking after the digital and web presences of large organisations. The roles I've been in have been hybrid roles exposing me to a range of web development practises and web project management methodologies. My true passion is web development and I would like to secure a full-time role in web development where I can have the opportunity to hone and grow my skills. I love learning new technologies. I am not restricted to front-end development as I've done back-end development in the past with .NET C# / Razor Syntax and Umbraco. My focus currently is on Full-stack JavaScript development.",
    "extraBlurb" : "CV",
    "biopic" : "images/amourie-profile-pic.jpg",
    "contacts" : {
        "twitter" : "http://www.twitter.com/amourief",
        "linkedIn" : "https://au.linkedin.com/in/amourie-fourie-00b01028",
        "github" : "https://github.com/amourie/",
    },
    //skills is an array defined further above
    "skills" : skills

};

bio.display = function() {

    var bioRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header-profileInfo").prepend(bioRole);

    var bioFullName = HTMLheaderName.replace("%data%",bio.name + " " + bio.surname + ": " + bio.extraBlurb);
    $("#header-profileInfo").prepend(bioFullName);

    var bioWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#welcome").append(bioWelcomeMsg);

    var bioPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header-profilePic").prepend(bioPic);

    //get bio.contacts properties
    var bioTwitter = bio.contacts.twitter;
    var bioLinkedIn = bio.contacts.linkedIn;
    var bioGithub = bio.contacts.github;

    var bioTempUrl = "";

    if (bioTwitter.length > 1)
    {
        $("#topContacts").append(HTMLtwitter.replace("%data%",bioTwitter));
        $("#footerContacts").append(HTMLtwitter.replace("%data%",bioTwitter));
    }
      if (bioLinkedIn.length > 1)
    {
        $("#topContacts").append(HTMLlinkedIn.replace("%data%",bioLinkedIn));
        $("#footerContacts").append(HTMLlinkedIn.replace("%data%",bioLinkedIn));
    }
    if (bioGithub.length > 1)
    {
        $("#topContacts").append(HTMLgithub.replace("%data%",bioGithub));
        $("#footerContacts").append(HTMLgithub.replace("%data%",bioGithub));
    }


    $("#skills").append(HTMLskillsStart);
    if (bio.skills.length > 0)
    {
        for (var skill in bio.skills)
        {
           $("#skillsDiv").append(HTMLskills.replace("%data%",bio.skills[skill]));
                   }
    }
}
//*******************BIO ENDS HERE***********************************//

//*******************PROJECTS START HERE*********************************//
var projects = {

    "projects":  [
            {
                //"employer" : "Employer 1",
                "title" : "Sample Project 1",
                "location" : "london",
                "dates" : "2000 - 2003",
                "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget imperdiet risus, non blandit erat. Ut suscipit neque ac est imperdiet, id volutpat lorem semper. Aenean pellentesque, dui vel commodo malesuada, neque velit vehicula felis, rhoncus aliquet massa justo semper nulla. Pellentesque mauris augue, porta cursus aliquam in, mollis ac felis. Proin luctus nibh nibh, at vestibulum nisl cursus at. Vivamus semper enim fringilla sem gravida placerat. Sed lorem justo, sodales vitae vestibulum et, lobortis vitae ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
                 "images": ["images/timthumb.jpg", "images/timthumb.jpg"]

            },
            {
                //"employer" : "Employer 2",
                "title" : "Sample Project 2",
                "location" : "auckland",
                "dates" : "2000 - 20010",
                "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget imperdiet risus, non blandit erat. Ut suscipit neque ac est imperdiet, id volutpat lorem semper. Aenean pellentesque, dui vel commodo malesuada, neque velit vehicula felis, rhoncus aliquet massa justo semper nulla. Pellentesque mauris augue, porta cursus aliquam in, mollis ac felis. Proin luctus nibh nibh, at vestibulum nisl cursus at. Vivamus semper enim fringilla sem gravida placerat. Sed lorem justo, sodales vitae vestibulum et, lobortis vitae ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
                "images": ["images/timthumb.jpg", "images/timthumb.jpg"]
            }
    ]

}

projects.display = function() {

    for (var project in projects.projects)
    {
       $("#projects").append(HTMLprojectStart);

       var projTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(projTitle);

        var projDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(projDates);
        var projDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(projDesc);

        if (projects.projects[project].images.length > 0)
        {
            for (var img in projects.projects[project].images){
                var projImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                $(".project-entry:last").append(projImage);
            }
        }
    }

}
//*******************PROJECTS END HERE*********************************//



//*******************EDUCATION STARTS HERE***********************************//

var education  = {

    "schools":  [
        {
        "name" : "University of Pretoria",
        "location" : "Pretoria, South Africa",
        "degree" : "B.IS Multimedia specializing in Multimedia (Computer Science as dual major)",
        "dates" : "",
        "url" : "http://www.up.ac.za/"

        },
        {
        "name" : "Auckland University",
        "location" : "Auckland, New Zealand",
        "degree" : "Project Management - Non-degree Purposes",
        "dates" : "2010",
        "url" : "https://www.auckland.ac.nz/"
        },
        {
        "name" : "Umbraco",
        "location" : "Auckland, New Zealand",
        "degree" : "Level 1 Development Certification",
        "dates" : "2013",
        "url" : "http://www.umbraco.com/"
        }
    ],

    "onlineCourses" : [
    {
        "title": "JavaScript Full Stack Tech Degree (in progress)",
        "url" : "www.teamtreehouse.com",
        "school" : "Team Tree House",
        "date" : "2017",
    },
    {
        "title": "Programming in C#",
        "url" : "www.mvc.com",
        "school" : "Microsoft Virtual Academy",
        "date" : "2014",
    }
    ]

}

education.display = function() {

    var eduName, eduDegree, eduDates, eduLocation, eduMajor, eduUrl = "";

    for (var school in education.schools)
    {
        $("#education").append(HTMLschoolStart);

        eduDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $('.education-entry:last').append(eduDegree);

        eduName = HTMLschoolName.replace("%data%",education.schools[school].name);
        $('.education-entry:last').append(eduName);

       eduDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $('.education-entry:last').append(eduDates);

        eduLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $('.education-entry:last').append(eduLocation);

        eduUrl = education.schools[school].url;

        $('.education-entry:last a').attr("href",eduUrl).attr("target","_blank");
    }

}

//******************EDUCATION ENDS HERE***********************************//

//*******************WORK STARTS HERE***********************************//

var work = {

          "jobs" : [
            {
                "employer" : "News Corp Australia",
                "title" : "Junior Technical Product Manager",
                "location" : "Brisbane, Australia",
                "dates" : "September 2016 - March 2017",
                "description" : "I worked as a tecnical liaison between the business and the team of web developers in an agile team. The role requires technical and research skills and being able to translate business requirements into technical requirements. For example investigating the subscription model and identifying web development changes that need to happen to change the subscription process through means of a new API. Adopting new technologies or new tracking such as Segment, AppLinks, external analytics tools etc and scoping these changes in agile tickets as user stories. The role also included mobile app testing and general UAT testing. "
            },
            {
              "employer" : "NZME. New Zealand Media",
              "title" : "Webmaster / Web Developer",
              "location" : "Nanjing, China",
              "dates" : "April 2009 - March 2015",
              "description" : "This role was a hands-on Webmaster role where I served a portfolio of ten brands within the company. The role involved. "
          },
            {
                "employer" : "Microsoft South Africa (outsourced by IT Event Management)",
                "title" : "Webmaster",
                "location" : "Johannesburg, South Africa",
                "dates" : "April 2005 – February 2008",
                "description" : "In this role, I localised and implemented global campaigns and websites for the local South African market. This included new site launches, product launches and event sites.  Created and maintained web portals and online campaign elements, web elements, forms and other online functionality using Microsoft’s own internal web tools and CMS. Vendor management on outsourced projects that required external design or development work. Supported global production teams: participated in user acceptance testing of global web properties before localization to SA market."

            },
             {
                "employer" : "Nanjing University of Finance and Economics",
                "title" : "English Teacher",
                "location" : "Nanjing, China",
                "dates" : "February 2008 – January 2009",
                "description" : "An overseas gap year experience."
            }

    ],
    "onlineCourses" : [
    {
        "title": "JavaScript Basics",
        "website" : "teamtreehouse.com"
    }
    ]
}

work.display = function() {
    for (job in work.jobs)
    {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);

        var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkDate + formattedWorkLocation + formattedWorkDesc);

    }
}


//*******************WORK ENDS HERE***********************************//

//******************CALL MAIN FUNCTIONS HERE***********************************//
projects.display();
bio.display();
work.display();
education.display();
projects.display();
//******************CALL MAIN FUNCTIONS ENDS HERE***********************************//

//******************Google map is called here ***********************************//
$("#mapDiv").append(googleMap);
