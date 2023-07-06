import React from 'react';
import Layout from '@src/components/Layout';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { css } from '@emotion/react';
import markdownStyles from '@src/style/markdownStyles';
import remarkGfm from "remark-gfm";

export default function ApiPage() {
  const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    // fetch markdown
    fetch('../src/md/apidocs.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <Layout>
      <ReactMarkdown remarkPlugins={[remarkGfm]}
        css={css`
          ${markdownStyles}
        `}
      >
        {markdown}
      </ReactMarkdown>
    </Layout>
  );
}
