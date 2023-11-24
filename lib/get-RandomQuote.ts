import { connect } from '@planetscale/database';
import { config } from '@/db/config';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { quotes, authors, categories } from '@/db/schema';

import { eq } from 'drizzle-orm';

const prevQuoteObj = {
	prev: 1,
	setPrev: function (num: number) {
		this.prev = num;
	},
};

export default async function getRandomQuote(): Promise<Quote> {
	const connection = connect(config);
	const db = drizzle(connection);
	const results: Quote[] = await db
		.select({
			quote: quotes.quote,
			author: authors.author,
			category: categories.category,
		})
		.from(quotes)
		.innerJoin(authors, eq(quotes.authorId, authors.id))
		.innerJoin(categories, eq(quotes.categoryId, categories.id));

	let randomIdx = prevQuoteObj.prev as number;

	while (randomIdx === prevQuoteObj.prev) {
		randomIdx = Math.floor(Math.random() * results.length) as number;
	}

	prevQuoteObj.setPrev(randomIdx);

	return results[randomIdx];
}
