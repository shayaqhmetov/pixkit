import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { ViewProps, TextProps } from 'react-native';

export type CardProps = ViewProps;
const CardRoot: React.FC<CardProps> = ({ style, ...props }) => (
  <View style={[styles.card, style]} {...props} />
);

export type CardHeaderProps = ViewProps;
const CardHeader: React.FC<CardHeaderProps> = ({ style, ...props }) => (
  <View style={[styles.header, style]} {...props} />
);

export type CardTitleProps = TextProps;
const CardTitle: React.FC<CardTitleProps> = ({ style, ...props }) => (
  <Text style={[styles.title, style]} {...props} />
);

export type CardDescriptionProps = TextProps;
const CardDescription: React.FC<CardDescriptionProps> = ({ style, ...props }) => (
  <Text style={[styles.description, style]} {...props} />
);

export type CardContentProps = ViewProps;
const CardContent: React.FC<CardContentProps> = ({ style, ...props }) => (
  <View style={[styles.content, style]} {...props} />
);

export type CardFooterProps = ViewProps;
const CardFooter: React.FC<CardFooterProps> = ({ style, ...props }) => (
  <View style={[styles.footer, style]} {...props} />
);

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#24283b',
    borderWidth: 4,
    borderColor: '#1a1b26',
    padding: 12,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e1e3ed',
  },
  description: {
    fontSize: 14,
    color: '#a9b1d6',
  },
  content: {
    marginTop: 4,
    marginBottom: 4,
  },
  footer: {
    marginTop: 8,
  },
});
