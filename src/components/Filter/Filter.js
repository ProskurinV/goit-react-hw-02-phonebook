import { FindWrapper, FindTitle, Input } from './Filter.styled';

export default function Filter({ title, onChange, value }) {
  return (
    <FindWrapper>
      <FindTitle>{title}</FindTitle>
      <Input
        type="text"
        placeholder="Enter search name"
        value={value}
        onChange={onChange}
      />
    </FindWrapper>
  );
}
