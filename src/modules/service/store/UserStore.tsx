import { atom } from 'jotai';

export type UserAtomType = 'user' | 'creator' | 'moderator' | 'administrator';

const userDataAtom = atom<UserAtomType>('user');

export const UserAtom = atom(
  (get) => get(userDataAtom),
  (_, set, newUserType: UserAtomType) => {
    set(userDataAtom, newUserType);
  },
);
