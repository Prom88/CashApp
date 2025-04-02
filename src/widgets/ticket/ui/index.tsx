import {
	Container,
	FinalTotal,
	Image,
	Item,
	ItemBox,
	List,
	Name,
	PayButton,
	Price,
	Quantity,
	Title,
	TitleBox,
	Total,
} from './styled'

import { useEffect, useRef } from 'react'

type TTicket = {
	discount_sum: number
	payments: {
		orders_sum: number
	}
	products: {
		qty: number
		_id: string
		price: number
		sum: number
		product: {
			name: string
		}
	}[]
}

// список товаров и итоговая сумма в shared/data.json
// список товаров: products: [{_id, price, sum, product: {name}],
// количество - ???
// итоговая сумма: payments: {orders_sum} (почти в самом низу)

export const Ticket = ({ trans }: { trans: TTicket }) => {
	const scrollRef = useRef<HTMLDivElement>(null)

	const scrollToBottom = () => {
		if (!scrollRef.current) return
		scrollRef.current.scrollTo({
			top: scrollRef.current.scrollHeight,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		scrollToBottom()
	}, [])

	return (
		<Container>
			<Title>Чек продажи</Title>
			<List ref={scrollRef}>
				{trans.products.map((item) => (
					<ItemBox key={item._id}>
						<Item>
							<Image
								src={
									'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBZDlSHxRAmyCLZMh68JQmFYb0whxSjwSm1g&s'
								}
								alt={'/'}
								height={96}
								width={96}
							/>
							<TitleBox>
								<Name>{item.product.name}</Name>
								<Price>
									Цена:{' '}
									{new Intl.NumberFormat('ru-RU', {
										style: 'currency',
										currency: 'RUB',
									}).format(item.price)}
								</Price>
							</TitleBox>
							<Quantity>x{item.qty * -1}</Quantity>
							<Total>
								{new Intl.NumberFormat('ru-RU', {
									style: 'currency',
									currency: 'RUB',
								}).format(item.sum)}
							</Total>
						</Item>
					</ItemBox>
				))}
			</List>

			<PayButton onClick={() => alert('оплата...')}>
				<FinalTotal>
					<p>ИТОГО:</p>
					<p>
						{new Intl.NumberFormat('ru-RU', {
							style: 'currency',
							currency: 'RUB',
						}).format(trans.payments.orders_sum)}{' '}
					</p>
				</FinalTotal>
			</PayButton>
		</Container>
	)
}
