import Container from "@/components/Container";
import MobileMenu from "@/components/MobileMenu";
import HeaderMenu from "@/components/HeaderMenu";
import SearchBar from "@/components/SearchBar";
import FavoriteButton from "@/components/FavoriteButton";
import CartIcon from "@/components/CartIcon";
import Logo from "@/components/Logo";
import AuthButton from "@/components/AuthButton";
import React from "react";
import { ClerkLoaded, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { Logs } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { getMyOrders } from "@/sanity/queries";

const Header = async () => {

    const { userId } = await auth();
    let orders = null;
    if (userId) {
        orders = await getMyOrders(userId);
        console.log('orders', orders);
    }


    return (
        <header className="bg-white/70 py-5 sticky top-0 z-50 backdrop-blur-md">
            <Container className="flex items-center justify-between text-lightColor">
                <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
                    <MobileMenu />
                    <Logo />
                </div>
                <HeaderMenu />
                <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
                    <SearchBar />
                    <CartIcon />
                    <FavoriteButton />
                    <ClerkLoaded>
                        <SignedIn>
                            <Link href={"/Client/orders"} className="group relative hover:text-shop_light_green hoverEffect">
                                <Logs />
                                <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                                    {orders?.length ? orders?.length : 0}
                                </span>
                            </Link>
                        </SignedIn>
                    </ClerkLoaded>
                    <AuthButton />
                </div>
            </Container>
        </header>
    );
};

export default Header;
