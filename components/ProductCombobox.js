'use client';

import { products } from '@/data/products';
import ContactCombobox from './ContactCombobox';

const options = products.map((product) => ({
  id: product.id,
  label: `${product.title} — ${product.subtitle}`,
}));

export default function ProductCombobox(props) {
  return <ContactCombobox id="contact-product" options={options} placeholder="Search or select a product" emptyMessage="No products found" {...props} />;
}
