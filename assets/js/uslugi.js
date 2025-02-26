const sliderInner = document.querySelector('.custom-slider-inner')
const slides = document.querySelectorAll('.custom-slide')
const prevButton = document.querySelector('.custom-slider-prev')
const nextButton = document.querySelector('.custom-slider-next')
const indicators = document.querySelectorAll('.custom-indicator')

let currentIndex = 0

// Функция для обновления слайдера
function updateSlider() {
	sliderInner.style.transform = `translateX(-${currentIndex * 100}%)`
	indicators.forEach((indicator, index) => {
		indicator.classList.toggle('active', index === currentIndex)
	})
}

// Кнопка "Назад"
prevButton.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--
	} else {
		currentIndex = slides.length - 1
	}
	updateSlider()
})

// Кнопка "Вперед"
nextButton.addEventListener('click', () => {
	if (currentIndex < slides.length - 1) {
		currentIndex++
	} else {
		currentIndex = 0
	}
	updateSlider()
})

// Индикаторы
indicators.forEach((indicator, index) => {
	indicator.addEventListener('click', () => {
		currentIndex = index
		updateSlider()
	})
})
