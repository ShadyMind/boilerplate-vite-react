
import type { AsteroidsApi } from '../../../../features/use-asteroids-resource';
import { Temporal } from '@js-temporal/polyfill';
import React, { useMemo, useState } from 'react';
import { useAsteroidsResource } from '../../../../features/use-asteroids-resource';

const DURATION = { days: 7 };

export const useAsteroidsFeed = () => {
    const [dateEnd, setDateEnd] = useState(Temporal.Now.plainDateISO());
    const [dateStart, setDateStart] = useState(dateEnd.subtract(DURATION));

    const periodParams = useMemo(() => {
        return {
            start_date: dateStart.toString(),
            end_date: dateStart.toString()
        };
    }, [dateEnd, dateStart]);

    const { data: _data, error } = useAsteroidsResource('/feed', 'GET', periodParams);

    const data = _data as AsteroidsApi['/feed']['response'];

    return {
        data: data.near_earth_objects,
        pageLength: data.element_count,
        error,
        setDateStart,
        setDateEnd
    };
}