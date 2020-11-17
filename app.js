const activeButton = (button) => {
	const contentPartId = button.dataset.id
	const buttons = document.querySelectorAll(".cs-btn-type")
	const contentPartSection = document.querySelectorAll(".content-part")
	// remove class active-type and show-section
	buttons.forEach((item) => item.classList.remove("active-type"))
	contentPartSection.forEach((item) => item.classList.remove("show-section"))
	// add class active-type and show-section
	button.classList.add("active-type")
	document.querySelector(`#${contentPartId}`).classList.add("show-section")
}

const redirectTo = (url) => {
	window.location.href = url
}

// const loadContentHome = () => {
// 	let rowContent = ''
// 	let columnContent = ''


// }