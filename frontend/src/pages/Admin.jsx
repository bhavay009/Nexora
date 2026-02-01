import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, LogOut } from 'lucide-react';

const Admin = () => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [submissions, setSubmissions] = useState([]);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        if (token) {
            fetchSubmissions();
        }
    }, [token]);

    const fetchSubmissions = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/contact', {
                headers: { 'x-auth-token': token }
            });
            const data = await res.json();
            if (res.ok) {
                setSubmissions(data);
            } else {
                logout(); // Token likely expired
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('token', data.token);
                setToken(data.token);
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Server error');
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setSubmissions([]);
    };

    if (!token) {
        return (
            <section className='min-h-screen bg-dark flex items-center justify-center px-4'>
                <div className='max-w-md w-full bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-xl'>
                    <div className='text-center mb-8'>
                        <Lock className='w-12 h-12 text-accent-blue mx-auto mb-4' />
                        <h2 className='text-3xl font-heading font-bold'>Admin Login</h2>
                    </div>
                    {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
                    <form onSubmit={handleLogin} className='space-y-6'>
                        <div>
                            <label className='block text-sm text-muted mb-2'>Email</label>
                            <input
                                type='email'
                                className='w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue'
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div>
                            <label className='block text-sm text-muted mb-2'>Password</label>
                            <input
                                type='password'
                                className='w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue'
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>
                        <button type='submit' className='w-full py-3 bg-accent-blue rounded-xl font-bold hover:bg-blue-600 transition-colors'>
                            Login
                        </button>
                    </form>
                </div>
            </section>
        );
    }

    return (
        <section className='min-h-screen bg-dark pt-32 pb-12 px-6'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center mb-12'>
                    <h1 className='text-4xl font-heading font-bold'>Dashboard</h1>
                    <button onClick={logout} className='flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors'>
                        <LogOut size={18} /> Logout
                    </button>
                </div>

                <div className='bg-white/5 border border-white/10 rounded-2xl overflow-hidden'>
                    <div className='p-6 border-b border-white/10'>
                        <h2 className='text-xl font-bold'>Contact Submissions</h2>
                    </div>
                    <div className='overflow-x-auto'>
                        <table className='w-full text-left'>
                            <thead className='bg-black/20 text-muted'>
                                <tr>
                                    <th className='p-4'>Name</th>
                                    <th className='p-4'>Email</th>
                                    <th className='p-4'>Type</th>
                                    <th className='p-4'>Budget</th>
                                    <th className='p-4'>Date</th>
                                    <th className='p-4'>Message</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-white/5'>
                                {submissions.length === 0 ? (
                                    <tr>
                                        <td colSpan='6' className='p-8 text-center text-muted'>No submissions yet.</td>
                                    </tr>
                                ) : (
                                    submissions.map((sub) => (
                                        <tr key={sub.id} className='hover:bg-white/5 transition-colors'>
                                            <td className='p-4 font-medium'>{sub.name}</td>
                                            <td className='p-4 text-muted'>{sub.email}</td>
                                            <td className='p-4'><span className='px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs'>{sub.type}</span></td>
                                            <td className='p-4 text-muted'>{sub.budget}</td>
                                            <td className='p-4 text-muted text-sm'>{new Date(sub.createdAt).toLocaleDateString()}</td>
                                            <td className='p-4 text-muted max-w-xs truncate' title={sub.message}>{sub.message}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admin;
