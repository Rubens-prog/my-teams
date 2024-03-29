import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { FilterStyledProps } from "./types";

export const Container = styled(TouchableOpacity)<FilterStyledProps>`
  ${({ theme, active }) =>
    active &&
    css`
      border: solid 1px ${theme.COLORS.GREEN_700};
    `};

  border-radius: 4px;
  margin-right: 12px;

  width: 70px;
  height: 38px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) =>
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.WHITE};
    `};
`;
