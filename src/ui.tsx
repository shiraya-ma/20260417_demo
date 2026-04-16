
import { useRef } from "react";
import { Button } from "@heroui/react";

export const Case = ({ title, src, dist, property }: CaseProps) => {
  const refTarget = useRef<HTMLDivElement>(null);

  const onClickApply = () => {
    const target = refTarget.current;
    if (!target) {
      return;
    }

    target[property] = dist;
  };

  const onClickReset = () => {
    const target = refTarget.current;
    if (!target) {
      return;
    }

    target[property] = '';
  };

  return (
    <div className='flex flex-col gap-4 p-2'>
      <h2 className='text-2xl'>{title}</h2>

      <section className='flex flex-col gap-4 p-2'>
        <h3 className="text-xl">src</h3>
        <pre className='w-full h-20 p-2 border border-gray-500/50 rounded-md'>
          <code>{src}</code>
        </pre>

        <h3 className="text-xl">dist</h3>
        <div
          className='w-full h-20 p-2 border border-gray-500/50 rounded-md whitespace-pre-wrap'
          ref={refTarget}
        ></div>

        <div className="flex gap-4 justify-center">
          <Button onClick={onClickApply}>apply</Button>
          <Button
            onClick={onClickReset}
            variant="outline"
          >reset</Button>
        </div>
      </section>
    </div>
  );
};
Case.displayName = 'Case';

export type CaseProps = {
  title: string;
  src: string;
  dist: string;
  property: 'innerHTML' | 'textContent';
};