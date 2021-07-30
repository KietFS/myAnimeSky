import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../state';

const Loader: FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  console.log(user);
  return(
    <>
    <div className="loader-wrapper">
      <div className="custom-loader"></div>
    </div>
    </>
  );
}

export default Loader;