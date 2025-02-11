import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { CodeEmail, UserFilteringData } from '../../../model/interface/userList';
import { usersSlice } from '../../../redux/slices/usersSlice';

import { openNewWindow } from '../../../utils/openNewWindow';
import ValidateForm, { inputSetValues, NUMBER, NUMBER_ENGLISH } from '../../../utils/validateForm';
import FormErrorMessage from '../../FormErrorMessage';

import BirthPicker from './datePicker/BirthPicker';
import DatePicker from './datePicker/DatePicker';
import FilteringButton from './FilteringButton';
import FilteringInput from './FilteringInput';

interface Props {
  emailCodeGroup?: CodeEmail[];
}

const validateForm = new ValidateForm();
const UserFilteringTable = ({ emailCodeGroup }: Props) => {
  const userSubmitDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<UserFilteringData>({
    mode: 'onBlur',
  });

  const handleResetValue = () => {
    reset((formValue: any) => ({
      ...formValue,
      gender: null,
      name: null,
      phone1: null,
      phone2: null,
      phone3: null,
      address: null,
      frontEmail: null,
      backEmail: null,
      year: null,
      month: null,
      day: null,
      signDateStart: null,
      signDateEnd: null,
      modifyDateStart: null,
      modifyDateEnd: null,
      ssn1: null,
      ssn2: null,
      saveStatus: null,
    }));
  };

  const convertEmail = (frontEmail?: string | null, backEmail?: string | null) => {
    if (frontEmail && backEmail) {
      return frontEmail + '@' + backEmail;
    }
    if (frontEmail) return frontEmail;
    if (backEmail) return '@' + backEmail;
  };

  const convertDate = (date?: string | null) => {
    if (!date) return;
    const year = new Date(date).getFullYear() + '';
    const month = new Date(date).toLocaleDateString('en', { month: '2-digit' });
    const day = new Date(date).toLocaleDateString('en', { day: '2-digit' });
    return year + month + day;
  };

  const onValid = (data: UserFilteringData) => {
    const {
      address,
      backEmail,
      frontEmail,
      gender,
      year,
      month,
      day,
      name,
      phone1,
      phone2,
      phone3,
      signDateStart,
      signDateEnd,
      modifyDateStart,
      modifyDateEnd,
      saveStatus,
    } = data;
    const submitData = {
      address: address?.trim() || null,
      year: year || null,
      month: month || null,
      day: day || null,
      gender: gender || null,
      name: name || null,
      phone1: phone1 || null,
      phone2: phone2 || null,
      phone3: phone3 || null,
      signDateStart: convertDate(signDateStart) || null,
      signDateEnd: convertDate(signDateEnd) || null,
      modifyDateStart: convertDate(modifyDateStart) || null,
      modifyDateEnd: convertDate(modifyDateEnd) || null,
      saveStatus: saveStatus || null,
      email: convertEmail(frontEmail, backEmail) || null,
    };

    userSubmitDispatch(usersSlice.actions.handleSubmit(submitData));
  };

  const openWindow = () => {
    openNewWindow({
      url: 'admin/insertUser',
    });
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="flex flex-col mb-1 shadow-md rounded-lg">
      <div className="bg-white px-6 py-3 rounded-lg">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-4">
          <div className="flex flex-col">
            <label id="gender" className="font-bold text-sm">
              성별
            </label>
            <select
              className="mt-2 block w-[30%] rounded-md border-gray-300 shadow-sm"
              {...register('gender', {
                setValueAs: (v) => inputSetValues(v),
              })}
            >
              <option value="">성별</option>
              <option value="M">남자</option>
              <option value="W">여자</option>
            </select>
          </div>

          <FilteringInput
            label="이름"
            placeholder="홍길동"
            htmlFor="name"
            errorMessage={errors?.name?.message}
            register={register('name', {
              maxLength: {
                value: 15,
                message: '15자 이내로 입력해주세요.',
              },
            })}
          />

          <BirthPicker register={register} />

          {/* 전화번호 */}
          <div className="space-y-2">
            <label className="flex text-sm font-bold">
              전화번호
              {(errors.phone1?.message || errors.phone2?.message || errors.phone3?.message) && (
                <FormErrorMessage
                  errorMessage={
                    errors.phone1?.message || errors.phone2?.message || errors.phone3?.message
                  }
                />
              )}
            </label>
            <div className="flex items-center space-x-4">
              <select
                {...register('phone1')}
                className="bg-transparent outline-none rounded-md w-[20%]  shadow-sm"
              >
                <option value="">선택</option>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="012">012</option>
                <option value="013">013</option>
                <option value="014">014</option>
                <option value="015">015</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              <input
                {...register('phone2', {
                  onChange: (e) => validateForm.inputValid(e, 'phone2', NUMBER),
                })}
                type="text"
                className="bg-transparent outline-none rounded-md w-[20%] lg:w-[25%] shadow-sm"
                maxLength={4}
              />
              <span>-</span>
              <input
                {...register('phone3', {
                  onChange: (e) => validateForm.inputValid(e, 'phone3', NUMBER),
                })}
                type="text"
                maxLength={4}
                className="bg-transparent outline-none rounded-md w-[20%] lg:w-[25%] shadow-sm"
              />
            </div>
          </div>

          <FilteringInput
            label="주소"
            htmlFor="address"
            placeholder="서울특별시 둔촌동 12로"
            register={register('address')}
          />

          {/* 이메일 */}
          <div className="space-x-2">
            <label className="flex text-sm mb-2 font-bold" htmlFor="email">
              이메일
              {(errors.frontEmail?.message || errors.backEmail?.message) && (
                <FormErrorMessage
                  errorMessage={errors.frontEmail?.message || errors.backEmail?.message}
                />
              )}
            </label>
            <div className="flex items-center space-x-4">
              <input
                {...register('frontEmail', {
                  onChange: (e) => {
                    validateForm.notSpecialString(e);
                    return validateForm.inputValid(e, 'frontEmail', NUMBER_ENGLISH);
                  },
                })}
                type="text"
                placeholder="pintalk@pintalk.com"
                className="bg-transparent w-[50%] md:w-[45%] shadow-sm"
              />
              <span>@</span>
              <select
                {...register('backEmail')}
                className="bg-transparent rounded-md p-1 outline-none w-[30%] md:w-[40%] relative text-sm shadow-sm"
              >
                <option value="">선택</option>
                {emailCodeGroup?.map((email) => (
                  <option key={email.no} value={email.codeValue.toLowerCase()}>
                    {email.codeName.toLowerCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-bold mb-2">가입일자</label>
            <div className="flex items-center space-x-2 mt-2">
              <DatePicker
                label="며칠 부터"
                Controller={Controller}
                control={control}
                name="signDateStart"
              />
              <span>~</span>
              <DatePicker
                label="며칠 까지"
                Controller={Controller}
                control={control}
                name="signDateEnd"
                textEnd
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold">정보변경일자</label>
            <div className="flex items-center space-x-2 mt-2">
              <DatePicker
                label="며칠 부터"
                Controller={Controller}
                control={control}
                name="modifyDateStart"
              />
              <span>~</span>
              <DatePicker
                label="며칠 까지"
                Controller={Controller}
                control={control}
                name="modifyDateEnd"
                textEnd
              />
            </div>
          </div>

          <div className="flex flex-col w-[50%] shadow-sm">
            <label className="font-bold text-sm mb-2">회원 가입상태</label>
            <select
              {...register('saveStatus', {
                setValueAs: (v) => inputSetValues(v),
              })}
            >
              <option value="">전체</option>
              <option value="A">활성</option>
              <option value="W">탈퇴</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <FilteringButton type="button" title="등록" handleButton={openWindow} />
          <FilteringButton type="button" handleButton={handleResetValue} title="리셋" />
          <FilteringButton type="submit" title="검색" />
        </div>
      </div>
    </form>
  );
};
export default UserFilteringTable;
