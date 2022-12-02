declare module '*.ftl' {
  import { FluentResource } from '@fluent/bundle';
  const resource: FluentResource; 

  export default resource;
}

declare module "*.svg" {
  import { ComponentType, SVGProps } from 'react';
  const src: string;
  
  export const ReactComponent: ComponentType<SVGProps<SVGSVGElement>>;

  export default src;
}


declare module "*.css" {
  const propertiesMap: Record<string, `.${string}`>;

  export default propertiesMap;
}

declare module 'classnames' {
  type ClassName =
    | undefined
    | string
    | number
  ;

  type ClassNameStruct =
    | ClassName[]
    | Record<Exclude<ClassName, undefined>, boolean>
  ;

  const fn: (...matcherList: (ClassName | ClassNameStruct)[]) => string;

  export default fn;
}
