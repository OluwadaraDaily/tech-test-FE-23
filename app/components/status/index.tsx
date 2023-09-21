import { StatusWrapper } from "./index.style";

interface Props {
  status: 'pending' | 'paid';
}

const Status = ({ status }: Props) => {
  return (
    <StatusWrapper status={status}>{status}</StatusWrapper>
  )
};

export default Status;