import './SectionHeader.scss';

interface Props {
  leftText: string;
  rightText: string;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const SectionHeader = ({
  leftText,
  rightText,
  onLeftClick,
  onRightClick,
}: Props) => {
  return (
    <div className="section-header">
      <button onClick={onLeftClick}>{leftText}</button>
      <button onClick={onRightClick}>{rightText}</button>
    </div>
  );
};

export default SectionHeader;
