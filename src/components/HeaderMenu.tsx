import React, { useState } from 'react';
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react';
import { MdMenu } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import isLoggedInState from '@recoil/login/atoms';
import InviteModal from './InviteModal';

// 임시 초대코드
const CODE: string =
  'https://www.notion.so/55bd5b40558b4558a376aa70617b0e1a?v=d19fad98d6b6424da591b3c64dc118a8&p=a7a7a704b33e477e8b330f746166a22e&pm=s';

const HeaderMenu = () => {
  const { groupName } = useParams();
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const handleMyPageClick = () => {
    if (groupName) {
      navigate(`/${groupName}/myPage`);
    } else {
      navigate('/myPage');
    }
  };
  const handleModalClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Menu placement='bottom-end'>
        <MenuHandler>
          <Button className='p-1 bg-transparent shadow-none hover:shadow-none outline-none'>
            <MdMenu className='w-6 h-6 text-black' />
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={handleMyPageClick}>마이페이지</MenuItem>
          {groupName && <MenuItem onClick={handleModalClick}>그룹원 초대</MenuItem>}
          <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
        </MenuList>
      </Menu>
      <InviteModal code={CODE} isOpen={isModalOpen} onModalClick={handleModalClick} />
    </>
  );
};

export default HeaderMenu;
