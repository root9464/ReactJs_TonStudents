import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@components/ui/accordion';

export const AccordionInfo = () => {
  return (
    <Accordion type='single' collapsible className='z-[1] flex flex-col gap-2'>
      <AccordionItem value='item-1' className='h-fit rounded-md border-none bg-foreground px-[15px] py-2.5'>
        <AccordionTrigger className='text-lg'>Нахера мы это делаем?</AccordionTrigger>
        <AccordionContent>
          Потому что мы тоже студенты, и мы знаем, как это – когда ты заебался от этих бесконечных работ, дедлайнов и нервоебки. Потому что все мы когда-то
          мечтали, чтобы кто-то за нас сделал всю эту херню. Так почему бы не помочь тебе сделать твою жизнь проще? Мы создаём TonStudents, чтобы ты мог
          забыть о куче бесполезных задач и просто получить готовую работу за пару кликов. Время – деньги, а мы собираемся сделать твоё время немного
          ценнее.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2' className='h-fit rounded-md border-none bg-foreground px-[15px] py-2.5'>
        <AccordionTrigger className='text-lg'>Насколько все безопасно?</AccordionTrigger>
        <AccordionContent>
          Ты что, совсем ебанутый, чтобы думать, что кто-то тебя найдёт? Блокчейн — это твоя личная броня. Всё зашифровано так, что даже если кто-то
          захочет, не раскопает ни хера. Анонимность — это не слова, а реальная защита твоей задницы. Вся твоя активность записывается в блокчейн, и если
          ты не начнёшь палить свои данные, никто ничего не узнает. Если не сдашься сам, оставайся под защитой. Твоя личность в безопасности, пока ты не
          лажанёшь.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-3' className='h-fit rounded-md border-none bg-foreground px-[15px] py-2.5'>
        <AccordionTrigger className='text-lg'>Как купить тон?</AccordionTrigger>
        <AccordionContent>
          Вот тут я буду без мата :0 Все просто у тебя в тг есть в боковом меню "Кошелек" тебе нужно включить впн (потому что блокчейн в РФ не легализован
          и не под запретом) РКН еще не решились:) после заходишь в боковое меню и жмешь "Кошелек" создаешь кошелек и нажимаешь "P2P Маркет" и выбираешь
          того кто тебе продаст тонны, после покупаешь и радуешься. Если не разобрался то выше найдешь раздел "Контакты" тыкни туда там будет мой тг ник
          напиши мне и я тебе помогу
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
