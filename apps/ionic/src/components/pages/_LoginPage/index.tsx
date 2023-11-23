import { zodResolver } from '@hookform/resolvers/zod';
import { useIonRouter } from '@ionic/react';
import { useForm } from 'react-hook-form';

import { env } from '@/env';
import { LoginForm, loginFormSchema, UserRole } from '@/modules/Auth/models';
import { AuthService } from '@/modules/Auth/service';

import styles from './styles.module.scss';

export function _LoginPage() {
  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
  });
  const router = useIonRouter();

  const onSubmit = loginForm.handleSubmit(async (data) => {
    const resp: { token: string; role: UserRole } = await fetch(
      `${env.VITE_API_URL}/auth/login`,
      {
        method: 'POST',
        body: JSON.stringify({ code: data.code }),
      }
    ).then((res) => res.json());

    AuthService.token = resp.token;
    if (resp.role === 'admin') {
      return router.push('/admin', 'forward', 'replace');
    }
    if (resp.role === 'user') {
      return router.push('/app', 'forward', 'replace');
    }
  });

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type='text' {...loginForm.register('code')} required />
        <button type='submit'>Вход</button>
      </form>
    </div>
  );
}
