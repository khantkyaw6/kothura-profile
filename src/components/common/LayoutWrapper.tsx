import { Outlet } from 'react-router';
import { cn } from '../../lib/cn';
interface LayoutWrapperProps {
	className?: string;
}

function LayoutWrapper({ className }: LayoutWrapperProps) {
	return (
		<div className={cn('py-3', className)}>
			<div className=' md:container mx-auto'>
				<div className='flex flex-col gap-4'>
					<Outlet />
				</div>
			</div>
		</div>
	);
}

export default LayoutWrapper;
