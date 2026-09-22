import { z } from 'zod';
import { getProductById } from '@/data/products';

export const contactServices = [
  { id: 'installation', label: 'Installation' },
  { id: 'custom-net', label: 'Custom Net' },
  { id: 'bulk-order', label: 'Bulk Order' },
  { id: 'general-queries', label: 'General Queries' },
];

const serviceIds = contactServices.map((service) => service.id);

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  product: z
    .string()
    .refine((id) => id === '' || Boolean(getProductById(id)), { message: 'Please select a product from the list' }),
  service: z.enum(serviceIds, { message: 'Please select a service' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});
