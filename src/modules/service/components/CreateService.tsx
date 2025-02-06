import { ReactComponent as AddField } from '@/assets/svg/addFieldIcon.svg';
import { ReactComponent as DeleteField } from '@/assets/svg/deleteField.svg';
import { ReactComponent as Success } from '@/assets/svg/successIcon.svg';
import { ReactComponent as TonCoin } from '@/assets/svg/tonCoinPath.svg';
import { ReactComponent as Clear } from '@/assets/svg/xIcon.svg';

import { Form, Input, Textarea } from '@heroui/react';
import { useQueryClient } from '@tanstack/react-query';
import { ReactNode } from '@tanstack/react-router';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { FC, useState } from 'react';
import { Controller, FormProvider, SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { useCreateService } from '../hooks/useCreateService';
import { CreateServiceSkeleton } from './skeletons/CreateServiceSkeleton';

type CreateServiceForm = {
  price: string;
  serviceName: string;
  serviceInfo: string;
  additionalFields: Array<{
    title: string;
    description: string;
  }>;
};

const DEFAULT_SETTINGS = {
  colorHeader: '#007aff',
  isPrepayment: true,
  isDisabled: false,
  isAdditionalButton: false,
};

const SerialyzedFields = (formData: CreateServiceForm, userId: number) => {
  return {
    userId,
    // title: formData.serviceName,
    price: Number(formData.price),
    infos: [
      {
        title: 'Информация',
        content: formData.serviceInfo,
      },
      ...formData.additionalFields.map((field) => ({
        title: field.title,
        content: field.description,
      })),
    ],
    settings: DEFAULT_SETTINGS,
  };
};

export const CreateService = () => {
  const [additionalFields, setAdditionalFields] = useState(0);
  const methods = useForm<CreateServiceForm>({
    defaultValues: {
      price: '',
      serviceName: '',
      serviceInfo: '',
      additionalFields: Array(additionalFields).fill({ title: '', description: '' }),
    },
    mode: 'onChange',
  });
  const queryClient = useQueryClient();
  const { initData, initDataRaw } = useLaunchParams();
  const cachedAuthData: { accessToken: string; refreshToken: string } | undefined = queryClient.getQueryData(['auth', initDataRaw]);
  const { mutateAsync, isPending, isError, error } = useCreateService();

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

  const onSubmit: SubmitHandler<CreateServiceForm> = (data) => {
    const reqJson = SerialyzedFields(data, initData?.user?.id ?? 0);
    mutateAsync({ service: reqJson, accessToken: cachedAuthData?.accessToken ?? '' });
  };

  return (
    <>
      {isPending ? (
        <CreateServiceSkeleton additionalFields={additionalFields} />
      ) : isError ? (
        <div className='flex h-max w-full flex-col gap-2.5 rounded-2xl bg-foreground p-2.5'>
          <div className='flex h-max w-full auto-rows-max flex-col gap-2.5 rounded-xxs bg-[#E91E65]/20 p-2 text-[#E91E65]'>
            <p>Ошибка: {error?.message}</p>
            <p>Попробуйте еще раз</p>
          </div>
        </div>
      ) : (
        <FormProvider {...methods}>
          <div className='flex h-max w-full flex-col gap-2.5 rounded-2xl bg-foreground p-3.5'>
            <Form onSubmit={methods.handleSubmit(onSubmit)} validationBehavior='native'>
              <ServiceContent>
                <div className='flex h-max flex-col gap-2.5'>
                  <CreateServiceHeader />
                  <CreateServiceInformation />
                  {[...Array(additionalFields)].map((_, index) => (
                    <AdditionalField key={index} index={index} />
                  ))}
                </div>
                <ServiceController updateAdditionalFields={updateAdditionalFields} additionalFields={additionalFields} />
              </ServiceContent>
              <div className='flex h-fit w-fit flex-row items-center justify-center rounded-xxs bg-primary p-2 text-primary-foreground'>
                <input
                  type='number'
                  placeholder='Цена'
                  className='w-[60px] max-w-full bg-transparent opacity-70 outline-none placeholder:text-primary-foreground'
                  {...methods.register('price', {
                    required: 'Обязательное поле',
                    max: 100,
                  })}
                />
                <TonCoin className='h-5 w-5 fill-white' />
              </div>
            </Form>
          </div>
        </FormProvider>
      )}
    </>
  );
};

const ServiceContent: FC<{ children: ReactNode }> = ({ children }) => (
  <div className='grid h-max w-full auto-rows-max grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-2.5 rounded-xxs bg-primary-20 p-2.5 text-primary'>
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

    <button type='reset' className='h-fit w-fit rounded-xxs bg-[#E91E65] p-2'>
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

const CreateServiceHeader: FC = () => {
  const { control } = useFormContext<CreateServiceForm>();

  return (
    <div className='flex h-max w-full flex-row items-center justify-between'>
      <Controller
        name='serviceName'
        control={control}
        rules={{
          required: 'Обязательное поле',
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              {...field}
              placeholder='Название услуги'
              type='text'
              variant='underlined'
              isRequired={true}
              errorMessage={error?.message}
              classNames={{
                label: 'text-muted group-data-[filled=true]:text-muted font-medium opacity-60',
                input: 'bg-transparent group-data-[has-value=true]:text-primary placeholder:text-secondary-foreground',
                inputWrapper: 'shadow-none border-secondary-foreground after:bg-primary',
              }}
            />
          </>
        )}
      />
    </div>
  );
};

const CreateServiceInformation = () => {
  const { control } = useFormContext<CreateServiceForm>();
  return (
    <div className='grid grid-rows-[auto_1fr] gap-2.5'>
      <div className='flex flex-col gap-3'>
        <Controller
          name='serviceInfo'
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field, fieldState: { error } }) => (
            <Textarea
              {...field}
              placeholder='Введите информацию о услуге'
              label='Информация'
              labelPlacement='outside'
              isRequired={true}
              errorMessage={error?.message}
              classNames={{
                label: 'text-muted group-data-[filled=true]:text-muted font-medium opacity-60',
                input: 'bg-transparent group-data-[has-value=true]:text-primary placeholder:text-secondary-foreground',
                inputWrapper: 'shadow-none border-secondary-foreground after:bg-primary rounded-xxs',
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

const AdditionalField: FC<{ index: number }> = ({ index }) => {
  const { control } = useFormContext<CreateServiceForm>();

  return (
    <div className='grid grid-rows-[auto_1fr] gap-2.5'>
      <div className='flex flex-col gap-3'>
        <Controller
          name={`additionalFields.${index}.title`}
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field, fieldState: { error } }) => (
            <Input
              {...field}
              placeholder={`Дополнительное поле ${index + 1}`}
              type='text'
              variant='underlined'
              errorMessage={error?.message}
              isRequired={true}
              classNames={{
                label: 'text-muted group-data-[filled=true]:text-muted font-medium opacity-60',
                input: 'bg-transparent group-data-[has-value=true]:text-primary placeholder:text-secondary-foreground font-medium',
                inputWrapper: 'shadow-none border-secondary-foreground after:bg-primary rounded-xxs',
              }}
            />
          )}
        />
        <Controller
          name={`additionalFields.${index}.description`}
          control={control}
          rules={{ required: 'Обязательное поле' }}
          render={({ field, fieldState: { error } }) => (
            <Textarea
              {...field}
              placeholder='Дополнительная информация'
              errorMessage={error?.message}
              isRequired={true}
              classNames={{
                inputWrapper: 'shadow-none border-secondary-foreground rounded-xxs',
                input: 'bg-transparent group-data-[has-value=true]:text-secondary-foreground placeholder:text-secondary-foreground',
              }}
            />
          )}
        />
      </div>
    </div>
  );
};
