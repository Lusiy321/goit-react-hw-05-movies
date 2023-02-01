import { Oval } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <Oval color="#00BFFF" height={90} width={90} />
    </LoaderWrap>
  );
};
