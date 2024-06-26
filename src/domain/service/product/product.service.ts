import { Product } from "@domain/entity/product";

export class ProductService {
	static increasePrices(products: Product[], percentage: number) {
		products.forEach(product => {
			const valueOfIncrease = product.price / 100 * percentage;
			product.changePrice(product.price + valueOfIncrease);
		});
	}

}
