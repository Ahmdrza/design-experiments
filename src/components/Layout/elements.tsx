import React from 'react';
import { Layout } from 'antd';
import { LayoutProps } from 'antd/es/layout';
import Styled from 'styled-components';

const { Content, Header } = Layout;

const AntContent = Styled(Content)<LayoutProps>`
  padding: 30px;
`;

export const Main: React.FC<LayoutProps> = ({ children }) => {
  return <AntContent>{children}</AntContent>;
};

const AntHeader = Styled(Header)<LayoutProps>`
  padding: 0 20px;
  background: #fff;
`;

export const Navbar: React.FC<LayoutProps> = ({ children }) => {
  return <AntHeader>{children}</AntHeader>;
};
