type Size = string;
type justifyContent = 'center' | 'start' | 'space-between' | 'space-around' | 'space-evenly';
type alignItems = 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';

export interface BoxType {
    width?: Size;
    height?: Size;
    bg?: string;
    padding?: Size;
    margin?: Size;
}

export interface FlexType extends BoxType {
    justify?: justifyContent;
    alignItems?: alignItems;
}
