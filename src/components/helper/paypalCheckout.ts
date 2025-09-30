import axios from 'axios';

export async function handleCheckout() {
	try {
		// Optional: you can return a loading state from the caller if needed
		const { data } = await axios.post('https://paypal-server-yujz.onrender.com/create-order');
		const orderId = data.id;

		// Redirect to PayPal approval
		window.location.href = `https://www.sandbox.paypal.com/checkoutnow?token=${orderId}`;
	} catch (err) {
		console.error('Checkout error:', err);
		alert('Something went wrong!');
	}
}
