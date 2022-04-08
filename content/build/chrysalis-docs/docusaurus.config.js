// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const production = require('./production/docusaurus.config');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Chrysalis Documentation',
    url: '/',
    baseUrl: '/',
    themes: ['@docusaurus/theme-classic'],
    plugins: [...production.plugins],
    staticDirectories: [...production.staticDirectories],
};