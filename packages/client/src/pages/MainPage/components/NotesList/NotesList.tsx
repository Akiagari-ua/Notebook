import React from 'react';

import { Button } from '@notepad/ui-elements';

import { Wrapper } from './styles';

import type { INotesListProps } from './types';

export const NotesList = ({ list }: INotesListProps) => {
  if (!list.length) {
    return (
      <Wrapper>
        <Button type="button">Create your first note</Button>
      </Wrapper>
    );
  }
  return <div>List of Notes</div>;
};
