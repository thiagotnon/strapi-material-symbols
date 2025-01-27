import { Flex, Loader } from '@strapi/design-system';
import React from 'react';
import ICONS_JSON from '../../utils/icons.json';
import { IconBox } from './icon-box';
import('material-symbols/outlined.css');

type TListProps = {
  searchQuery: string;
  onSelectIcon: (icon: string) => void;
};

const List: React.FC<TListProps> = ({ onSelectIcon, searchQuery }) => {
  const [loading, setIsLoading] = React.useState(true);

  const icons = React.useMemo(() => {
    setIsLoading(true);

    const filtered = !searchQuery.trim()
      ? ICONS_JSON
      : ICONS_JSON.filter((icon) => icon.toLowerCase().includes(searchQuery.toLowerCase()));

    setTimeout(() => setIsLoading(false), 200);
    return filtered;
  }, [searchQuery]);

  if (loading) {
    return (
      <Flex>
        <Loader />
      </Flex>
    );
  }
  return (
    <Flex gap={2} wrap="wrap" alignItems="center" justifyContent="center" style={{ width: '100%' }}>
      {icons?.map((icon) => (
        <IconBox key={icon}>
          <span
            className="material-symbols-outlined"
            onClick={() => onSelectIcon(icon)}
            title={icon}
          >
            {icon}
          </span>
        </IconBox>
      ))}
    </Flex>
  );
};

export default List;
