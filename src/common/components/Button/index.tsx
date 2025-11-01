import type { CSSProperties } from "react";
import styled from "@emotion/styled";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledButton = styled.button<{ size: Size; variant: Variant }>(
  ({ theme, size, variant }) => {
    const sizeMap: Record<Size, string> = {
      sm: `
        padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
        font-size: ${theme.fontSizes.xs}px;
        line-height: ${theme.lineHeights.xs}px;
      `,
      md: `
        padding: ${theme.spacing.sm}px ${theme.spacing.md}px;
        font-size: ${theme.fontSizes.sm}px;
        line-height: ${theme.lineHeights.sm}px;
      `,
      lg: `
        padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
        font-size: ${theme.fontSizes.md}px;
        line-height: ${theme.lineHeights.md}px;
      `,
    };

    const variantMap: Record<Variant, string> = {
      solid: `
        background-color: ${theme.colors.primary.dark};
        color: ${theme.colors.primary.light};
      `,
      outline: `
        background-color: transparent;
        color: ${theme.colors.primary.main};
        border: 1px solid ${theme.colors.primary.main};
      `,
      ghost: `
        background-color: transparent;
        color: ${theme.colors.primary.main};
      `,
    };

    return `
      display: flex;
      flex-direction: row;    
      align-items: center;
      justify-content: center;
      border-radius: ${theme.radii.sm}px;
      gap: ${theme.spacing.xs}px;
      border: none;
      ${sizeMap[size]};
      ${variantMap[variant]};
      cursor: pointer;
   `;
  }
);

interface IconProps {
  iconDefinition: IconDefinition;
  position: "left" | "right";
}

type Size = "sm" | "md" | "lg";
type Variant = "solid" | "outline" | "ghost";

interface ButtonProps {
  children: string;
  size?: Size;
  icon?: IconProps;
  disabled?: boolean;
  variant?: Variant;
  onClick: () => void;
}

const Button = ({
  children,
  size = "md",
  icon,
  disabled = false,
  variant = "solid",
  onClick
}: ButtonProps) => {
  return (
    <StyledButton size={size} disabled={disabled} variant={variant} onClick={onClick}>
      {icon && icon.position === "left" ? (
        <FontAwesomeIcon icon={icon.iconDefinition} size="1x" />
      ) : null}
      {children}
      {icon && icon.position === "right" ? (
        <FontAwesomeIcon icon={icon.iconDefinition} size="1x" />
      ) : null}
    </StyledButton>
  );
};

export default Button;
