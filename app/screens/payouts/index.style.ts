import styled from "styled-components";

export const PayoutsWrapper = styled.section`
  .table-div {
    flex-direction: column;
    margin-top: 4.2rem;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  .title-and-search {
    justify-content: space-between;
  }

  .table-title-div {
    gap: 1rem;

    .title-tag {
      height: 2rem;
      width: 1rem;
      background-color: #999DFF;
      border-radius: 4px;
    }
  }

  .table {
    flex-direction: column;

    .table-message {
      margin-top: 1.5rem;
    }
  }
`;