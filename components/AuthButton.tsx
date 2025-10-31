"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function AuthButton() {

    return (
        <>
            <SignedOut>
                <SignInButton mode="modal">
                    <button className="text-sm font-semibold hover:text-darkColor text-lightColor hover:cursor-pointer hoverEffect">
                        Login
                    </button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </>
    );
}
