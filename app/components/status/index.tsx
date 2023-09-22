import { StatusWrapper } from "./index.style";

interface Props {
  status: string;
}

const Status = ({ status }: Props) => {
  return (
    <StatusWrapper status={status}>{status}</StatusWrapper>
  )
};

export default Status;