import axios from 'axios';

export async function handleStripeCheckout() {
	try {
		console.log('In Stripe checkout');
		const { data } = await axios.post(
			'https://paypal-server-yujz.onrender.com/create-stripe-session'
		);

		// const { data } = await axios.post(
		// 	'http://localhost:3001/create-stripe-session'
		// );

		// Redirect to Stripe’s checkout page
		window.location.href = data.url;
	} catch (err) {
		console.error('Stripe checkout error:', err);
		alert('Something went wrong with Stripe checkout!');
	}
}
