document.addEventListener('DOMContentLoaded', function () {
	// Находим все слайдеры на странице
	const sliders = document.querySelectorAll('[data-slider]')

	// Проходим по каждому слайдеру
	sliders.forEach(slider => {
		const sliderInner = slider.querySelector('.custom-slider-inner')
		const slides = slider.querySelectorAll('.custom-slide')
		const prevButton = slider.querySelector('.custom-slider-prev')
		const nextButton = slider.querySelector('.custom-slider-next')
		const indicators = slider.querySelectorAll('.custom-indicator')

		let currentIndex = 0

		// Функция для обновления слайдера
		function updateSlider() {
			sliderInner.style.transform = `translateX(-${currentIndex * 100}%)`
			if (indicators) {
				indicators.forEach((indicator, index) => {
					indicator.classList.toggle('active', index === currentIndex)
				})
			}
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

		// Индикаторы (если есть)
		if (indicators) {
			indicators.forEach((indicator, index) => {
				indicator.addEventListener('click', () => {
					currentIndex = index
					updateSlider()
				})
			})
		}
	})
})
