import React, { useState } from 'react';
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react';
import { MdMenu } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import isLoggedInState from '@recoil/login/atoms';
import { inviteCodeDummyData } from '@dummy/group';
import InviteModal from './InviteModal';

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
          <MenuItem onClick={handleMyPageClick}>{groupName ? '그룹 마이페이지' : '마이페이지'}</MenuItem>
          {groupName && <MenuItem onClick={handleModalClick}>그룹원 초대</MenuItem>}
          <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
        </MenuList>
      </Menu>
      <InviteModal code={inviteCodeDummyData} isOpen={isModalOpen} onModalClick={handleModalClick} />
    </>
  );
};

export default HeaderMenu;
