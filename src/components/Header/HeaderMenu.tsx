import React from 'react';
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react';
import { MdMenu } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import GroupMemberListModal from '@components/Modal/GroupMemberListModal';
import InviteModal from '@components/Modal/InviteModal';
import useModal from '@hooks/useModal';
import { removeCookie } from 'typescript-cookie';
import { useSetRecoilState } from 'recoil';
import isLoggedInState from '@recoil/atoms/auth';

const HeaderMenu = () => {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const inviteModal = useModal();
  const groupMemberListModal = useModal();

  const handleLogout = () => {
    removeCookie('access-token', { path: '/' });
    setIsLoggedIn(false);
    navigate(`/`);
  };
  const handleMyPageClick = () => {
    if (groupId) {
      navigate(`/${groupId}/myPage`);
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
          <MenuItem onClick={handleMyPageClick}>{groupId ? '그룹 마이페이지' : '마이페이지'}</MenuItem>
          {groupId && <MenuItem onClick={inviteModal.handleModal}>그룹원 초대</MenuItem>}
          {groupId && <MenuItem onClick={groupMemberListModal.handleModal}>그룹원 목록</MenuItem>}
          <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
        </MenuList>
      </Menu>
      {groupId && (
        <>
          <InviteModal isOpen={inviteModal.isOpen} onModalClick={inviteModal.handleModal} groupId={groupId} />
          <GroupMemberListModal
            isOpen={groupMemberListModal.isOpen}
            handleModal={groupMemberListModal.handleModal}
            groupId={groupId}
          />
        </>
      )}
    </>
  );
};

export default HeaderMenu;
