import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  
  th,td {
    padding: 1.25rem 0;
  }
  
  th {
    color: #6F767E;
    text-align: left;
    font-size: 12px;
    font-weight: 500;
  }

  td {
    font-size: 14px;
    font-weight: 600;

    .date {
      color: #6F767E;
    }
    .value {
      color: #1A1D1F;
    }
  }
`;