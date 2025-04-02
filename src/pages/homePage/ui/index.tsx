import data from '#shared/data.json'
import settings from '#shared/settings.json'

import { Carousel } from '#widgets/carousel/index.ts'
import { Ticket } from '../../../widgets/ticket'
import { FlexContainer } from './styled'

console.log(settings)

export const Home = () => {
	return (
		<>
			<FlexContainer
				style={{
					flexDirection: `${
						settings.products.position == 'left' ? 'row-reverse' : 'row'
					}`,
				}}
			>
				<Carousel settings={settings.carousel} />
				<Ticket trans={data} />
			</FlexContainer>
		</>
	)
}
