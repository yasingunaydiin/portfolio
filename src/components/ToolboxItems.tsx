import Image from 'next/image';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType?: string; // Treat iconType as a URL (string), optional for text-only items
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <div
        className={twMerge(
          'flex flex-none py-0.5 gap-4 pr-6',
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)]
          .fill(0)
          .map((_, index /* Doubles the number of items */) => (
            <Fragment key={index}>
              {items.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-black/10 rounded-lg"
                >
                  {item.iconType && (
                    <Image
                      src={item.iconType}
                      alt={item.title}
                      width={32}
                      height={32}
                    />
                  )}{' '}
                  {/* Use Image component */}
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </Fragment>
          ))}
      </div>
    </div>
  );
};
