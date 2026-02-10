import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { clearRemoteProgress, configureRemoteProgress } from '../data/dataManager';

const AuthContext = createContext({
    user: null,
    session: null,
    loading: true,
    signIn: async () => ({ error: null }),
    signUp: async () => ({ error: null }),
    signOut: async () => ({ error: null }),
    isSupabaseReady: false
});

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const init = async () => {
            if (!supabase) {
                if (isMounted) setLoading(false);
                return;
            }
            const { data, error } = await supabase.auth.getSession();
            if (error) console.error('Auth session error:', error);
            if (!isMounted) return;
            setSession(data?.session || null);
            setLoading(false);

            if (data?.session?.user?.id) {
                configureRemoteProgress(supabase, data.session.user.id);
            }
        };

        init();

        const { data: subscription } = supabase
            ? supabase.auth.onAuthStateChange((_event, nextSession) => {
                setSession(nextSession);
                if (nextSession?.user?.id) {
                    configureRemoteProgress(supabase, nextSession.user.id);
                } else {
                    clearRemoteProgress();
                }
            })
            : { data: null };

        return () => {
            isMounted = false;
            subscription?.subscription?.unsubscribe();
        };
    }, []);

    const value = useMemo(() => ({
        user: session?.user || null,
        session,
        loading,
        isSupabaseReady: Boolean(supabase),
        signIn: async ({ email, password }) => {
            if (!supabase) return { error: { message: 'Supabase not configured.' } };
            return supabase.auth.signInWithPassword({ email, password });
        },
        signUp: async ({ email, password }) => {
            if (!supabase) return { error: { message: 'Supabase not configured.' } };
            return supabase.auth.signUp({ email, password });
        },
        signOut: async () => {
            if (!supabase) return { error: { message: 'Supabase not configured.' } };
            return supabase.auth.signOut();
        }
    }), [session, loading]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
