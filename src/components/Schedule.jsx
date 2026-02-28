import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { ChevronLeft, ChevronRight, Calendar, Clock, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Schedule = ({ user }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    // Config - Work Hours in 24h format
    const WORK_START = 10; // 10 AM
    const WORK_END = 18;   // 6 PM

    // Helper to get days in month
    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

    useEffect(() => {
        if (user) fetchBookings();
    }, [user, currentDate]);

    const fetchBookings = async () => {
        // Fetch all future bookings to check availability
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .gte('start_time', new Date().toISOString());

        if (data) setBookings(data);
    };

    const changeMonth = (offset) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
        setSelectedDate(null);
        setSelectedSlot(null);
    };

    const generateSlots = (date) => {
        const slots = [];

        // Loop through work hours
        for (let i = WORK_START; i < WORK_END; i++) {
            const timeLabel = `${i}:00`;

            // Check availability
            const isBooked = bookings.some(b => {
                const bStart = new Date(b.start_time);
                return bStart.getDate() === date.getDate() &&
                    bStart.getMonth() === date.getMonth() &&
                    bStart.getHours() === i;
            });

            slots.push({
                time: timeLabel,
                hour: i,
                available: !isBooked
            });
        }
        return slots;
    };

    const handleBooking = async () => {
        if (!user || !selectedDate || !selectedSlot) return;
        setLoading(true);

        // Construct booking start time
        const startTime = new Date(selectedDate);
        startTime.setHours(selectedSlot.hour, 0, 0, 0);

        // Construct booking end time (1 hour duration)
        const endTime = new Date(startTime);
        endTime.setHours(selectedSlot.hour + 1);

        const { error } = await supabase
            .from('bookings')
            .insert([{
                user_id: user.id,
                start_time: startTime.toISOString(),
                end_time: endTime.toISOString(),
                status: 'pending',
                notes: 'Requested via Portfolio'
            }]);

        if (error) {
            alert("Error booking slot: " + error.message);
        } else {
            alert('Booking requested! I will reach out to confirm.');
            fetchBookings(); // Refresh availability
            setSelectedSlot(null);
        }
        setLoading(false);
    };

    // --- Calendar Grid Generation ---
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const firstDayIndex = getFirstDayOfMonth(currentDate.getFullYear(), currentDate.getMonth());

    // Create array for empty slots before 1st day
    const blanks = Array(firstDayIndex).fill(null);

    // Create array for days 1..31
    const days = Array.from({ length: daysInMonth }, (_, i) => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
    });

    const calendarGrid = [...blanks, ...days];

    return (
        <div className="max-w-5xl mx-auto space-y-12 pb-20">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-700">
                <Calendar className="text-cyan-400 w-8 h-8" />
                <h3 className="text-3xl font-bold text-white">Schedule a Session</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Left: Calendar View */}
                <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-md shadow-xl">
                    {/* Header: Month Navigation */}
                    <div className="flex justify-between items-center mb-8">
                        <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white">
                            <ChevronLeft size={24} />
                        </button>
                        <h4 className="font-bold text-xl text-white tracking-wide">
                            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                        </h4>
                        <button onClick={() => changeMonth(1)} className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold uppercase text-slate-500 mb-4 tracking-wider">
                        <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
                    </div>

                    {/* Start Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2">
                        {calendarGrid.map((day, idx) => (
                            <div key={idx} className="aspect-square">
                                {day ? (
                                    <button
                                        onClick={() => { setSelectedDate(day); setSelectedSlot(null); }}
                                        className={`w-full h-full rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200 ${selectedDate?.toDateString() === day.toDateString()
                                                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20 scale-105'
                                                : 'hover:bg-slate-700/80 text-slate-300 hover:scale-105'
                                            }`}
                                    >
                                        {day.getDate()}
                                    </button>
                                ) : <div />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Slots View */}
                <div className="flex flex-col gap-6">
                    <div className="bg-slate-800/30 p-8 rounded-3xl border border-slate-700/50 flex flex-col h-full">
                        <h4 className="font-bold text-xl text-white mb-6 flex items-center gap-3">
                            <Clock className="text-purple-400" />
                            Available Slots
                        </h4>

                        {!selectedDate ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-slate-500 gap-4">
                                <Calendar size={48} className="opacity-20" />
                                <p>Select a date to view availability</p>
                            </div>
                        ) : (
                            <div className="space-y-2">
                                <p className="text-slate-400 text-sm mb-4">
                                    Availability for <span className="text-white font-bold">{selectedDate.toLocaleDateString()}</span>
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {generateSlots(selectedDate).map((slot, index) => (
                                        <button
                                            key={index}
                                            disabled={!slot.available}
                                            onClick={() => setSelectedSlot(slot)}
                                            className={`py-3 px-2 rounded-xl text-sm font-bold border transition-all ${!slot.available
                                                    ? 'opacity-30 border-transparent bg-slate-900 text-slate-500 cursor-not-allowed'
                                                    : selectedSlot?.time === slot.time
                                                        ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                                                        : 'border-slate-700 bg-slate-800 hover:border-slate-500 text-slate-300 hover:bg-slate-750'
                                                }`}
                                        >
                                            {slot.time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Confirm Start Button */}
                    <AnimatePresence>
                        {selectedSlot && (
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                onClick={handleBooking}
                                disabled={loading}
                                className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                            >
                                {loading ? 'Processing...' : (
                                    <>
                                        <Check size={20} className="group-hover:scale-110 transition-transform" />
                                        Confirm Booking
                                    </>
                                )}
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
