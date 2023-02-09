import { useState } from 'react';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';

const useAddress = () => {
  const open = useDaumPostcodePopup();
  const [address, setAddress] = useState<Address>();

  const handleComplete = (data: Address) => {
    setAddress(data);
  };

  const handleAddress = () => {
    open({ onComplete: handleComplete });
  };

  return {
    address: address?.address,
    handleAddress,
  };
};
export default useAddress;
