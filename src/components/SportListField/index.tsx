import { CheckboxGroup, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormType } from '../../config/schema';
import { CheckBoxField } from '../CheckBoxField';

export const SportListField: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormType>();

  const itemList = [
    { label: 'バスケットボール', value: 'basketball' },
    { label: 'サッカー', value: 'football' },
    { label: 'テニス', value: 'tennis' },
    { label: 'ゴルフ', value: 'golf' },
    { label: 'ハンドボール', value: 'handball' },
    { label: '卓球', value: 'tableTennis' },
    { label: '野球', value: 'baseball' },
  ];

  return (
    <div>
      <Text
        fontWeight={'bold'}
        color={!!errors.sportList ? '#E53E3E' : undefined}
        marginBottom={2}
      >
        スポーツ
      </Text>
      <CheckboxGroup>
        <Flex
          justifyContent={'center'}
          rowGap={2}
          columnGap={4}
          flexWrap={'wrap'}
          maxWidth={600}
        >
          {itemList.map((item) => (
            <CheckBoxField
              key={item.value}
              name={'sportList'}
              label={item.label}
              value={item.value}
              isError={!!errors.sportList}
              register={register}
            />
          ))}
        </Flex>
      </CheckboxGroup>
      {errors.sportList?.message && (
        <Text display={'flex'} fontSize={'sm'} color={'red.500'}>
          {errors.sportList.message}
        </Text>
      )}
    </div>
  );
};
