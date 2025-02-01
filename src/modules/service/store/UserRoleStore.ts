import { atom } from 'jotai';

type UserRole = 'user' | 'creator' | 'moderator' | 'administarator';

const userRoleState = atom<UserRole>('user');

const UserRoleAtom = atom(
  (get) => get(userRoleState),
  (_, set, role: UserRole) => set(userRoleState, role),
);

export { UserRoleAtom, type UserRole };
