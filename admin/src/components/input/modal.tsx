import { Modal as ModalComponent } from '@strapi/design-system';
import React from 'react';
import { useIntl } from 'react-intl';
import { getTranslation } from '../../utils/getTranslation';
import('material-symbols/outlined.css');

import Search from './search';

const List = React.lazy(() => import('./list'));

export const Modal: React.FC<{
  searchQuery: string;
  isModalOpen: boolean;
  onToggleModal(): void;
  onClearSearch(): void;
  onSelectIcon(icon: string): void;
  onChangeSearch(e: React.ChangeEvent<HTMLInputElement>): void;
}> = ({ isModalOpen, searchQuery, onClearSearch, onChangeSearch, onToggleModal, onSelectIcon }) => {
  const [searchParam, setSearchParam] = React.useState('');
  const { formatMessage } = useIntl();

  const onSearch = () => {
    setSearchParam(searchQuery);
  };

  const onClear = () => {
    setSearchParam('');
    onClearSearch();
  };

  const onToggle = () => {
    onToggleModal();
    onClear();
  };

  const onSelect = (icon: string) => {
    onSelectIcon(icon);
    onClear();
  };

  return (
    <ModalComponent.Root open={isModalOpen} onOpenChange={onToggle}>
      <ModalComponent.Content>
        <ModalComponent.Header>
          <ModalComponent.Title>
            {formatMessage({
              id: getTranslation(`component.modal.title`),
              defaultMessage: 'Select a symbol',
            })}
          </ModalComponent.Title>
        </ModalComponent.Header>
        <ModalComponent.Body>
          <Search
            onClear={onClear}
            onChange={onChangeSearch}
            value={searchQuery}
            onSearch={onSearch}
          />
          <List onSelectIcon={onSelect} searchQuery={searchParam} />
        </ModalComponent.Body>
      </ModalComponent.Content>
    </ModalComponent.Root>
  );
};
