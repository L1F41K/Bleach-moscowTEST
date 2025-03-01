document.addEventListener('DOMContentLoaded', function () {
	const filterButton = document.querySelector('.filter-button')
	const filterDropdown = document.querySelector('.filter-dropdown')

	// Открываем/закрываем выпадающий список
	filterButton.addEventListener('click', function (e) {
		e.preventDefault() // Предотвращаем действие по умолчанию
		filterDropdown.classList.toggle('active')
	})

	// Закрываем выпадающий список при клике вне его
	document.addEventListener('click', function (e) {
		if (!filterDropdown.contains(e.target)) {
			filterDropdown.classList.remove('active')
		}
	})
})
