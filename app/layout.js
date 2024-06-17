import MainHeader from '@/components/main-header'
import './globals.css'

export const metadata = {
	title: 'Blog',
	description: 'Zapraszamy na naszego bloga',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
        <div id="page">
				<MainHeader />
				{children}
        </div>
			</body>
		</html>
	)
}
