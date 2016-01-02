/*
This is empty on purpose! Your code to build the resume will go here.
 */
// --- contacts --- //
var bio = {
    name: 'Selina Highstein',
    role: 'Web Developer',
    contacts: {
        email: 'selina@shighstein.com',
        mobile: '646 420 4782',
        github: 'https://github.com/Shighstein/frontend-nanodegree-resume.git',
        location: 'New York City, NY'
    },
    welcomeMessage: 'My first online resume! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie lorem non varius gravida. ',
    skills: [
        'JavaScript',
        'CSS3',
        'UX'
    ],
    biopic: 'http://tobyamidornutrition.com/wp-content/uploads/2013/03/GF-runners.jpg',

    display: function() {

        $("#header").prepend(HTMLheaderRole.replace("%data%", this.role))
            .prepend(HTMLheaderName.replace("%data%", this.name))
            .append(HTMLbioPic.replace("%data%", escapeChar(this.biopic)))
            .append(HTMLwelcomeMsg.replace("%data%", escapeChar(bio.welcomeMessage)));

        $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", escapeChar(this.contacts.email)))
            .append(HTMLmobile.replace("%data%", escapeChar(this.contacts.mobile)))
            .append(HTMLlocation.replace("%data%", escapeChar(this.contacts.location)))
            .append(HTMLgithub.replace("%data%", escapeChar(this.contacts.github)));


        // skills
        var numSkills = this.skills.length;
        if (numSkills) {
            $("#header").append(HTMLskillsStart);

            for (var i = 0; i < numSkills; i++) {
                $("#skills").append(HTMLskills.replace("%data%", escapeChar(this.skills[i])));
            }
        }
    }
};

// --- work experence --- //
var work = {
    'jobs': [{
        employer: 'Bloomberg',
        title: 'SI UI dev',
        dates: 'Jan, 2008 to Present',
        location: 'New York City',
        description: 'The team provides the platform for the other application developers to create and maintain Bloomberg terminal applications. I\'m responsible for the styling of all widgets as well as widgets behavior.'
    }, {
        employer: 'Mitsubishi UFJ',
        title: 'User Support',
        dates: 'Sept, 2007 to December, 2007',
        location: 'New York City',
        description: 'Helped to support end user on their financial softwares such as Reuters 2000 and Bloombeg Terminal.  Alsp helpd to cerate analysis on user issues.'
    }, {
        employer: 'Mitsui Co.',
        title: 'Assistant System Administrator',
        dates: 'Dec, 2005 to Sept, 2007',
        location: 'white Plains, NY',
        description: ''
    }],
    display: function() {
        if (this.jobs.length) {
            var myJobs = this.jobs;

            if (myJobs) {
                myJobs.forEach(function(job) {
                    $("#workExperience").append(HTMLworkStart);
                    $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", escapeChar(job.employer)) +
                            HTMLworkTitle.replace("%data%", escapeChar(job.title)))
                        .append(HTMLworkDates.replace("%data%", escapeChar(job.dates)))
                        .append(HTMLworkLocation.replace("%data%", escapeChar(job.location)))
                        .append(HTMLworkDescription.replace("%data%", escapeChar(job.description)));
                });
            }
        }
    }
};

// --- educations --- //
var education = {
    schools: [{
        name: 'Hunter College',
        location: 'New York City',
        degree: 'Bachelor of Arts',
        majors: ['Computer Science'],
        dates: 'Sept, 2009',
        url: 'www.cuny.com/hunter'
    }, {
        name: 'Seneca College',
        location: 'Toronto, ON',
        degree: 'Diploma',
        majors: ['General Business'],
        date: 'May, 1998',
        url: 'www.seneca.ca'
    }, ],
    online: [{
        title: 'Font-end Web Developer Nanodegree',
        school: 'Udacity',
        date: '03-31-2016',
        url: 'www.udacity.com'
    }],
    display: function() {
        var schools = this.schools;
        var school;

        if (schools) {
            for (var i = 0, len = schools.length; i < len; i++) {

                school = schools[i];
                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) +
                        HTMLschoolDegree.replace("%data%", school.degree))
                    .append(HTMLschoolDates.replace("%data%", school.time))
                    .append(HTMLschoolLocation.replace("%data%", school.location));

                school.majors.forEach(function(major) {
                    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
                });


            }
        }

        var onlineClasses = this.online;

        if (onlineClasses) {
            if (onlineClasses.length) {
                $("#education").append(HTMLonlineClasses);

                for (var i = 0, len = onlineClasses.length; i < len; i++) {
                    onlineClasses.forEach(function(school) {
                        $("#education").append(HTMLschoolStart);

                        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", school.title) +
                                HTMLonlineSchool.replace("%data%", school.school))
                            .append(HTMLonlineDates.replace("%data%", school.date))
                            .append(HTMLonlineURL.replace("%data%", school.url));
                    });
                }
            }
        }
    }
};

// --- projects --- //
var projects = {
    projects: [{
        title: 'Project 1',
        dates: 'Nov to Dec',
        description: 'Description of Project 1.  Bacon ipsum dolor amet ball tip prosciutto sausage hamburger alcatra strip steak. Biltong ball tip picanha frankfurter shankle swine pig ham pastrami rump. Jerky boudin capicola, chuck turkey t-bone shoulder shank ground round shankle ham alcatra meatball strip steak bresaola. Shoulder chicken chuck short ribs prosciutto ground round bacon. Jowl brisket cow, ribeye prosciutto sirloin chicken rump turducken. Turducken t-bone jerky pork chop turkey. Pork leberkas venison andouille pastrami.',
        images: ['http://i.imgur.com/04N7YAC.jpg', 'http://i.imgur.com/7FDwEnh.jpg']
    }, {
        title: 'Project 2',
        dates: 'Nov to Dec',
        description: 'Description of Project 2.  Shoulder shankle salami, landjaeger corned beef cow meatball cupim filet mignon andouille hamburger ball tip prosciutto bacon chicken. Cupim swine prosciutto, porchetta biltong filet mignon ham hock ground round meatloaf kielbasa kevin spare ribs sirloin meatball. Short loin t-bone sausage, ball tip tri-tip leberkas shank. Fatback strip steak biltong, ribeye kevin rump porchetta pork chop ball tip shoulder. Bresaola flank turducken frankfurter chicken filet mignon landjaeger sausage doner spare ribs kielbasa meatloaf pork chop corned beef.',
        images: ['http://i.imgur.com/dY7MN8o.jpg']
    }],
    display: function() {
        var projects = this.projects;

        if (projects) {
            for (var i = 0, numProjs = projects.length; i < numProjs; i++) {
                $("#projects").append(HTMLprojectStart);
                var proj = this.projects[i];

                var formattedProjTitle = HTMLprojectTitle.replace("%data%", escapeChar(proj.title));
                var formattedProjDates = HTMLprojectDates.replace("%data%", escapeChar(proj.dates));
                var formattedProjDescription = HTMLprojectDescription.replace("%data%", escapeChar(proj.description));

                $(".project-entry:last").append(formattedProjTitle)
                    .append(formattedProjDates)
                    .append(formattedProjDescription);

                proj.images.forEach(function(img) {
                    var formattedProjImage = HTMLprojectImage.replace("%data%", img);
                    $(".project-entry:last").append(formattedProjImage);
                });
            }
        }
    }
};


// ---- main functions ---- //
bio.display();
education.display();
projects.display();
work.display();


// --- Utility --- //
function escapeChar(orig) {
    return orig.replace('/</g', '&lt;').replace('/>/g', '&gt;');
}


// maps

$("#mapDiv").append(googleMap);