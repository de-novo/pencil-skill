// Auto-generated from pen-schema.json — do not edit directly

export type PenNodeType =
  | 'frame'
  | 'text'
  | 'component'
  | 'instance'
  | 'svg'
  | 'image'
  | 'slot'
  | 'boolean'
  | 'code';

export type Theme = Record<string, string>;
export type VariableRef = `$${string}`;
export type NumberOrVariable = number | VariableRef;
export type StringOrVariable = string | VariableRef;
export type BooleanOrVariable = boolean | VariableRef;
export type ColorOrVariable = ColorHex | VariableRef;

export type ThemeValue<T> = Array<{
  value: T;
  theme?: Theme;
}>;

export interface PenVariable {
  type: 'boolean' | 'color' | 'number' | 'string';
  value:
    | BooleanOrVariable
    | ColorOrVariable
    | NumberOrVariable
    | StringOrVariable
    | ThemeValue<BooleanOrVariable | ColorOrVariable | NumberOrVariable | StringOrVariable>;
}

export type ColorHex = `#${string}`;

export interface FillColor {
  type: 'color';
  enabled?: BooleanOrVariable;
  blendMode?: BlendMode;
  color: ColorOrVariable;
}

export interface GradientStop {
  color: ColorOrVariable;
  position: NumberOrVariable;
}

export interface FillGradient {
  type: 'gradient';
  enabled?: BooleanOrVariable;
  blendMode?: BlendMode;
  gradientType?: 'linear' | 'radial' | 'angular';
  opacity?: NumberOrVariable;
  center?: { x?: number; y?: number };
  size?: { width?: NumberOrVariable; height?: NumberOrVariable };
  rotation?: NumberOrVariable;
  colors?: GradientStop[];
}

export interface FillImage {
  type: 'image';
  enabled?: BooleanOrVariable;
  blendMode?: BlendMode;
  opacity?: NumberOrVariable;
  url: string;
  mode?: 'stretch' | 'fill' | 'fit';
}

export type Fill = ColorOrVariable | FillColor | FillGradient | FillImage;

export interface Stroke {
  align?: 'inside' | 'center' | 'outside';
  thickness?:
    | NumberOrVariable
    | {
        top?: NumberOrVariable;
        right?: NumberOrVariable;
        bottom?: NumberOrVariable;
        left?: NumberOrVariable;
      };
  join?: 'miter' | 'bevel' | 'round';
  miterAngle?: NumberOrVariable;
  cap?: 'none' | 'round' | 'square';
  dashPattern?: number[];
  fill?: Fill | Fill[];
}

export interface BlurEffect {
  type: 'blur' | 'background_blur';
  enabled?: BooleanOrVariable;
  radius?: NumberOrVariable;
}

export interface ShadowEffect {
  type: 'shadow';
  enabled?: BooleanOrVariable;
  shadowType?: 'inner' | 'outer';
  offset?: { x: NumberOrVariable; y: NumberOrVariable };
  spread?: NumberOrVariable;
  blur?: NumberOrVariable;
  color?: ColorOrVariable;
  blendMode?: BlendMode;
}

export type Effect = BlurEffect | ShadowEffect;

export interface TextStyle {
  fontFamily?: StringOrVariable;
  fontSize?: NumberOrVariable;
  fontWeight?: StringOrVariable;
  letterSpacing?: NumberOrVariable;
  fontStyle?: StringOrVariable;
  underline?: BooleanOrVariable;
  lineHeight?: NumberOrVariable;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textAlignVertical?: 'top' | 'middle' | 'bottom';
  strikethrough?: BooleanOrVariable;
  href?: string;
}

export interface LayoutProps {
  layout?: 'none' | 'vertical' | 'horizontal';
  gap?: NumberOrVariable;
  layoutIncludeStroke?: boolean;
  padding?:
    | NumberOrVariable
    | [NumberOrVariable, NumberOrVariable]
    | [NumberOrVariable, NumberOrVariable, NumberOrVariable, NumberOrVariable];
  justifyContent?: 'start' | 'center' | 'end' | 'space_between' | 'space_around';
  alignItems?: 'start' | 'center' | 'end';
}

export interface PenNode extends LayoutProps {
  id: string;
  type: PenNodeType;
  name?: string;
  children?: PenNode[];
  x?: number;
  y?: number;
  width?: number | NumberOrVariable | 'fit_content' | 'fill_container' | `${'fit_content' | 'fill_container'}(${number})`;
  height?: number | NumberOrVariable | 'fit_content' | 'fill_container' | `${'fit_content' | 'fill_container'}(${number})`;
  opacity?: NumberOrVariable;
  visible?: boolean;
  enabled?: BooleanOrVariable;
  locked?: boolean;
  rotation?: NumberOrVariable;
  cornerRadius?: NumberOrVariable | [NumberOrVariable, NumberOrVariable, NumberOrVariable, NumberOrVariable];
  fills?: Fill | Fill[];
  fill?: Fill | Fill[];
  strokes?: Stroke | Stroke[];
  stroke?: Stroke;
  effects?: Effect | Effect[];
  effect?: Effect | Effect[];
  theme?: Theme;
  reusable?: boolean;
  ref?: string;
  descendants?: Record<string, Partial<PenNode>>;
  content?: string | Array<{ content?: string } & TextStyle>;
  textGrowth?: 'auto' | 'fixed-width' | 'fixed-width-height';
  clip?: BooleanOrVariable;
  slot?: string[];
  metadata?: { type: string; [key: string]: unknown };
  [key: string]: unknown;
}

export interface PenFontAxis {
  tag: string;
  start: number;
  end: number;
}

export interface PenFont {
  name?: string;
  url?: string;
  style?: 'normal' | 'italic';
  weight?: number | [number, number];
  axes?: PenFontAxis[];
}

export type BlendMode =
  | 'normal'
  | 'darken'
  | 'multiply'
  | 'linearBurn'
  | 'colorBurn'
  | 'light'
  | 'screen'
  | 'linearDodge'
  | 'colorDodge'
  | 'overlay'
  | 'softLight'
  | 'hardLight'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';

export interface PenDocument {
  version: string;
  themes?: Record<string, string[]>;
  variables?: Record<string, PenVariable>;
  children: PenNode[];
  fonts?: PenFont[];
  imports?: Record<string, string>;
}
