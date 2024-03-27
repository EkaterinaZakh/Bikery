import React from 'react';
import type { CommitType } from '../../types/commit';
import { useAppSelector } from '../../redux/hooks';

type OneComentProps = {
  comment: CommitType;
};

export default function OneRaceComment({ comment }: OneComentProps): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  return <div>{user.status === 'logged' ? `${comment.User?.name} : ${comment.text}` : null};</div>;
}
