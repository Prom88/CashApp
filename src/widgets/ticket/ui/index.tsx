import { useEffect, useState } from 'react'
import {
	Container,
	Image,
	Item,
	ItemBox,
	Name,
	PayButton,
	Price,
	Quantity,
	Title,
	TitleBox,
	Total,
} from './styled'

export interface IItem {
	id: number
	name: string
	image: string
	price: number
	quantity: number
}

export const Ticket = ({ products }: { products: IItem[] }) => {
	const items = products
	const [total, setTotal] = useState<number>(0)

	function calculateTotal() {
		const total = items.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		)

		setTotal(total)
	}

	useEffect(() => {
		calculateTotal()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items])

	return (
		<Container>
			<Title>Чек продажи</Title>
			<ul>
				{items.map((item) => (
					<ItemBox key={item.id}>
						<Item>
							<Image src={item.image} alt={item.name} height={96} width={96} />

							<TitleBox>
								<Name>{item.name}</Name>
								<Price>
									Цена:{' '}
									{new Intl.NumberFormat('ru-RU', {
										style: 'currency',
										currency: 'RUB',
									}).format(item.price)}
								</Price>
							</TitleBox>
							<Quantity>x{item.quantity}</Quantity>
							<Total>
								{new Intl.NumberFormat('ru-RU', {
									style: 'currency',
									currency: 'RUB',
								}).format(item.price * item.quantity)}
							</Total>
						</Item>
					</ItemBox>
				))}
			</ul>

			<PayButton onClick={() => alert('оплата...')}>
				<p>ИТОГО:</p>
				<p>
					{new Intl.NumberFormat('ru-RU', {
						maximumSignificantDigits: 3,
					}).format(total)}{' '}
					₽
				</p>
			</PayButton>
		</Container>
	)
}
