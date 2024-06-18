import logo from '@/assets/logo.jpg'
import Link from 'next/link'

export default function HomePage() {
	return (
		<div id='home'>
			<img
				src={logo.src}
				alt='Nowości'
			/>
			<h1>Blog - Next.js</h1>
			<p>Blog jest tutaj, aby dostarczać Ci wszystkie najnowsze wiadomości - zwięzłe i bezstronne!</p>

			<p>
				Ma na celu dostarczanie najnowszych wiadomości w zwięzły i bezstronny sposób. Dążymy do przekazywania informacji
				w sposób łatwy do zrozumienia i na temat. Chcemy Cię informować, nie przytłaczając zbędnymi informacjami.
			</p>

			<p>
				Zatrudniamy zespół oddanych dziennikarzy, którzy są zaangażowani w dostarczanie wiadomości w sposób sprawiedliwy
				i bezstronny. Nasz zespół pasjonuje się utrzymywaniem Cię na bieżąco z najnowszymi wiadomościami.
			</p>

			<p>
				<Link href='/news'>Przeczytaj najnowsze wpisy</Link>
			</p>
		</div>
	)
}
