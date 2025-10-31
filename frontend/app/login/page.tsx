'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NavbarDemo from '@/components/resizable-navbar-demo';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page which will show the login modal
    router.push('/?login=true');
  }, [router]);

  return (
    <div className="min-h-screen bg-black">
      <NavbarDemo />
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-gray-300">Redirecting to login...</p>
        </div>
      </div>
    </div>
  );
}
