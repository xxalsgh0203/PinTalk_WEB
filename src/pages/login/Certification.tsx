import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import useMutation from '../../hooks/useMutation';

interface Location {
  search: string;
}

const Certification = () => {
  const { search } = useLocation() as Location;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const { mutation, data, error, loading } = useMutation('/openBank/token');

  const handleOpenBankCode = () => {
    const code = search.split('&')[0].split('=')[1];
    if (!code) return setMessage('올바르지 않은 인증입니다.');
    mutation({
      code,
    });
  };

  useEffect(() => {
    /* if (!search) {
      navigate('/');
    } */
    handleOpenBankCode();
  }, []);

  return message || error ? (
    <div className="p-5">
      <span className="text-xl text-red-400 font-bold">{message || error}</span>
    </div>
  ) : (
    <></>
  );
};
export default Certification;
