import React from 'react';
import Styled from 'styled-components';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/es/button';

const Button_ = Styled(AntButton)<ButtonProps>`
  // background: linear-gradient(to right, #5F54E8, #5D8BEF);
  // color: #fff;
  background: none;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    top:0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: rgb(98,121,237);
    transform-origin:left;
    transition:width 0.25s ease;
    z-index:-1;
  }
  &:hover {
    color: #fff;
    background: unset;
    background-color: unset;
  }
  &:hover::after, &:focus::after {
    width: 100%;
  }
  &:focus {
    color: #00D8C8;
    background-color: #fff;
    border: 4px double #00D8C8;
    padding-top: 1px;
  }
`;

export const Button: React.FC<ButtonProps> = ({ ...props }) => (
  <Button_ {...props} />
);
