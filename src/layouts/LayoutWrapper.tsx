import React from 'react';

const LayoutWrapper = ({ children, layout: Layout }: any) => (
    <Layout>{children}</Layout>
);

export default LayoutWrapper;
