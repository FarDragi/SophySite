import { ReactNode } from "react";

export interface TemplateProps {
  children: ReactNode;
}

export type NextTemplate<P = {}> = React.FC<TemplateProps & P>;
