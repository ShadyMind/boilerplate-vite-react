import type { FC, ReactNode } from 'react';
import type { FluentVariable } from '@fluent/bundle';
import type { Property } from 'csstype';
import React from 'react';
import { Localized } from '@fluent/react';
import { useLocalizedTemplate } from '../../controllers';
import styles from './text.css';

export type TextProps = {
  id: string;
  variables: Record<string, FluentVariable>;
  children: ReactNode;
  weight: Property.FontWeight;
  linesLimit: Property.LineClamp;
  mark: Property.Background;
};

export const Text: FC<TextProps> = ({ children, id, variables }) => {
  const [text, elements] = useLocalizedTemplate(children);

  return (
    <span className={styles.root}>
      <Localized id={id} vars={variables} elems={elements}>
        {text}
      </Localized>
    </span>
  );
};
