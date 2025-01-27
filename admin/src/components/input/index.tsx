import { DesignSystemProvider, darkTheme, lightTheme } from '@strapi/design-system';
import React from 'react';
import { MessageDescriptor } from 'react-intl';
import { Modal } from './modal';
import TextField from './text-field';
import('material-symbols/outlined.css');

type TInputProps = {
  attribute?: any;
  disabled?: string;
  error?: string;
  labelAction?: any;
  name: string;
  required?: boolean;
  value: string;
  description?: MessageDescriptor | null;
  intlLabel: MessageDescriptor | null;
  placeholder?: MessageDescriptor | null;
  onChange?: any;
  onToggleModal(): void;
};

const Input: React.FC<TInputProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onSelectIcon = (icon: string) => {
    props.onChange({ target: { name: props.name, value: icon } });
    onToggleModal();
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);

  const onClearSearch = () => {
    setSearchQuery('');
  };

  const onClearInput = () => {
    props.onChange({ target: { name: props.name, value: '' } });
  };

  const onToggleModal = () => setIsModalOpen((prev) => !prev);

  const strapiTheme = window.localStorage.STRAPI_THEME;

  return (
    <DesignSystemProvider theme={strapiTheme === 'light' ? lightTheme : darkTheme}>
      <TextField {...props} onToggleModal={onToggleModal} onClear={onClearInput} />
      <Modal
        isModalOpen={isModalOpen}
        onToggleModal={onToggleModal}
        onSelectIcon={onSelectIcon}
        searchQuery={searchQuery}
        onChangeSearch={onChangeSearch}
        onClearSearch={onClearSearch}
      />
    </DesignSystemProvider>
  );
};

export default Input;
