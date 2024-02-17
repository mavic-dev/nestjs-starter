import { registerAs } from '@nestjs/config';

export const config = registerAs('config', () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
}));
