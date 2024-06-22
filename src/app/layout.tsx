import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

export const metadata: Metadata = {
	title: 'Patrick O.',
	description: 'Personal Portfolio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<ThemeProvider>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
