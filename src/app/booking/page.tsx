'use client'

import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import DateReserve from '@/components/DateReserve';
import { useState } from 'react';

export default function BookingPage() {
    const [venue, setVenue] = useState('Bloom');

    return (
        <main className="w-full flex flex-col items-center justify-center p-10">
            <h1 className="text-2xl font-bold mb-6">Booking Venue</h1>

            <form className="flex flex-col space-y-6 w-full max-w-sm">
                <TextField 
                    variant="standard" 
                    name="Name-Lastname" 
                    label="Name-Lastname" 
                    fullWidth
                />
                <TextField 
                    variant="standard" 
                    name="Contact-Number" 
                    label="Contact-Number" 
                    fullWidth
                />
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="venue-label">Venue</InputLabel>
                    <Select
                        id="venue"
                        labelId="venue-label"
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)}
                    >
                        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                        <MenuItem value="Spark">Spark Space</MenuItem>
                        <MenuItem value="GrandTable">The Grand Table</MenuItem>
                    </Select>
                </FormControl>
                <div className="pt-4">
                    <DateReserve />
                </div>
                <button 
                    type="submit" 
                    name="Book Venue" 
                    className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Book Venue
                </button>
            </form>
        </main>
    );
}