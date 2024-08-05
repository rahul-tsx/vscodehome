import { FC } from 'react';
import LanguagesContainer from './LanguagesContainer';
import ExtensionContainer from './ExtensionContainer';
import Box from './Box';
import CopilotSection from './CopilotSection';
import CustomizedSection from './CustomizedSection';
import CodeAnywhereSection from './CodeAnywhereSection';
import RichFeatures from './RichFeatures';

interface FeaturesContainerProps {}

const FeaturesContainer: FC<FeaturesContainerProps> = () => {
	return (
		<main className='mycontainer'>
			<Box>
				<LanguagesContainer />
			</Box>
			<Box>
				<ExtensionContainer />
			</Box>
			<Box>
				<CopilotSection />
			</Box>
			<Box>
				<CustomizedSection />
			</Box>
			<Box>
				<CodeAnywhereSection />
			</Box>
			<Box>
				<RichFeatures />
			</Box>
		</main>
	);
};

export default FeaturesContainer;
