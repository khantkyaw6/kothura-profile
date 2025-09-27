import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface HelmetWrapperProps {
	title: string;
	description?: string;
	content?: string;
	children: ReactNode;
}

function HelmetWrapper({
	title,
	description,
	content,
	children,
}: HelmetWrapperProps) {
	return (
		<div>
			<Helmet>
				<title>{title}</title>
				<meta name={description} content={content} />
			</Helmet>
			{children}
		</div>
	);
}

export default HelmetWrapper;
