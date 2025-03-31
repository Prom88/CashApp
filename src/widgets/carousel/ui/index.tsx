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

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === settings.items.length - 1 ? 0 : prevIndex + 1
		)
	}

	useEffect(() => {
		const timer = setTimeout(() => {
			nextSlide()
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
				/>
			</CarouselBackground>
		</Banner>
	)
}
