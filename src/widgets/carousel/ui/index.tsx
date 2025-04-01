import { useEffect, useState } from 'react'
import { Banner, CarouselBackground, Image, StyledCarousel } from './styled'

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
		const vanishTimer = setTimeout(() => {
			setIsTransitioning(true)
		}, settings.duration * 0.85)

		const appearanceTimer = setTimeout(() => {
			setIsTransitioning(false)
		}, settings.duration * 0.15)

		const timer = setTimeout(() => {
			nextSlide()
			clearTimeout(appearanceTimer)
			clearTimeout(vanishTimer)
		}, settings.duration)

		return () => clearTimeout(timer)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentIndex, settings.duration])

	return (
		<Banner>
			{settings.items.map((item, index) => (
				<StyledCarousel
					id={index.toString()}
					style={{
						display: index === currentIndex ? 'flex' : 'none',
						backgroundImage: `url(${item.url})`,
					}}
				>
					<CarouselBackground>
						<Image
							src={item.url}
							height={visualViewport?.height}
							style={{
								display: index === currentIndex ? 'flex' : 'none',
								opacity: isTransitioning ? 0 : 1,
								transition: `${(settings.duration * 0.15) / 1000}s ease-in-out`,
							}}
						/>
					</CarouselBackground>
				</StyledCarousel>
			))}
		</Banner>
	)
}
