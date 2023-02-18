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
    console.log('응답데이터', data);
  }, [search, data]);

  useEffect(() => {
    if (!search) {
      navigate('/');
    }
  }, []);

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      {loading ? (
        <Loading />
      ) : (
        <div className="relative w-96 h-96 bg-white flex flex-col justify-center items-center rounded-md shadow-md space-y-8">
          <h1 className="font-bold text-2xl text-gray-700">인증을 완료하였습니다.</h1>
          <button
            onClick={handleOpenBankCode}
            className="px-10 py-3 rounded-md font-bold text-xl text-white bg-amber-400 hover:bg-amber-500 transition-all cursor-pointer"
          >
            인증 완료
          </button>
          {message && <span className="text-red-400 font-bold absolute bottom-16">{message}</span>}
        </div>
      )}
    </div>
  );
};
export default Certification;
