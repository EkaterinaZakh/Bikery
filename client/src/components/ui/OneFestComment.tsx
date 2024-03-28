import React from 'react';
import type { CommitType, FestCommitType } from '../../types/commit';
import { useAppSelector } from '../../redux/hooks';

type OneComentProps = {
  comment: FestCommitType;
};

export default function OneFestComment({ comment }: OneComentProps): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <>
      <div></div>
      <div>{comment.User?.name}: {comment.text}</div>
    </>
  )
}
