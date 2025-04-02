import { baseTheme } from '#shared/theme.ts'
import styled from 'styled-components'

export const Container = styled.div`
	max-height: 100vh;
	background-color: ${baseTheme.colors.white};
	width: 25%;
	display: flex;
	flex-direction: column;
	@media (max-width: 1440px) {
		width: 40%;
	}
	@media (max-width: 1024px) {
		width: 50%;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`

export const ItemBox = styled.div`
	border-bottom: 1px solid black;
	border-color: ${baseTheme.colors.gray};
`
export const Title = styled.h2`
	font-size: 32px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: ${baseTheme.colors.gray};
	text-align: center;
`

export const List = styled.div`
	overflow-y: scroll;
	max-height: 75%;
	scrollbar-width: thin; /* "auto" или "thin" */
	scrollbar-color: ${baseTheme.colors.gray} ${baseTheme.colors.white};
`

export const Item = styled.li`
	margin: 0 20px 0 25px;
	gap: 10px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 90px;
`

export const TitleBox = styled.div`
	max-height: 100%;
	max-width: 400px;
	overflow: hidden;
	text-overflow: ellipsis;
`
export const Name = styled.span`
	font-size: 16px;
	overflow: hidden;
	text-overflow: ellipsis;
	max-height: 70px;
	display: block;
`

export const Price = styled.p`
	font-size: 11px;
	color: ${baseTheme.colors.gray};
`
export const Quantity = styled.p`
	font-size: 18px;
	color: ${baseTheme.colors.black};
	color: ${baseTheme.colors.gray};
	justify-self: start;
`

export const Total = styled.p`
	margin-left: auto;
	font-size: 18px;
	color: ${baseTheme.colors.black};
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const PayButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: auto;

	align-self: stretch;
	min-width: calc(100% - 50px);
	min-height: 90px;
	margin: 0 25px 25px;
	margin-top: auto;
	border: none;
	color: white;
	font-size: 36px;
	font-weight: semi-bold;
	border-radius: 17px;
	background-color: ${baseTheme.colors.blue};
`

export const FinalTotal = styled.div`
	min-width: 80%;
	display: flex;
	justify-content: space-between;
`

export const Image = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 8px;
`
