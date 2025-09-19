import type { ReactNode } from 'react';

function LayoutWrapper({ children }: { children: ReactNode }) {
	return (
		<div className='bg-black py-3'>
			<div className=' md:container mx-auto'>
				<div className='flex flex-col gap-4'>{children}</div>
			</div>
		</div>
	);
}

export default LayoutWrapper;
