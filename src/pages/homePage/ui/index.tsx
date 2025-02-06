import { Ticket } from '../../../widgets/ticket'
import { Banner, FlexContainer, Header } from './styled'

import { IItem } from '../../../widgets/ticket'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items: IItem[] = [
	{
		id: 1,
		name: 'iPhone 12',
		image:
			'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604021664000',
		price: 999,
		quantity: 1,
	},
	{
		id: 2,
		name: 'MacBook Pro',
		image: 'https://iceapple.ru/image/catalog/MacPro/2022-07-26-18.11.28.jpg',
		price: 1299,
		quantity: 1,
	},
	{
		id: 3,
		name: 'AirPods Pro',
		image:
			'https://twigo.ru/center/iblock/af7/uj3z0qxhgi7kdxhvmgpdc7ueicgvmccx/besprovodnye_naushniki_airpods_pro_2nd_generation_usb_c.webp',
		price: 249,
		quantity: 1,
	},
]

export const Home = () => {
	return (
		<>
			<Header />
			<FlexContainer>
				<Banner>
					<img
						src='https://cdn.modulbank.ru/images-new/partners/offers/cloudshop.png'
						alt='~'
						width={650}
					/>
				</Banner>
				<Ticket products={items} />
			</FlexContainer>
		</>
	)
}
