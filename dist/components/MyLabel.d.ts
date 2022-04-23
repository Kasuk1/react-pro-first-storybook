/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: IMyLabel) => JSX.Element;
