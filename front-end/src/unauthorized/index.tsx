import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {useStyle} from "./styled";

export const Unauthorized: FC = () => {
  const {unauthorized, unauthorizedText} = useStyle();
  return (
    <div className={unauthorized}>
      <p className={unauthorizedText}>User don't exist. </p>
      <p className={unauthorizedText}>Please <Link to='sing-in'>sign in again</Link> or just <Link to='sing-up'>register new user</Link></p>
    </div>
  )
}