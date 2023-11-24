import { NextResponse } from 'next/server';
import getAllQuotes from '@/lib/get-AllQuotes';

export const GET = async (request: Request) => {
	const quotes = await getAllQuotes();

	return NextResponse.json(quotes);
};
