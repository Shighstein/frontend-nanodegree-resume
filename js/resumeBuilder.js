/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name = "Selina Highstein";
var role = "Web Developer";

$("#header").prepend(HTMLheaderRole.replace("%data%", role));
$("#header").prepend(HTMLheaderName.replace("%data%", name));

// --- contacts --- //
var bio = {
	"name":"Selina Highstein",
	"role" : "Web Developer",
	"contacts" : {
		"email":"selina@shighstein.com",
		"mobile":"646 420 4782",
		"location" : "New York City, NY"
	},
	"github":"https://github.com/Shighstein/portfolio.git",
	"welcome_message":"My first online resume!",
	"skills" : [
		"JavaScript",
		"CSS3",
		"UX"
	]
};

bio.display = function() {
	
	// $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", escapeChar(bio.name)).replace("%data%", escapeChar(bio.role)));
	$("#topContacts").append(HTMLemail.replace("%data%", escapeChar(bio.contacts.email)));
	$("#topContacts").append(HTMLmobile.replace("%data%", escapeChar(bio.contacts.mobile)));
	$("#topContacts").append(HTMLlocation.replace("%data%", escapeChar(bio.contacts.location)));

	$("#topContacts").append(HTMLgithub.replace("%data%", escapeChar(bio.github)));
	
	// $("#topContacts").append(HTMLwelcomeMsg.replace("%data%", escapeChar(bio.welcome_message)));	

	// skills
	if(bio.skills && bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for(var i = 0; i < bio.skills.length; i++) {
			$("#skills").append(HTMLskills.replace("%data%", escapeChar(bio.skills[i])));
		}
	}
}

// --- work experiences --- //
var work = 	 {"jobs":
	[
		{
			"employer":"Bloomberg",
			"role":"SI UI dev",
			"dates":"Jan, 2008 to Present",
			"location":"New York City",
			"description":"The team provides the platform for the other application developers to create and maintain Bloomberg terminal applications. I'm responsible for the styling of all widgets as well as widgets behavior."
		},
		{
			"employer":"Mitsubishi UFJ",
			"role":"Tech Support",
			"dates":"Sept, 2007 to December, 2007",
			"location":"New York City",
			"description":"Helped to support end user on their financial softwares such as Reuters 2000 and Bloombeg Terminal.  Alsp helpd to cerate analysis on user issues."
		},
		{
			"employer": "Mitsui Co.",
			"role":"Assistant System Administrator",
			"dates":"Dec, 2005 to Sept, 2007",
			"location":"white Plains, NY",
			"description":""
		}
	]
};

work.display = function() {
	if(work.jobs && work.jobs.length > 0 ) {
		var formattedWork;
		var myJobs = work.jobs;
		
		for(var job in myJobs) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", escapeChar(myJobs[job].employer)));
			$(".work-entry:last").append(HTMLworkTitle.replace("%data%", escapeChar(myJobs[job].role)));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", escapeChar(myJobs[job].dates)));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", escapeChar(myJobs[job].location)));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", escapeChar(myJobs[job].description)));
		}
	}
}

// --- educations --- //
var education = {
	"schools": [
		{	"name":"Hunter College",
			"degree":"Computer Science",
			"time":"Presnet",
			"location":"New York City"
		},
		{	"name":"Seneca College",
			"degree":"General Business",
			"time":"1998",
			"location":"Toronto, ON"
		},
	],
	"online": [
		{
			"name":"Udacity",
			"degree":"Font-end Web Developer Nanodegree",
			"location":"online"
		}
	]
};

education.display = function() {
	var school;
	var i;

	for(i in education.schools) {
		$("#education").append(HTMLschoolStart);
		school = education.schools[i];

		$(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
	}

	for(i in education.online) {
		$("#education").append(HTMLschoolStart);
		school = education.online[i];

		$(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", school.degree));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
	}	
}
 
// --- projects --- //
var project = {
	"projects": [
		{
			"title":"Project 1",
			"dates":"Nov to Dec",
			"description":"Description of Project 1",
			"image":"Project image"
		},
		{
			"title":"Project 2",
			"dates":"Nov to Dec",
			"description":"Description of Project 2",
			"image":"Project image"
		}
	]
};
	
project.display = function() {
	if(project.projects) {

		for(var i in project.projects)	{
			$("#projects").append(HTMLprojectStart);
			var proj = project.projects[i];

			var formattedProjTitle = HTMLprojectTitle.replace("%data%", escapeChar(proj.title));
			var formattedProjDates = HTMLprojectDates.replace("%data%", escapeChar(proj.dates));
			var formattedProjDescription = HTMLprojectDescription.replace("%data%", escapeChar(proj.description));
			var formattedProjImage = HTMLprojectImage.replace("%data%", escapeChar(proj.image));

			$(".project-entry:last").append(formattedProjTitle);
			$(".project-entry:last").append(formattedProjDates);
			$(".project-entry:last").append(formattedProjDescription);
			// $(".project-entry:last").append(formattedProjImage);

		}
	}
	
}

// ---- main functions ---- //
$("#main").prepend(internationalizeButton);
bio.display();
education.display();
project.display();
work.display();


// --- Utility --- //
function escapeChar(orig) {
	return orig.replace("/</g", "&lt;").replace("/>/g", "&gt;");
}

function inName() {
	var origName = bio.name.trim();
	return origName.split(" ")[0].slice(0, 1).toUpperCase() +
		   origName.split(" ")[0].slice(1).toLowerCase() +
		    " " + origName.split(" ")[1].toUpperCase();	
	
}

function locationizer(jobs) {
	var locations = [];

	for(var i in jobs) {
		var job = jobs[i];
		if(job.location) {
			locations.push(job.location);
		}
	}

	return locations;
}


// maps

$("#mapDiv").append(googleMap);
