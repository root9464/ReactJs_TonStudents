import { z } from 'zod';
import { validateResult } from '../utils/utils';

const userRes = {
  data: {
    id: 2200607311,
    username: 'rootton_vf',
    role: 'user',
    hash: 'a151ea1019b1328503c02487297498f2085544896416bcd3d6337918a92184af',
    infos: [
      {
        userId: 2200607311,
        title: 'title',
        content: 'content',
      },
    ],
  },
  message: 'Welcome',
  status: 'success',
  token: {
    accessToken:
      'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzczODc4MjgsImlhdCI6MTczNzM4NjkyOCwiaXNzIjoiVG9uLXN0dWRlbnRzOjphZG1pbiIsInJvbGUiOiJ1c2VyIiwic3ViIjoyMjAwNjA3MzExLCJ1c2VyX2hhc2giOiI0NDQ1OGY2Mzg0YTg0OGRlNWYxYzRkNmRhNWMwYzIwNzZjMTI0ZTE4MjRiZTBhYmFkYzVhYjI4N2JjMmUxYTM5In0.e7nANkllq2EmrA-4HeEqIKQHp3JhMggXTZadDm8_-0dxxbQDUjsfcxvZYO3rhGJ2N13tugWlbaTRfn_s4036Bg',
  },
};

const InfoSchema = z.object({
  userId: z.number(),
  title: z.string(),
  content: z.string(),
});

const TokenSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

const UserDataSchema = z.object({
  id: z.number(),
  username: z.string(),
  role: z.string(),
  hash: z.string(),
  infos: z.array(InfoSchema).or(z.array(z.unknown())),
});

const UserAuthSchema = z.object({
  data: UserDataSchema,
  message: z.string(),
  status: z.string(),
  token: TokenSchema,
});

const { data } = validateResult(userRes, UserAuthSchema);
console.log(data);
