export type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';

export interface IBoton {
  disabled?: boolean;
  icon?: string;
  iconPos?: ButtonIconPosition;
  styleClass?: string;
  style?: string;
  label: string;
  type?: string;
  onClick?: () => void;
  link?: boolean;
}
