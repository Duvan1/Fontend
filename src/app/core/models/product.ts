import { Classification } from './classification';
import { Image } from './image';

export class Product {
	id: number;
	name: string;
	description: string;
	price: string;
	display_price: string;
	available_on: string;
	slug: string;
	// meta_title: string;             // meta title is present in schema but it is not returned by the spree Api.
	meta_description: string;
	meta_keywords: string;
	taxon_ids: number[];
	stock: number;
	classifications: Classification
	images: Image[];
}
