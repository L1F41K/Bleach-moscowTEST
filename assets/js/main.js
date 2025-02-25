function toggleMenu() {
	const menu = document.querySelector('.burger-menu')
	menu.classList.toggle('open')
}
function toggleMenu2() {
	const menu = document.querySelector('.burger-menu2')
	menu.classList.toggle('open')
}
var block = document.getElementById('myBlock')
var body = document.querySelector('body')

function toggleBlock() {
	if (block.style.display === 'none' || block.style.display === '') {
		block.style.display = 'block'
		body.classList.add('overflow-hidden')
	} else {
		block.style.display = 'none'
		body.classList.remove('overflow-hidden')
	}
}
document
	.getElementById('dropdownButton')
	.addEventListener('click', function (event) {
		event.preventDefault() // Предотвращаем стандартное поведение
		window.location.href = 'uslugi.html' // Переход на страницу
	})

lightGallery(document.getElementById('gallery-zoom-from-origin-demo'))
