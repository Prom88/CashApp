import { baseTheme } from '#shared/theme.ts'
import styled from 'styled-components'

export const FlexContainer = styled.div`
	display: flex;
	min-height: 100vh;
	min-width: 100vw;
`
export const Banner = styled.div`
	display: flex;
	justify-content: center;
	width: 75%;
	align-items: center;
	background-color: ${baseTheme.colors.blue};
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
