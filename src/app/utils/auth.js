import { useEffect } from 'react';
import { supabase } from './supabase';

export function useAuth() {
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        // Handle authentication state changes here
        // For example, you can update user state or redirect based on login/logout
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);
}
