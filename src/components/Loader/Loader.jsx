import { Oval } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <Oval color="#00AFFF" height={100} width={100} />
    </LoaderWrap>
  );
};
