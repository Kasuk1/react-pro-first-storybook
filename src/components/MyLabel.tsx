import './mylabel.css';

export interface IMyLabel {
  /**
   * You can type the text in this prop. Be cautious!
   */
  label: string;
  /**
   * Select the size you want to render.
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Do you want this label capitalized?.
   */
  allCaps?: boolean;
  /**
   * Select the contrast of this label.
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Select the contrast that you want with the color palette
   */
  fontColor?: string;
  /**
   * Select the background contrast that you want with the color palette
   */
  backgroundColor?: string;
}

/**
 * Very first component in StoryBook!
 */
export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color,
  fontColor,
  backgroundColor = 'transparent',
}: IMyLabel) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
