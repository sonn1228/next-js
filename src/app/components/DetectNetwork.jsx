"use client";

import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DetectNetwork() {
    useEffect(() => {
        const notifyOnline = () => {
            toast.success('Network is back');
        };

        const notifyOffline = () => {
            toast.error('Network error');
            console.log('Offline');
        };

        window.addEventListener("online", notifyOnline);
        window.addEventListener("offline", notifyOffline);

        return () => {
            window.removeEventListener("online", notifyOnline);
            window.removeEventListener("offline", notifyOffline);
        };
    }, []);

    return (
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    );
}

export default DetectNetwork;
