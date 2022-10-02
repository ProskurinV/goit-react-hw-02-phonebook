// import PropTypes from 'prop-types';

import {
  ContactSection,
  ContactTitle,
  ContactWrapper,
  Item,
} from './ContactList.styled';

export default function ContactList({ title, contacts }) {
  return (
    <ContactSection>
      <ContactTitle>{title}</ContactTitle>
      <ContactWrapper>
        {contacts.map(({ id, name, number }) => (
          <Item
            key={id}
            id={id}
            name={name}
            number={number}
            // onDeleteContact={onDeleteContact}
          />
        ))}
      </ContactWrapper>
    </ContactSection>
  );
}

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };
