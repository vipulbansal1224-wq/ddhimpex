'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { RFQModal } from '@/components/RFQModal';
import { SearchModal } from '@/components/SearchModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOpenRFQ = (productName?: string) => {
    setSelectedProduct(productName || '');
    setRfqOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header 
        onOpenRFQ={handleOpenRFQ} 
        onOpenSearch={() => setSearchOpen(true)} 
      />
      
      <main className="flex-grow">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // @ts-ignore
            return React.cloneElement(child, { onOpenRFQ: handleOpenRFQ });
          }
          return child;
        })}
      </main>

      <Footer />

      <RFQModal 
        isOpen={rfqOpen} 
        onClose={() => setRfqOpen(false)} 
        initialProduct={selectedProduct} 
      />

      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
        onOpenRFQ={handleOpenRFQ} 
      />
    </div>
  );
}
