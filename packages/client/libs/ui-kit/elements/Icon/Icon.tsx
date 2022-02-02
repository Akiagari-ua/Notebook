import React from 'react';

export enum Icons {
  user = 'user',
}

export enum Sizes {
  small = '15',
  medium = '45',
  large = '100',
}

type TIconProps = {
  name: Icons;
  color?: string;
  size?: Sizes;
};

export const Icon = ({ name, size }: TIconProps) => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { default: Component } = require.context('./icons', true)(`./${name}`);
    return <Component width={size} height={size} />;
  } catch {
    return <>X</>;
  }
};

Icon.icons = Icons;
Icon.size = Sizes;
