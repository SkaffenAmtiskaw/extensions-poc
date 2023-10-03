import { useContext, useState } from 'react';
import { evaluate } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime'
import * as provider from '@mdx-js/react'

import { BackgroundContext } from './Provider.tsx';


const App = () => {
  const [value, setValue] = useState('');
  const [content, setContent] = useState(null);

  const background = useContext(BackgroundContext);

  const update = async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { default: Content } = await evaluate(value, { ...provider, ...runtime });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setContent(<Content />);
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100vh', backgroundColor: background }}>
      <div>
        <textarea value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={update}>Update</button>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
}

export default App
