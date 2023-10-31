import React from 'react';
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react';
import { MdMenu } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import isLoggedInState from '@recoil/atoms/auth';
import { inviteCodeDummyData } from '@dummy/group';
import GroupMemberListModal from '@components/Modal/GroupMemberListModal';
import InviteModal from '@components/Modal/InviteModal';
import useModal from '@hooks/useModal';

const HeaderMenu = () => {
  const { groupName } = useParams();
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const inviteModal = useModal();
  const groupMemberListModal = useModal();

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
          {groupName && <MenuItem onClick={inviteModal.handleModal}>그룹원 초대</MenuItem>}
          {groupName && <MenuItem onClick={groupMemberListModal.handleModal}>그룹원 목록</MenuItem>}
          <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
        </MenuList>
      </Menu>
      <InviteModal code={inviteCodeDummyData} isOpen={inviteModal.isOpen} onModalClick={inviteModal.handleModal} />
      <GroupMemberListModal isOpen={groupMemberListModal.isOpen} handleModal={groupMemberListModal.handleModal} />
    </>
  );
};

export default HeaderMenu;