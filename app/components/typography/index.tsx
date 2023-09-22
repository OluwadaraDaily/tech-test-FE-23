import styled from "styled-components";

export const BaseText = styled.span`
  line-height: 1.25;
  font-weight: 600;
`;

export const H1Text = styled(BaseText)`
  font-size: 40px;
`;

export const H3Text = styled(BaseText)`
  font-size: 20px;
`;

export const PaleTableText = styled(BaseText)`
  color: #6F767E;
  font-weight: 600;
  font-size: 14px;
  padding-left: 1.5rem;
`;