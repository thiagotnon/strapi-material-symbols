import { Flex, IconButton, SearchForm, Searchbar } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { getTranslation } from '../../utils/getTranslation';

type TSearchProps = {
  value: string;
  onClear(): void;
  onSearch(): void;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
};
const Search: React.FC<TSearchProps> = ({ value, onSearch, onClear, onChange }) => {
  const { formatMessage } = useIntl();

  return (
    <Flex gap={2} style={{ marginBottom: '1rem', width: '100%' }}>
      <SearchForm style={{ maxWidth: 300, width: '100%' }}>
        <Searchbar
          name="searchbar"
          onChange={onChange}
          onClear={onClear}
          placeholder={formatMessage({
            id: getTranslation('component.search.placeholder'),
            defaultMessage: 'Search for a symbol or icon...',
          })}
          value={value}
        />
      </SearchForm>
      <IconButton
        size="S"
        variant="default"
        label={formatMessage({
          id: getTranslation('component.search.button.label'),
          defaultMessage: 'Search',
        })}
        onClick={onSearch}
        disabled={value?.length === 0}
      >
        <span className="material-symbols-outlined">search</span>
      </IconButton>
    </Flex>
  );
};

export default Search;
