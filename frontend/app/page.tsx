
'use client';
import { Marquee3D } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Impact } from "@/components/sections/Impact";
import { LoginModal } from "@/components/auth/LoginModal";
import { useAuth } from "@/contexts/AuthContext";
import { useAccount } from "wagmi";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "@/components/layout/Footer";
import NavbarDemo from "@/components/resizable-navbar-demo";
import { MagicButton } from "@/components/ui/magic-button";

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { isConnected } = useAccount();

  // Auto-redirect to dashboard if authenticated
  useEffect(() => {
    if (isAuthenticated && isConnected) {
      window.location.href = '/dashboard';
    }
  }, [isAuthenticated, isConnected]);

  // Check if we should show login modal (e.g., from /login redirect)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('login') === 'true') {
      setIsLoginModalOpen(true);
    }
  }, []);

  return (
    <main className="min-h-screen relative text-white font-sans overflow-hidden bg-black">
      {/* Green gradient spots background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-10 left-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-teal-500/12 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-600/8 rounded-full blur-3xl"></div>
      </div>
      
      {/* Navigation */}
      <NavbarDemo />

      {/* Content Layer */}
      <div className="relative pt-20 z-10">
      <div className="relative">
        <Hero />
      </div>
      <div className="bg-black border-y border-white/10">
        <Features />
      </div>
      <div className="relative">
        <Impact />
      </div>
      <div className="bg-black border-y border-white/5">
        <Marquee3D/>
      </div>
      
      {/* CTA Section */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Connect your wallet and register your phone number to start using Esperenza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagicButton 
              className="w-full sm:w-auto"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <span className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </MagicButton>
            <MagicButton 
              as="a"
              href="/dashboard"
              className="w-full sm:w-auto"
            >
              View Dashboard
            </MagicButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="glass" />

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      </div>
    </main>
  );
}
