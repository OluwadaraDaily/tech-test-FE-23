import styled from "styled-components";

interface StatusProps {
  status: string
}

export const StatusWrapper = styled.span<StatusProps>`
  background-color: ${({ status }) => status === 'Completed' ? '#60CA57' : 'rgba(111, 118, 126, 0.40)'};
  border-radius: 6px;
  color: #1A1D1F;
  font-size: 14px;
  font-weight: 600;
  padding: .5rem;
`;