import { Banner, FlexContainer, Header, Ticket } from './styled'

const Home = () => {
	return (
		<>
			<Header />
			<FlexContainer>
				<Banner>
					<img src='../../assets/cloudshop.png' alt='~' width={250} />
				</Banner>
				<Ticket>Оплата</Ticket>
			</FlexContainer>
		</>
	)
}

export default Home
