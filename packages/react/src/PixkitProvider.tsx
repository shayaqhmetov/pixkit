import React from 'react';

export type PixkitFont = 'pixelify-sans' | 'pixelify-sans';

const FONT_FAMILY_MAP: Record<PixkitFont, string> = {
  'pixelify-sans': 'PixelifySans',
  'pixelify-sans': 'PressStart2P',
};

type Props = {
  font?: PixkitFont;
  children: React.ReactNode;
};

export function PixkitProvider({ font = 'pixelify-sans', children }: Props) {
  return (
    <div style={{ '--pixkit-font-family': FONT_FAMILY_MAP[font] } as React.CSSProperties}>
      {children}
    </div>
  );
}
