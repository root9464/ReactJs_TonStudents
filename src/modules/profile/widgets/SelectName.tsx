import { Select, SelectItem } from '@heroui/react';

const namesVariants = ['username', 'firstname', 'lastname', 'nickname'];
export const SelectName = () => (
  <Select
    className='w-full'
    label='Публичное имя'
    labelPlacement='outside'
    defaultSelectedKeys={[namesVariants[0]]}
    classNames={{
      base: 'w-full text-secondary-foreground',
      value: 'group-data-[has-value=true]:text-secondary-foreground',
      trigger: 'bg-muted-secondary text-secondary-foreground shadow-none rounded-xxs',
      label: 'text-muted group-data-[filled=true]:text-muted font-medium opacity-60',
      popoverContent: 'bg-muted-secondary text-secondary-foreground shadow-none rounded-xxs',
    }}>
    {namesVariants.map((variant) => (
      <SelectItem key={variant} value={variant}>
        {variant}
      </SelectItem>
    ))}
  </Select>
);
