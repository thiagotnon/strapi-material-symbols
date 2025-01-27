import { Box, Field, IconButton, TextInput } from '@strapi/design-system';
import { MessageDescriptor, useIntl } from 'react-intl';
import styled from 'styled-components';
import { getTranslation } from '../../utils/getTranslation';
import('material-symbols/outlined.css');

type TInputProps = {
  disabled?: string;
  error?: string;
  name: string;
  required?: boolean;
  value: string;
  description?: MessageDescriptor | null;
  intlLabel: MessageDescriptor | null;
  placeholder?: MessageDescriptor | null;
  onChange?: any;
  onToggleModal(): void;
  onClear(): void;
};

const MaterialSymbolTextInput = styled(TextInput)`
  padding-left: 0;

  & > div {
    right: 0;
  }

  & > input:hover {
    cursor: pointer;
  }
`;
const TextField: React.FC<TInputProps> = ({
  intlLabel,
  name,
  value,
  description,
  disabled,
  error,
  onChange,
  placeholder,
  required,
  onToggleModal,
  onClear,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Box>
      <Field.Root id={name} hint={description && formatMessage(description)} error={error}>
        <Field.Label>
          {formatMessage({
            id: getTranslation(`component.label`),
            defaultMessage: intlLabel?.defaultMessage,
          })}
        </Field.Label>
        <MaterialSymbolTextInput
          id={name}
          name={name}
          required={required}
          onChange={onChange}
          onClick={onToggleModal}
          disabled={disabled}
          placeholder={placeholder && formatMessage(placeholder)}
          value={value || ''}
          startAction={
            <IconButton
              onClick={onToggleModal}
              variant="ghost"
              label={formatMessage({
                id: getTranslation(`component.modal.open.label`),
                defaultMessage: 'Material symbol',
              })}
            >
              <span className="material-symbols-outlined">{value ? value : 'search'}</span>
            </IconButton>
          }
          endAction={
            value ? (
              <IconButton
                onClick={onClear}
                variant="ghost"
                label={formatMessage({
                  id: getTranslation(`component.modal.open.label`),
                  defaultMessage: 'Material symbol',
                })}
              >
                <span className="material-symbols-outlined">close</span>
              </IconButton>
            ) : null
          }
        />
        <Field.Error />
        <Field.Hint />
      </Field.Root>
    </Box>
  );
};

export default TextField;
