import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export interface SearchInputProps {
  placeholder?: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ placeholder = 'Search', handleOnChange }: SearchInputProps) => (
  <Input size='large' placeholder={placeholder} prefix={<SearchOutlined />} onChange={(event) => handleOnChange(event)} />
);


export default SearchInput;