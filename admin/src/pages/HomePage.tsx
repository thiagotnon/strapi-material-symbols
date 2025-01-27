import { Box, Flex, Loader, Main, Typography } from '@strapi/design-system';
import React, { Suspense } from 'react';
import { useIntl } from 'react-intl';
import { IconBox } from '../components/input/icon-box';
import { getTranslation } from '../utils/getTranslation';
import ICONS from '../utils/icons.json';

const HomePage = () => {
  const { formatMessage } = useIntl();

  const totalSymbols = React.useMemo(() => ICONS.length, [ICONS]);

  return (
    <Main padding={8}>
      <Flex alignItems="center" justifyContent="space-between">
        <Typography variant="alpha">
          {formatMessage({ id: getTranslation('plugin.name') })}
        </Typography>
        <Typography variant="beta">
          {formatMessage(
            {
              id: getTranslation('plugin.totalSymbols'),
              defaultMessage: 'Total symbols: {totalSymbols}',
            },
            { totalSymbols: totalSymbols }
          )}
        </Typography>
      </Flex>
      <Box>
        <Typography>{formatMessage({ id: getTranslation('plugin.description') })}</Typography>
      </Box>

      <Flex marginTop={6} gap={4} wrap="wrap" alignItems="center" style={{ width: '100%' }}>
        <Suspense fallback={<Loader />}>
          {ICONS.map((icon) => (
            <IconBox key={icon}>
              <span key={icon} className="material-symbols-outlined" title={icon}>
                {icon}
              </span>
            </IconBox>
          ))}
        </Suspense>
      </Flex>
    </Main>
  );
};

export { HomePage };
