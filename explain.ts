/*    TYPES   */
// const caluculatePrice = (price: number, quantity: number) => {
// 	return price * quantity
// }

/* TYPES   */
const calculatePrice = (price: USD, quantity: Quantity): USD => {
	// We can still do math on them because they are effectively numbers at runtime
	return (price * quantity) as USD
}

/* RESTAURANT DOMAIN  */
/*   user orders 3 pizzas for $10  */

// const total = calculatePrice(45651321, -3)

/* TYPESCRIP THING  */

// Define the Brand utility
type Brand<K, T> = K & { __brand: T }

// Domain-specific types
type USD = Brand<number, "USD">
type Quantity = Brand<number, "Quantity">

const makePrice = (value: number): USD => {
	if (value < 0) throw new Error("Price cannot be negative")
	if (value > 1000)
		throw new Error("Price seems suspiciously high for a pizza!")
	return value as USD
}

const makeQuantity = (value: number): Quantity => {
	if (value <= 0) throw new Error("Quantity must be positive")
	if (!Number.isInteger(value))
		throw new Error("Quantity must be a whole number")
	return value as Quantity
}

// const pizzaPrice = makePrice(-10)
// const pizzaQuantity = makeQuantity(3)

// const totalCost = calculatePrice(pizzaPrice, pizzaQuantity)
// console.log(`Total cost: $${totalCost}`)

/*  Now if we try to do something like this:  */
// const invalidTotal = calculatePrice(45651321, -3) // <-- TypeScript error!

try {
	// These validators ensure the numbers make sense before the function ever runs
	const pizzaPrice = makePrice(-10)
	const pizzaCount = makeQuantity(3)

	const total = calculatePrice(pizzaPrice, pizzaCount)
	console.log(`Total is $${total}`) // Total is $30

	// This will throw a runtime error immediately: "Quantity must be positive"
	// const badCount = makeQuantity(-3)
} catch (e: any) {
	console.error(e.message)
}
