import { useEffect, useState } from 'react'
import { Banner, CarouselBackground, Image } from './styled'

type TCarousel = {
	duration: number
	items: {
		url: string
	}[]
}

export const Carousel = ({ settings }: { settings: TCarousel }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isTransitioning, setIsTransitioning] = useState(false)

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === settings.items.length - 1 ? 0 : prevIndex + 1
		)
	}

	useEffect(() => {
		const animateTimer = setTimeout(() => {
			setIsTransitioning(true)
		}, settings.duration - 1000)

		const timer = setTimeout(() => {
			nextSlide()
			setIsTransitioning(false)
			clearTimeout(animateTimer)
		}, settings.duration)

		return () => clearTimeout(timer)
	}, [currentIndex, settings.duration])

	return (
		<Banner
			style={{
				backgroundImage: `url(${settings.items[currentIndex].url})`,
			}}
		>
			<CarouselBackground>
				<Image
					src={settings.items[currentIndex].url}
					height={visualViewport?.height}
					style={{
						transition: '0.5s ease-in-out',
						opacity: isTransitioning ? '0' : '1',
					}}
				/>
			</CarouselBackground>
		</Banner>
	)
}
