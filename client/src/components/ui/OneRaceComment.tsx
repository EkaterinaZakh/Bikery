import React from 'react';
import type { CommitType } from '../../types/commit';

type OneComentProps = {
  comment: CommitType;
};

export default function OneRaceComment({ comment }: OneComentProps): JSX.Element {
  console.log(comment);

  return <div>{comment.text}</div>;
}
