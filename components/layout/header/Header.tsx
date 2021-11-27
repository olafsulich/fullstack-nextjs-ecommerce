import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt=""
                width={40}
                height={44}
              />
            </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {session && session?.user?.image && (
              <>
                <img
                  src={session.user.image}
                  className="w-16 h-16 rounded-full"
                  alt=""
                />
                <button
                  onClick={() => signOut()}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Wyloguj się
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
