function openProjects() {

	let projects = document.getElementById("projectsDIV");
	let cv = document.getElementById("CVDIV");
	let essays = document.getElementById("essaysDIV");
	if (cv.style.display !== "none") {
		cv.style.display = "none";
	}
	if (essays.style.display !== "none") {
		essays.style.display = "none";
	}
	if (window.getComputedStyle(projects).getPropertyValue('display') === "none") {
		projects.style.display = "block";
	} else {
		projects.style.display = "none";
	}
}

function openEssays() {
	let projects = document.getElementById("projectsDIV");
	let cv = document.getElementById("CVDIV");
	let essays = document.getElementById("essaysDIV");
	if (cv.style.display !== "none") {
		cv.style.display = "none";
	}
	if (projects.style.display !== "none") {
		projects.style.display = "none";
	}
	if (window.getComputedStyle(essays).getPropertyValue('display') === "none") {
		essays.style.display = "block";
	} else {
		essays.style.display = "none";
	}
}

function openResume() {
	let projects = document.getElementById("projectsDIV");
	let cv = document.getElementById("CVDIV");
	let essays = document.getElementById("essaysDIV");
	if (projects.style.display !== "none") {
		projects.style.display = "none";
	}
	if (essays.style.display !== "none") {
		essays.style.display = "none";
	}
	if (window.getComputedStyle(cv).getPropertyValue('display') === "none") {
		cv.style.display = "block";
	} else {
		cv.style.display = "none";
	}
}

function openModal() {
	document.querySelector(".bg-modal").style.display = "flex";
}

function clickClose() {
	document.querySelector(".bg-modal").style.display = "none";
}