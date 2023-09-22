import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  margin-top: 1.5rem;

  tr:nth-child(even) {
    background-color: rgba(244, 244, 244, 0.50);
  }
  
  th,td {
    padding: 1.25rem 0;
  }
  
  th {
    color: #6F767E;
    text-align: left;
    font-size: 12px;
    font-weight: 500;
  }

  th:nth-child(1) {
    padding-left: 1.5rem;
  }

  td {
    font-size: 14px;
    font-weight: 600;
    color: #1A1D1F;
  }
`;