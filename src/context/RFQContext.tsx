'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RFQContextProps {
  rfqOpen: boolean;
  selectedProduct: string;
  openRFQ: (productName?: string) => void;
  closeRFQ: () => void;
}

const RFQContext = createContext<RFQContextProps | undefined>(undefined);

export const RFQProvider = ({ children }: { children: ReactNode }) => {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const openRFQ = (productName?: string) => {
    setSelectedProduct(productName || '');
    setRfqOpen(true);
  };

  const closeRFQ = () => {
    setRfqOpen(false);
    setSelectedProduct('');
  };

  return (
    <RFQContext.Provider value={{ rfqOpen, selectedProduct, openRFQ, closeRFQ }}>
      {children}
    </RFQContext.Provider>
  );
};

export const useRFQ = () => {
  const context = useContext(RFQContext);
  if (!context) {
    throw new Error('useRFQ must be used within an RFQProvider');
  }
  return context;
};
