import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { ShoppingBag, Package, CheckCircle, Clock, Link as LinkIcon } from 'lucide-react';
import { SHOP_DATA } from '../data';

const Shop = ({ user }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const isSupabaseConfigured =
        import.meta.env.VITE_SUPABASE_URL &&
        import.meta.env.VITE_SUPABASE_URL !== 'YOUR_SUPABASE_URL';

    useEffect(() => {
        if (user && isSupabaseConfigured) fetchOrders();
        else setLoading(false);
    }, [user, isSupabaseConfigured]);

    const fetchOrders = async () => {
        const { data, error } = await supabase
            .from('orders')
            .select('*')
            .eq('user_id', user.id);

        if (data) setOrders(data);
        setLoading(false);
    };

    const handleOrder = async (item) => {
        if (!user) return alert('Please login to place an order.');

        const { data, error } = await supabase
            .from('orders')
            .insert([{
                user_id: user.id,
                details: item.title,
                status: 'pending'
            }]);

        if (error) alert(error.message);
        else {
            alert('Order placed! I will contact you soon.');
            fetchOrders();
        }
    };

    return (
        <div className="space-y-12 pb-20">
            {!isSupabaseConfigured && (
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/50 rounded-xl text-yellow-200 text-sm mb-8">
                    ⚠️ <strong>Maintenance Mode:</strong> The shop backend is not connected. Orders are currently disabled.
                </div>
            )}
            <h3 className="text-3xl font-bold text-white mb-8 border-b border-slate-700 pb-4">Game Shop</h3>

            {/* Shop Items */}
            <div className="grid md:grid-cols-2 gap-6">
                {SHOP_DATA.map((item) => (
                    <div key={item.id} className="p-8 bg-slate-800/30 rounded-2xl border border-slate-700 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                <span className="text-cyan-400 font-mono text-lg">{item.price}</span>
                            </div>
                            <p className="text-slate-400 text-sm mb-6">{item.desc}</p>
                        </div>
                        <button
                            onClick={() => handleOrder(item)}
                            className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-cyan-50 transition-colors flex items-center justify-center gap-2"
                        >
                            <ShoppingBag size={18} />
                            Order Now
                        </button>
                    </div>
                ))}
            </div>

            {/* User Orders */}
            {user && (
                <div className="mt-20">
                    <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Package size={24} className="text-purple-400" />
                        My Orders
                    </h4>

                    <div className="space-y-4">
                        {loading ? <p>Loading orders...</p> : (
                            orders.length === 0 ? <p className="text-slate-500">No orders yet.</p> :
                                orders.map(order => (
                                    <div key={order.id} className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 flex flex-wrap justify-between items-center gap-4">
                                        <div>
                                            <div className="font-bold text-white">{order.details}</div>
                                            <div className="text-xs text-slate-500 font-mono uppercase mt-1">ID: {order.id.slice(0, 8)}</div>
                                        </div>

                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-2">
                                                {order.status === 'sent' ? <CheckCircle className="text-green-500" size={16} /> : <Clock className="text-yellow-500" size={16} />}
                                                <span className="text-sm font-medium uppercase tracking-wider">{order.status}</span>
                                            </div>

                                            {order.private_build_url && (
                                                <a
                                                    href={order.private_build_url}
                                                    target="_blank"
                                                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-purple-500/30 transition-all"
                                                >
                                                    <LinkIcon size={14} />
                                                    Download Build
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shop;
