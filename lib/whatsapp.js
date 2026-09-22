export const WHATSAPP_NUMBER = '923187768296';

const DEFAULT_MESSAGE = "Hello, I'm interested in your sports products.";

export function productInquiryMessage(product) {
  return [
    'Hello Cereburum Sports,',
    '',
    `I would like to inquire about ${product.title} (${product.subtitle}).`,
    'Please share the price and other details such as available sizes, colors, and delivery.',
    '',
    'Thank you.',
  ].join('\n');
}

export function whatsAppUrl(text = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
