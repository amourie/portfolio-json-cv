
//*******************BIO STARTS HERE***********************************//
var skills = ["JavaScript","HTML,CSS","Coding","Quality assurance and testing","Project Management", "UX Design", "Information Architecture"];
//$("#main").append(skills[1]);

var bio = {

    "name" : "Amourie",
    "surname" : "Fourie",
    "role" : "Front-End Developer in Brisbane, Australia",
    "welcomeMessage" : "...in ❤ with front-end dev & design... My motto is: \"Any product that needs a manual to work is broken.\" - Elon Musk",
    "extraBlurb" : "Online Curriculum Vitae",
    "biopic" : "images/amourie-profile.jpg",
    "contacts" : {
        "twitter" : "@amourief",
        "location" : "Brisbane",
        "email" : "email@email.com",
        "github" : "https://github.com/amourie/",
        "mobile" : "555-555-555",
        "facebook" : "http://www.facebook.com/profilename"
    },
    //skills is an array defined further above
    "skills" : skills

};

bio.display = function() {

    var bioRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(bioRole);

    var bioFullName = HTMLheaderName.replace("%data%",bio.name + " " + bio.surname + ": " + bio.extraBlurb);
    $("#header").prepend(bioFullName);

    var bioWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(bioWelcomeMsg);

    var bioPic = HTMLbioPic.replace("%data%",bio.biopic);
    $("#header").prepend(bioPic);

    //get bio.contacts properties
    var bioTwitter = bio.contacts.twitter;
    var bioLocation = bio.contacts.location;
    var bioEmail = bio.contacts.email;
    var bioGithub = bio.contacts.github;
    var bioMobile = bio.contacts.mobile;
    var bioFacebook = bio.contacts.facebook;
    var bioTempUrl = "";

    if (bioTwitter.length > 1)
    {
        $("#topContacts").append(HTMLtwitter.replace("%data%",bioTwitter));
        $("#footerContacts").append(HTMLtwitter.replace("%data%",bioTwitter));
    }
    if (bioLocation.length > 1)
    {
        $("#topContacts").append(HTMLlocation.replace("%data%",bioLocation));
        $("#footerContacts").append(HTMLlocation.replace("%data%",bioLocation));
    }
    if (bioEmail.length > 1)
    {
        $("#topContacts").append(HTMLemail.replace("%data%",bioEmail));
        $("#footerContacts").append(HTMLemail.replace("%data%",bioEmail));
    }
    if (bioGithub.length > 1)
    {
        $("#topContacts").append(HTMLgithub.replace("%data%",bioGithub));
        $("#footerContacts").append(HTMLgithub.replace("%data%",bioGithub));
    }
    if (bioMobile.length > 1)
    {
        $("#topContacts").append(HTMLmobile.replace("%data%",bioMobile));
        $("#footerContacts").append(HTMLmobile.replace("%data%",bioMobile));
    }

    $("#skillsDiv").append(HTMLskillsStart);
    if (bio.skills.length > 0)
    {
        for (var skill in bio.skills)
        {
           $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
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
        "degree" : "BA",
        "majors" : ["Computer Science","Multimedia"],
        "dates" : "2003",
        "url" : "http://www.up.ac.za/"

        },
        {
        "name" : "Auckland University",
        "location" : "Auckland",
        "degree" : "Project Management - Non-degree Purposes",
        "majors" : ["NDP"],
        "dates" : "2010",
        "url" : "https://www.auckland.ac.nz/"
        },
        {
        "name" : "Umbraco",
        "location" : "Auckland",
        "degree" : "Non-degree Purposes",
        "majors" : ["NDP"],
        "dates" : "2013",
        "url" : "http://www.umbraco.com/"
        },
                {
        "name" : "Udacity - Front-End Nano-degree",
        "location" : "Auckland",
        "degree" : "Nano-degree",
        "majors" : ["Front-End Web Development"],
        "dates" : "2015",
        "url" : "http://www.udacity.com/"
        }
    ],

    "onlineCourses" : [
    {
        "title": "JavaScript Basics",
        "url" : "www.teamtreehouse.com",
        "school" : "Team Tree House",
        "date" : "2014",
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

        eduName = HTMLschoolName.replace("%data%",education.schools[school].name);
        $('.education-entry:last').append(eduName);

        eduDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $('.education-entry:last').append(eduDegree);

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
                "employer" : "IT Event Management",
                "title" : "Webmaster",
                "location" : "Johannesburg, South Africa",
                "dates" : "2000 - 2003",
                "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget imperdiet risus, non blandit erat. Ut suscipit neque ac est imperdiet, id volutpat lorem semper."
            },
             {
                "employer" : "Nanjing University of Finance and Economics",
                "title" : "English Teacher",
                "location" : "Nanjing, China",
                "dates" : "2000 - 2003",
                "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget imperdiet risus, non blandit erat. Ut suscipit neque ac est imperdiet, id volutpat lorem semper."
            },
              {
                "employer" : "NZME. New Zealand Media",
                "title" : "Webmaster, Front-End Developer",
                "location" : "Nanjing, China",
                "dates" : "2000 - 2003",
                "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget imperdiet risus, non blandit erat. Ut suscipit neque ac est imperdiet, id volutpat lorem semper."
            },
            {

                "employer" : "Microsoft South Africa",
                "location" : "Pretoria, South Africa",
                "title" : "Web Manager",
                "city" : "auckland",
                "dates" : "2000 - 2003",
                "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget imperdiet risus, non blandit erat. Ut suscipit neque ac est imperdiet, id volutpat lorem semper."
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



//******************STARTS X AND Y CLICK LOCATION STARTS HERE***********************************//
$(document).click(function(loc) {

    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

function logClicks(x,y)
{

    console.log("This is X,Y location of your mouseclick " + x + ", " + y);
}

//******************STARTS X AND Y CLICK LOCATION ENDS HERE***********************************//


/*UNNECESSARY CODE FOLLOWS BELOW - part of JavaScript coursework - therefore included with submission so I can refer to it where necessary.



//remove html angle brackets with this code below:
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");


    return newHTML;
};

//when this button is clicked, a name like SeBastian alexander Thrun should appear up the top...


var name = bio.name;
console.log("bio.name " + name);
function inName(name){
    //console.log("Received name parameter is " + name);
    var nameArray = name.split(" ");
    //nameCombo[0].toUpperCase();
    var length = nameArray.length;
    var mergedName = "";
    //console.log("surname in caps " + nameArray[length - 1]);
    //console.log("Merged name is " + mergedName);
    for (var x = 0; x < length-1; x++)
    {
        //ensure a name entered like sEbastian is lowercased
        var capitalized = nameArray[x].substr(0,1).toUpperCase() + nameArray[x].substring(1).toLowerCase();
        //console.log("Capitalised name is " + capitalized);
        //nameArray[item] = capitalized;
        mergedName += capitalized + " ";
       // console.log("Merged name is " + mergedName);
    }
    //getting the last array item which is the surname and making it all CAPS
    nameArray[length - 1] = nameArray[length - 1].toUpperCase();

    //adding surname to the returned string
    mergedName += nameArray[length-1];
    //console.log("Merged name is " + mergedName);
    //console.log(typeof(mergedName));
    return mergedName;
}

//console.log(inName("sebastian alex thrun"));
$("#main").append(internationalizeButton);


var workObj = {

    "jobTitle" : "web person",
    "yearsWorked" : 8,
    "city": "Brisbane",
    "company": "Triple P"
}

var eduObj = {

    "uni" : "University of Pretoria",
    "degree" : "B.IS Specialization in Multimedia",
    "year": 2003

}
$("#main").append("<br>Current Position is: " + workObj.jobTitle);
$("#main").append("<br>Current Position is: " + eduObj.degree);

var awesomethoughts = "these are my awesome thoughts";

 var funThoughts = awesomethoughts.replace("awesome","fun");
 console.log(funThoughts);

$("#main").append(funThoughts);


//"cAmEROn PittMAN" into "Cameron PITTMAN". Your answer should be a single string saved to the variable called finalName.

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var nameSplits = finalName.split(" ");

    nameSplits[0] = nameSplits[0].toLowerCase();
    nameSplits[0] = nameSplits[0].substring(0,1).toUpperCase() + nameSplits[0].substring(1);
    nameSplits[1] = nameSplits[1].toUpperCase();

    finalName = nameSplits.join(" | ");
    // Don't delete this line!
    return finalName;
}


console.log(nameChanger(name));



function locationizer(workObj){
   var locationsArray = [];

   for (item in workObj.jobs)
   {
    var location = workObj.jobs[item].location;
    locationsArray.push(location);
    console.log(location);
   }
   return locationsArray;
}

console.log(locationizer(work));


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});


var sampleArray = [4,5,7,6,7,8,9,12];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    /* Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];

    // Your code goes in here!
    newArray = _array;
    /*for (var i = 0; i < newArray.length; i++) {
     console.log(newArray[i]);
    }
    //newArray[newArray.length-1] = newArray[newArray.length-1] + 1;
    newArray[newArray.length-1]++;
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

*/


