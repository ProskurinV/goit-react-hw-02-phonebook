import { Item } from './ContactItem.styled';

export default function ContactItem({ name, number }) {
  return (
    <Item>
      {name}:{number}
      {/* <button type="button" onClick={() => onDeleteContact(id)}>
        delete
      </button> */}
    </Item>
  );
}
