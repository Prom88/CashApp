import styled from 'styled-components'

export const Container = styled.div`
	min-height: 100%;
	background-color: #f5f5f5;
	width: 40vw;
`
export const ItemBox = styled.div`
	border-bottom: 1px solid black;
`

export const Item = styled.li`
	flex-flow: row wrap;
	flex-wrap: wrap;
	display: flex;
	height: 130px;
`
export const TitleBox = styled.div`
	display: flex;
	width: 350px;
	height: 70px;
	justify-content: space-between;
`
export const Price = styled.p`
	justify-self: end;
	display: flex;
`

export const QuantityBox = styled.div`
	display: flex;
	height: 20px;
`

export const PayButton = styled.button`
	width: 100%;
	height: 96px;
	position: bottom;
	border: none;
	color: white;
	font-size: 36px;
	border-radius: 10px;
	background-color: rgb(4, 220, 22);
`
