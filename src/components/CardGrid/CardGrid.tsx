import type { ReactNode } from 'react';
import './CardGrid.scss';

interface Props {
  children: ReactNode;
}

const CardGrid = ({ children }: Props) => {
  return <div className="card-grid">{children}</div>;
};

export default CardGrid;
