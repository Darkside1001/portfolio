import { PropsWithChildren } from 'react';
import cn from 'classnames';


import { PropsWithChildren } from "react";

export const Section = ({ className = "", children }: PropsWithChildren<{ className?: string }> ) => {
  return <section className={className}>{children}</section>;
};
