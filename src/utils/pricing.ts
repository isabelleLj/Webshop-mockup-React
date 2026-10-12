const DISCOUNT_CATEGORY = "groceries";
const DISCOUNT_RATE = 0.2;

export function hasDiscount(category: string): boolean {
  return category === DISCOUNT_CATEGORY;
}

export function getDiscountedPrice(
  price: number,
  category: string,
): number {
  if (!hasDiscount(category)) {
    return price;
  }

  return price * (1 - DISCOUNT_RATE);
}

export function getOriginalPrice(
  discountedPrice: number,
  category: string,
): number {
  if (!hasDiscount(category)) {
    return discountedPrice;
  }

  return discountedPrice / (1 - DISCOUNT_RATE);
}