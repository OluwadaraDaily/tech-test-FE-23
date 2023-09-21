import { FlexibleDiv, FlexibleSpan } from "../../components/box";
import Table from "../../components/table";
import { H1Text, H3Text } from "../../components/typography";
import { PayoutsWrapper } from "./index.style"

const PayoutsScreen = () => {
  const columns = ["Name", "Age", "Location"];

  const rows = [
    { Name: "John Doe", Age: 30, Location: "New York" },
    { Name: "Jane Smith", Age: 25, Location: "Los Angeles" },
    { Name: "Bob Johnson", Age: 35, Location: "Chicago" },
    { Name: "Alice Brown", Age: 28, Location: "San Francisco" },
  ];
  return (
    <PayoutsWrapper>
      <H1Text className="title">Payouts</H1Text>
      <FlexibleDiv className="table-div">
        <FlexibleDiv className="table-title-div">
          <FlexibleSpan className="title-tag"></FlexibleSpan>
          <H3Text>Payout History</H3Text>
        </FlexibleDiv>
        <FlexibleDiv className="table">
          <Table columns={columns} rows={rows}/>
        </FlexibleDiv>
      </FlexibleDiv>
    </PayoutsWrapper>
  )
};

export default PayoutsScreen;