import {
  GROUP_EXIST_NICKNAME_ERROR_MSG,
  GROUP_NICKNAME_ERROR_MSG,
  GROUP_SAME_NICKNAME_ERROR_MSG,
  REQUIRE_ERROR_MSG,
} from '@constants/errorMsg';
import { GROUP_NICKNAME_PATTERN } from '@constants/validationPatterns';

export const getNickNameError = (message: string) => {
  switch (message) {
    case '해당 닉네임은 이미 사용중입니다.':
      return {
        type: 'exist',
        errorMsg: GROUP_EXIST_NICKNAME_ERROR_MSG,
      };
    case '기존 닉네임과 같은 닉네임입니다.':
      return {
        type: 'same',
        errorMsg: GROUP_SAME_NICKNAME_ERROR_MSG,
      };
    default:
      return {
        type: 'none',
        errorMsg: '그룹 닉네임을 설정해 주세요.',
      };
  }
};

export const nickNameRegister = {
  required: REQUIRE_ERROR_MSG,
  minLength: {
    value: 2,
    message: GROUP_NICKNAME_ERROR_MSG,
  },
  maxLength: {
    value: 8,
    message: GROUP_NICKNAME_ERROR_MSG,
  },
  pattern: GROUP_NICKNAME_PATTERN,
};
