import { createContext, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import BaseButton from '@mui/material/Button';

export const BackgroundContext = createContext('white');

const Provider = (props: Record<string, unknown>) => {
  const [color, setColor] = useState('white');

  return (
    <BackgroundContext.Provider value={color}>
      <MDXProvider components={{
        h1: (props) => (<h1 style={{ color: 'hotpink' }} {...props} />),
        Button: () => (<BaseButton onClick={() => setColor('hotpink')}>Make it Pink</BaseButton>),
        // IFrame: ({ rel }) => (<iframe rel={rel} />)
      }} {...props} />
    </BackgroundContext.Provider>
  );
}

export default Provider;