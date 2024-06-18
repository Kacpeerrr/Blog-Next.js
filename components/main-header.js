import Link from 'next/link'
import NavLink from './nav-link'

export default function MainHeader() {
	return (
		<header id='main-header'>
			<div id='logo'>
				<Link href='/'>Blog - Next.js</Link>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink href='/news'>Najnowsze wpisy</NavLink>
					</li>
					<li>
						<NavLink href='/archive'>Wszystkie wpisy</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
