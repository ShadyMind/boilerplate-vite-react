type RestPageLinks = Partial<Record<'previous' | 'next' | 'current', string>>;

export type GroupedRestPage<Entity, GroupName extends string = string> = Record<GroupName, Entity[]>;

export interface RestPageInformation<Count extends number = number> {
    links: RestPageLinks;
    element_count: Count;
}

export type RestPage<Data, Name extends string = string, Count extends number = number> =
    & RestPageInformation<Count>
    & Record<Name, GroupedRestPage<Data>>
;

export interface RestPageListItem {
    links: RestPageLinks;
}

export interface AsteroidDiameter {
    estimated_diameter_min: number;
    estimated_diameter_max: number;
}

export interface AsteroidDiameterInDifferentUnits {
    kilometers: AsteroidDiameter;
    meters: AsteroidDiameter;
    miles: AsteroidDiameter;
    feet: AsteroidDiameter;
}

export interface Asteroid extends RestPageListItem {
    id: string;
    neo_reference_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: string;
    estimated_diameter: AsteroidDiameterInDifferentUnits;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: unknown[];
}

export interface AsteroidsApi {
    '/feed': {
        params: {
            start_date: string;
            end_date: string;
        },
        response: RestPage<
            Asteroid,
            'near_earth_objects',
            25
        >
    }
}