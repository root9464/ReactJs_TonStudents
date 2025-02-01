import { ReactComponent as AddField } from '@/assets/svg/addFieldIcon.svg';
import { ReactComponent as DeleteField } from '@/assets/svg/deleteField.svg';
import { ReactComponent as Success } from '@/assets/svg/successIcon.svg';
import { ReactComponent as Clear } from '@/assets/svg/xIcon.svg';

import { Input, Textarea } from '@heroui/react';
import { ReactNode } from '@tanstack/react-router';
import { FC, useState } from 'react';

export const CreateService = () => {
  const [additionalFields, setAdditionalFields] = useState(0);
  const updateAdditionalFields = (change: number) => {
    setAdditionalFields((prev) => {
      const newValue = prev + change;
      if (change === 1 && prev >= 2) {
        return prev;
      }

      if (change === -1 && prev <= 0) {
        return prev;
      }

      return newValue;
    });
  };

  return (
    <div className='flex h-max w-full flex-col gap-2.5 rounded-2xl bg-foreground p-3.5'>
      <ServiceContent>
        <div className='flex h-max flex-col gap-2.5'>
          <CreateServiceHeader />
          <CreateServiceInformation />
          {[...Array(additionalFields)].map((_, index) => (
            <AdditionalField key={index} title={`Дополнительное поле ${index + 1}`} />
          ))}
        </div>

        <ServiceController updateAdditionalFields={updateAdditionalFields} additionalFields={additionalFields} />
      </ServiceContent>
    </div>
  );
};

const ServiceContent: FC<{ children: ReactNode }> = ({ children }) => (
  <div className='grid h-max w-full auto-rows-max grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-2.5 rounded-xxs bg-primary-20 p-2 text-primary'>
    {children}
  </div>
);

type AdditionalFieldProps = {
  updateAdditionalFields: (value: number) => void;
  additionalFields: number;
};

const ServiceController: FC<AdditionalFieldProps> = ({ updateAdditionalFields, additionalFields }) => (
  <div className='flex h-max w-fit flex-col items-center justify-center gap-1'>
    <button type='submit' className='h-fit w-fit rounded-xxs bg-[#00DD6D] p-2'>
      <Success className='h-5 w-5 fill-foreground stroke-[1.2]' />
    </button>

    <button className='h-fit w-fit rounded-xxs bg-[#E91E65] p-2'>
      <Clear className='h-5 w-5 fill-foreground stroke-[1.2]' />
    </button>

    <button
      onClick={() => updateAdditionalFields(1)}
      className={`h-fit w-fit rounded-xxs p-2 text-primary ${additionalFields >= 2 ? 'bg-[#E91E65]' : 'bg-primary'}`}>
      <AddField className='h-5 w-5 stroke-foreground' />
    </button>

    {additionalFields >= 1 && (
      <button onClick={() => updateAdditionalFields(-1)} className='h-fit w-fit rounded-xxs bg-muted-secondary p-2'>
        <DeleteField className='h-5 w-5 stroke-secondary stroke-[1.2]' />
      </button>
    )}
  </div>
);

const CreateServiceHeader = () => (
  <div className='flex h-max w-full flex-row items-center justify-between'>
    <Input
      placeholder='Название услуги'
      type='text'
      variant='underlined'
      classNames={{
        label: 'text-muted group-data-[filled=true]:text-muted font-medium opacity-60',
        input: 'bg-transparent group-data-[has-value=true]:text-primary placeholder:text-secondary-foreground font-medium',
        inputWrapper: 'shadow-none border-secondary-foreground after:bg-primary',
      }}
    />
  </div>
);

const CreateServiceInformation = () => (
  <div className='grid grid-rows-[auto_1fr] gap-2.5'>
    <div className='flex flex-col gap-3'>
      <p className='text-xl font-medium text-secondary-foreground'>Информация</p>
      <Textarea
        type='text'
        placeholder='Введите информацию о услуге'
        classNames={{
          inputWrapper: 'shadow-none border-secondary-foreground rounded-xxs',
          input: 'bg-transparent group-data-[has-value=true]:text-secondary-foreground placeholder:text-secondary-foreground',
        }}
      />
    </div>
  </div>
);

const AdditionalField: FC<{ title: string }> = ({ title }) => (
  <div className='grid grid-rows-[auto_1fr] gap-2.5'>
    <div className='flex flex-col gap-3'>
      <Input
        placeholder={title}
        type='text'
        variant='underlined'
        classNames={{
          label: 'text-muted group-data-[filled=true]:text-muted font-medium opacity-60',
          input: 'bg-transparent group-data-[has-value=true]:text-primary placeholder:text-secondary-foreground font-medium',
          inputWrapper: 'shadow-none border-secondary-foreground after:bg-primary',
        }}
      />
      <Textarea
        type='text'
        placeholder='Дополнительное поле'
        classNames={{
          inputWrapper: 'shadow-none border-secondary-foreground rounded-xxs',
          input: 'bg-transparent group-data-[has-value=true]:text-secondary-foreground placeholder:text-secondary-foreground',
        }}
      />
    </div>
  </div>
);
