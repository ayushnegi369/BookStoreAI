"use client"

import React from "react";
import LoginBox from "../components/LoginBox";
import Image from "next/image";

const LoginPage = () => {
    return (
        <div className="bg-yellow-300 min-h-screen relative flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-8 lg:py-0">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8 lg:gap-16">
                <div className="h-[50vh] lg:h-[100vh] relative w-full lg:w-[700px] max-w-[700px]">
                    <Image
                        src="/books.png"
                        alt="Books illustration"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>
                <LoginBox />
            </div>
        </div>
    );
};

export default LoginPage;
