import { useEffect, useState } from 'react'
import {
	Container,
	Item,
	ItemBox,
	PayButton,
	Price,
	QuantityBox,
	TitleBox,
} from './styled'

export interface IItem {
	id: number
	name: string
	image: string
	price: number
	quantity: number
}

export const Ticket = ({ products }: { products: IItem[] }) => {
	const [items, setItems] = useState(products)
	const [total, setTotal] = useState<number>(0)
	const [discount, setDiscount] = useState<number>(0)

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function addItem(item: IItem) {
		const index = items.findIndex((i) => i.id === item.id)
		if (index === -1) {
			setItems([...items, { ...item, quantity: 1 }])
		} else {
			const newItems = [...items]
			newItems[index].quantity += 1
			setItems(newItems)
		}
		calculateTotal()
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function removeItem(item: IItem) {
		const index = items.findIndex((i) => i.id === item.id)
		if (index !== -1) {
			if (items[index].quantity > 1) {
				const newItems = [...items]
				newItems[index].quantity -= 1
				setItems(newItems)
			} else {
				const newItems = [...items]
				newItems.splice(index, 1)
				setItems(newItems)
			}
		}
		calculateTotal()
	}

	function calculateTotal() {
		const total = items.reduce(
			(acc, item) => acc + item.price * item.quantity,
			0
		)
		const discount = Math.floor(total > 1000 ? total * 0.1 : 0)
		setTotal(total)
		setDiscount(discount)
	}

	useEffect(() => {
		calculateTotal()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items])

	return (
		<Container>
			<h2>Оплата</h2>
			<ul>
				{items.map((item) => (
					<ItemBox key={item.id}>
						<Item>
							<img src={item.image} alt={item.name} height={96} width={96} />
							<div>
								<TitleBox>
									<h3>{item.name}</h3>
									<Price>Цена: {item.price}$</Price>
								</TitleBox>

								<QuantityBox>
									<button onClick={() => addItem(item)}>+</button>
									<p>Количество: {item.quantity}</p>
									<button onClick={() => removeItem(item)}>-</button>
								</QuantityBox>
							</div>
						</Item>
					</ItemBox>
				))}
			</ul>
			<h3>Подитог: {total}</h3>
			<h3>Скидка: {discount}</h3>
			<PayButton onClick={() => alert('оплата...')}>
				Оплатить {total - discount} $
			</PayButton>
		</Container>
	)
}
