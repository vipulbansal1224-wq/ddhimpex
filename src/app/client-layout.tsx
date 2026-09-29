'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RFQModal } from '@/components/RFQModal';
import { SearchModal } from '@/components/SearchModal';
import { RFQProvider } from '@/context/RFQContext';
import { Preloader } from '@/components/Preloader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <RFQProvider>
      <Preloader />
      <div className="min-h-screen flex flex-col justify-between">
        <Header 
          onOpenSearch={() => setSearchOpen(true)} 
        />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />

        <RFQModal />

        <SearchModal 
          isOpen={searchOpen} 
          onClose={() => setSearchOpen(false)} 
        />
      </div>
    </RFQProvider>
  );
}
