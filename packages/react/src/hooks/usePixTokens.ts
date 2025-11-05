import { tokens } from '@pixkit/tokens';

/**
 * Hook to access design tokens in React components
 * @example
 * const tokens = usePixTokens();
 * <div style={{ padding: tokens.px * 4, borderRadius: tokens.radius }}>
 */
export const usePixTokens = () => tokens;

/**
 * Helper to create inline styles using tokens
 * @example
 * <div style={pixStyle({ p: 4, bg: 'panel' })} />
 */
export const pixStyle = (props: {
  p?: number; // padding multiplier
  px?: number; // padding-x multiplier
  py?: number; // padding-y multiplier
  m?: number; // margin multiplier
  bg?: keyof typeof tokens.colors; // background color
  color?: keyof typeof tokens.colors; // text color
  radius?: boolean; // apply border radius
}) => {
  const style: React.CSSProperties = {};
  
  if (props.p !== undefined) {
    style.padding = `${props.p * tokens.px}px`;
  }
  if (props.px !== undefined) {
    style.paddingLeft = `${props.px * tokens.px}px`;
    style.paddingRight = `${props.px * tokens.px}px`;
  }
  if (props.py !== undefined) {
    style.paddingTop = `${props.py * tokens.px}px`;
    style.paddingBottom = `${props.py * tokens.px}px`;
  }
  if (props.m !== undefined) {
    style.margin = `${props.m * tokens.px}px`;
  }
  if (props.bg) {
    style.backgroundColor = tokens.colors[props.bg];
  }
  if (props.color) {
    style.color = tokens.colors[props.color];
  }
  if (props.radius) {
    style.borderRadius = `${tokens.radius}px`;
  }
  
  return style;
};
