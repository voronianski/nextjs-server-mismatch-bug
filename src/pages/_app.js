import React from 'react';
import App from 'next/app';
import { theme } from '@sumup/circuit-ui';
import { ThemeProvider } from 'emotion-theming';

export default class CustomApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <ThemeProvider theme={theme.standard}>
        <Component />
      </ThemeProvider>
    );
  }
}
