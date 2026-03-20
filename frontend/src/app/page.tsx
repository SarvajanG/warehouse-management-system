'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Container from '@/components/Container';
import ItemContainer from '@/components/ItemContainer';
import InputField from '@/components/InputField';
import CommonButton from '@/components/CommonButton';

export default function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    supabase.auth.signOut();
  }, []);

  const logIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert('Sign in failed: Incorrect Email or Password');
    } else {
      router.push('/home');
    }
  };

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert('Registration failed: ' + error.message);
    } else {
      alert('Check your emails!');
    }
  };

  return (
    <Container>
      <ItemContainer height="45%">
        <InputField
          autoFocus
          label="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <CommonButton text="Log In" onClick={logIn} />
        <CommonButton text="Sign Up" onClick={signUp} />
      </ItemContainer>
    </Container>
  );
}