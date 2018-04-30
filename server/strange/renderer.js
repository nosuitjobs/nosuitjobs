import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { SchemaLink } from 'apollo-link-schema';
import { StaticRouter } from 'react-router';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import Layout from '../../src/routes';

function Html({ content, reduxState, apolloState, styleTags }) { // eslint-disable-line
  return (
    <html lang="en">
      <head>
        <title>No suit jobs</title>
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.0/normalize.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" />
        <link rel="stylesheet" href="/styles.css" />
        <style>
          {styleTags}
        </style>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.__APOLLO_STATE__=${JSON.stringify(apolloState).replace(/</g, '\\u003c')};
            `,
          }}
        />
        <script src="/bundle.js" defer />
      </body>
    </html>
  );
}

export default (req, res) => {
  const client = new ApolloClient({
    ssrMode: true,
    link: new SchemaLink({
      schema: global.schema,
      context: {
        currentUser: req.user,
      },
    }),
    cache: new InMemoryCache(),
  });

  const context = {};

  const sheet = new ServerStyleSheet();

  const App = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <StyleSheetManager sheet={sheet.instance}>
          <Layout />
        </StyleSheetManager>
      </StaticRouter>
    </ApolloProvider>
  );

  renderToStringWithData(App).then(content => {
    const apolloState = client.extract();
    const styleTags = sheet.getStyleTags();

    const markup = (
      <Html
        content={content}
        apolloState={apolloState}
        styleTags={styleTags}
      />
    );

    if (context.url) {
      const HTTP_FOUND = 302;

      res.writeHead(HTTP_FOUND, { Location: context.url });
    } else {
      res.status(200).send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(markup)}`);
    }

    res.end();
  });
};
