import { Suspense } from 'react';
import ClientProductsPage from './ClientProductsPage';
import { products } from '@/data/products';

export const metadata = {
  title: 'Products — Sports Barrier Netting & Equipment',
  description:
    'Sports net manufacturer and custom net maker — browse barrier netting, cricket nets, football nets, badminton and goal nets, and bespoke solutions for facilities across Pakistan.',
};

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ClientProductsPage products={products} />
    </Suspense>
  );
}
