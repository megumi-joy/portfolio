import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { motion } from 'framer-motion';
import { Settings, RefreshCw, Upload, Save, Check } from 'lucide-react';

const Admin = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        const { data, error } = await supabase
            .from('orders')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setOrders(data);
        setLoading(false);
    };

    const updateStatus = async (orderId, status) => {
        const { error } = await supabase
            .from('orders')
            .update({ status })
            .eq('id', orderId);

        if (error) alert(error.message);
        else fetchOrders();
    };

    const handleFileUpload = async (orderId, file) => {
        if (!file) return;
        setUploading(true);

        const fileExt = file.name.split('.').pop();
        const fileName = `${orderId}_${Math.random()}.${fileExt}`;
        const filePath = `builds/${fileName}`;

        try {
            const { error: uploadError } = await supabase.storage
                .from('private-builds')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('private-builds')
                .getPublicUrl(filePath);

            const { error: updateError } = await supabase
                .from('orders')
                .update({ private_build_url: publicUrl, status: 'sent' })
                .eq('id', orderId);

            if (updateError) throw updateError;

            alert('File uploaded and order updated!');
            fetchOrders();
        } catch (err) {
            alert(err.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="space-y-12">
            <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Settings className="text-cyan-400" />
                    Admin Control
                </h3>
                <button
                    onClick={fetchOrders}
                    className="p-2 hover:bg-slate-800 rounded-lg text-slate-400"
                >
                    <RefreshCw size={20} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-slate-500 text-sm uppercase tracking-wider">
                            <th className="pb-4">Order Details</th>
                            <th className="pb-4">User ID</th>
                            <th className="pb-4">Status</th>
                            <th className="pb-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-300 divide-y divide-slate-800">
                        {orders.map(order => (
                            <tr key={order.id} className="hover:bg-slate-800/30">
                                <td className="py-4">
                                    <div className="font-bold text-white">{order.details}</div>
                                    <div className="text-xs text-slate-500 font-mono mt-1">{order.id}</div>
                                </td>
                                <td className="py-4 font-mono text-xs">{order.user_id}</td>
                                <td className="py-4">
                                    <select
                                        value={order.status}
                                        onChange={(e) => updateStatus(order.id, e.target.value)}
                                        className="bg-slate-900 border border-slate-700 rounded p-1 text-xs outline-none focus:border-cyan-500"
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="paid">Paid</option>
                                        <option value="sent">Sent</option>
                                    </select>
                                </td>
                                <td className="py-4">
                                    <div className="flex items-center gap-2">
                                        <label className="cursor-pointer px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded text-xs flex items-center gap-1 transition-colors">
                                            <Upload size={12} />
                                            {order.private_build_url ? 'Replace Build' : 'Upload Build'}
                                            <input
                                                type="file"
                                                className="hidden"
                                                autoComplete='off'
                                                onChange={(e) => handleFileUpload(order.id, e.target.files[0])}
                                            />
                                        </label>
                                        {order.private_build_url && <Check size={14} className="text-green-500" />}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
