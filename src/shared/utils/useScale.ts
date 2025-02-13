import { useEffect, useState } from 'react'

export const useScale = () => {
	const [scale, setScale] = useState(1)

	const updateScale = () => {
		const viewportWidth = window.innerWidth

		const baseWidth = 1400
		const newScale = Math.min(viewportWidth / baseWidth, 1)
		// console.log(`newscale: ${newScale}`);
		setScale(newScale)
	}

	useEffect(() => {
		updateScale()
		window.addEventListener('resize', updateScale)

		return () => window.removeEventListener('resize', updateScale)
	}, [])

	return scale
}
