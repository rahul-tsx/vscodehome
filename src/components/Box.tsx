import { FC, ReactNode } from 'react';

interface BoxProps {
	children: ReactNode;
}

const Box: FC<BoxProps> = ({ children }) => {
	return <div className='my-20'>{children}</div>;
};

export default Box;
