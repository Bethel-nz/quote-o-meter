import getRandomQuote from '@/lib/get-RandomQuote';
import Quote from '@/components/Quote/Quote';

export default async function Home() {
	const randomQuote = await getRandomQuote();

	return <Quote {...randomQuote} />;
}
