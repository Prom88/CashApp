import styled from 'styled-components'

export const Banner = styled.div`
	overflow: hidden;
	display: flex;
	justify-content: center;
	width: 75%;
	align-items: center;
	background-size: cover;
	background-position: center;
	min-height: 100%;
	user-select: none;
	pointer-events: none;

	@media (max-width: 1440px) {
		width: 60%;
	}
	@media (max-width: 1024px) {
		width: 50%;
	}
	@media (max-width: 768px) {
		width: 0;
	}
`
export const Logo = styled.img`
	min-width: 300px;
	user-select: none;
	pointer-events: none;
`

export const CarouselBackground = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px;
	backdrop-filter: blur(50px);
`
export const Image = styled.img`
	max-height: 100%;
	max-width: 100%;
	border: white solid 10px;
`
export const StyledCarousel = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	align-items: center;
	background-size: cover;
	background-position: center;
	min-height: 100%;
	user-select: none;
	pointer-events: none;
`
