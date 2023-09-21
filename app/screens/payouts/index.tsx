import { FlexibleDiv, FlexibleSpan } from "../../components/box";
import { H1Text, H3Text } from "../../components/typography";
import { PayoutsWrapper } from "./index.style"

const PayoutsScreen = () => {
  return (
    <PayoutsWrapper>
      <H1Text className="title">Payouts</H1Text>
      <FlexibleDiv className="table-div">
        <FlexibleDiv className="table-title-div">
          <FlexibleSpan className="title-tag"></FlexibleSpan>
          <H3Text>Payout History</H3Text>
        </FlexibleDiv>
      </FlexibleDiv>
    </PayoutsWrapper>
  )
};

export default PayoutsScreen;