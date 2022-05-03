import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../type/comment';
import './CommentList.scss';

type Props = {
  comment: Comment[]
};

export const CommentList: React.FC<Props> = ({ comment }) => (
  <ul data-cy="comments-list" className="comment-list">
    {comment.map(elem => (
      <li className="comment-list__item" key={elem.id}>
        <CommentInfo comment={elem} />
      </li>
    ))}
  </ul>
);