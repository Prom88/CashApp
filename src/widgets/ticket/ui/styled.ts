import { baseTheme } from '#shared/theme.ts'
import styled from 'styled-components'

export const Container = styled.div`
	min-height: 100%;
	background-color: ${baseTheme.colors.white};
	width: 25%;
	display: flex;
	flex-direction: column;
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

export const Item = styled.li`
	margin: 0 20px 0 25px;
	gap: 10px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 90px;
`

export const TitleBox = styled.div`
	width: 400px;
`
export const Name = styled.p`
	font-size: 16px;
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
	justify-content: space-between;
	align-items: center;
	padding: 0 25px;

	align-self: stretch;
	width: calc(100% - 50px);
	height: 90px;
	margin: 0 25px 25px;
	margin-top: auto;
	border: none;
	color: white;
	font-size: 36px;
	font-weight: semi-bold;
	border-radius: 17px;
	background-color: ${baseTheme.colors.blue};
`
export const Image = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 8px;
`
