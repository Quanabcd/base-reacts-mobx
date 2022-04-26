export enum BUTTON_STYLES {
    RED = 'RED',
    PINK = 'PINK',
    GRAY = 'GRAY',
    BLUE = 'BLUE',
    WHITE = 'WHITE'
}

export type ButtonProps = {
    label: string | number;
    buttonStyle?: keyof typeof BUTTON_STYLES;
    fontSize?: number;
    textColor?: string;
    icon?: any;
    isLoading?: boolean;
    leftIcon?: any;
    onPress?: (tag?: string) => any;
    disabled?: boolean;
    hasRightIcon?: boolean,
    isIconFont?: boolean,
    isLowerCase?: boolean,
    tag?: any,
    radius?: any,
    style?: any,
    width?: number | string | null
};
