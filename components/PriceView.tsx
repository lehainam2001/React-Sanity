import PriceFormatter from '@/components/PriceFormatter';
import React from 'react';

interface Props {
    price?: number | undefined;
    discount?: number | undefined;
    className?: string;
}

const PriceView = ({ price, discount, className }: Props) => {
    return (
        <div className='flex items-center gap-2'>
            <PriceFormatter amount={price} className='text-shop_dark_green' />
            {price && discount && (<PriceFormatter amount={price + (discount * price) / 100}
                className='line-through text-xs font-normal text-shop_light_text' />
            )}
        </div>
    )
}

export default PriceView;
