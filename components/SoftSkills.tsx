'use client';

import React, {useState} from 'react'
import { MultiStepLoader as Loader } from "./ui/MultiStepLoader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { loadingStates } from '@/data';

const SoftSkills = () => {
    const [loading, setLoading] = useState(false);
  return (
    
    <div className="w-full h-[20vh] md:h-[50vh] flex items-center justify-center">
        {/* Core Loader Modal */}
        <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

        {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
        <button
        onClick={() => setLoading(true)}
        className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-white border border-white text-black rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400 cursor-pointer"
        style={{
            boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
        >
        View My Soft Skills
        </button>

        {loading && (
        <button
            className="fixed top-4 right-4 text-white z-[120]"
            onClick={() => setLoading(false)}
        >
            <IconSquareRoundedX className="h-10 w-10" />
        </button>
        )}
    </div>
  )
}

export default SoftSkills
