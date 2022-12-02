import type { FC } from 'react';
import { Temporal } from '@js-temporal/polyfill';
import React, { useMemo, useState } from 'react';
import { useAsteroidsFeed } from './features/use-asteroids-feed';

export const Feed: FC = () => {
    const { data } = useAsteroidsFeed();

    return (
        <>
            {Object.entries(data).map(([date, list]) => (
                <div key={date}>
                    <h6>{date}</h6>
                    <ul>
                        {list.map((item) => (
                            <li key={item.id}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
        
    )
};