import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

interface BtnProps {
	btnTitle: string;
	btnDescription: string;
}

function Button({ btnTitle, btnDescription }: BtnProps) {
	console.log({ clientId: import.meta.env.VITE_CLIENT_ID });
	return (
		<PayPalScriptProvider
			options={{ clientId: import.meta.env.VITE_CLIENT_ID }}
		>
			<PayPalButtons style={{ layout: 'horizontal' }} />
			<button className='btn-grad flex flex-col'>
				<a>
					<span className='text-(--btn-text-color) text-2xl roboto-condensed-bold'>
						{btnTitle}
					</span>
					<br />
					<span className='text-(--btn-text-color) text-xs font-extralight font-'>
						{btnDescription}
					</span>
				</a>
			</button>
		</PayPalScriptProvider>
	);
}

export default Button;
