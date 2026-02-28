import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { LogIn, UserPlus, LogOut } from 'lucide-react';

const Auth = ({ onUserChange }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isLogin) {
                const { data, error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
                onUserChange(data.user);
            } else {
                const { data, error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                alert('Verification email sent!');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-8 bg-slate-800/50 rounded-2xl border border-slate-700 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                {isLogin ? <LogIn /> : <UserPlus />}
                {isLogin ? 'Login to Shop' : 'Create Account'}
            </h3>

            <form onSubmit={handleAuth} className="space-y-4">
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none text-white"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none text-white"
                        required
                    />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all disabled:opacity-50"
                >
                    {loading ? 'Processing...' : (isLogin ? 'Login' : 'Sign Up')}
                </button>
            </form>

            <button
                onClick={() => setIsLogin(!isLogin)}
                className="w-full mt-4 text-slate-400 text-sm hover:text-white transition-colors"
            >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
            </button>
        </div>
    );
};

export default Auth;
