"use client";

import useLoginModel from "@/hook/useLoginModal";
import useRegisterModal from "@/hook/useRegisterModal";
import useRentModal from "@/hook/useRentModal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import ClickAwayListener from "react-click-away-listener";

type Props = {
  currentUser?: SafeUser | null;
};

function UserMenu({ currentUser }: Props) {
  const router = useRouter();
  const registerModel = useRegisterModal();
  const loginModel = useLoginModel();
  const rentModel = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModel.onOpen();
    }

    rentModel.onOpen();
  }, [currentUser, loginModel, rentModel]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="max-md:hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={onRent}
        >
          Airbnb your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="max-md:hidden md:block">
            {currentUser ? (
              <Avatar src={currentUser?.image!} userName={currentUser?.name} />
            ) : (
              <Image
                className="rounded-full"
                height="30"
                width="30"
                alt="Avatar"
                src="/assets/placeholder.svg"
              />
            )}
          </div>
        </div>
      </div>

      {/* Using ClickAwayListener to close the menu when clicking outside */}
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <div>
          {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
              <div className="flex flex-col cursor-pointer">
                {currentUser ? (
                  <>
                    <MenuItem
                      onClick={() => {
                        router.push("/");
                        setIsOpen(false);
                      }}
                      label="Home"
                    />
                    <MenuItem
                      onClick={() => {
                        router.push("/trips");
                        setIsOpen(false);
                      }}
                      label="My trips"
                    />
                    <MenuItem
                      onClick={() => {
                        router.push("/favorites");
                        setIsOpen(false);
                      }}
                      label="My favorites"
                    />
                    <MenuItem
                      onClick={() => {
                        router.push("/reservations");
                        setIsOpen(false);
                      }}
                      label="My reservations"
                    />
                    <MenuItem
                      onClick={() => {
                        router.push("/properties");
                        setIsOpen(false);
                      }}
                      label="My properties"
                    />
                    <MenuItem
                      onClick={() => {
                        onRent();
                        setIsOpen(false);
                      }}
                      label="Airbnb your home"
                    />
                    <hr />
                    <MenuItem
                      onClick={() => {
                        signOut();
                        setIsOpen(false);
                      }}
                      label="Logout"
                    />
                  </>
                ) : (
                  <>
                    <MenuItem
                      onClick={() => {
                        loginModel.onOpen();
                        setIsOpen(false);
                      }}
                      label="Login"
                    />
                    <MenuItem
                      onClick={() => {
                        registerModel.onOpen();
                        setIsOpen(false);
                      }}
                      label="Sign up"
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default UserMenu;
