'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { products } from '@/data/products';
import styles from '@/app/contact/contact.module.css';

const options = products.map((product) => ({
  id: product.id,
  label: `${product.title} — ${product.subtitle}`,
}));

export default function ProductCombobox({ value, onChange, onBlur, invalid }) {
  const listId = useId();
  const rootRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const selected = options.find((option) => option.id === value);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return options;
    return options.filter((option) => option.label.toLowerCase().includes(needle));
  }, [query]);

  useEffect(() => {
    function onPointerDown(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  function selectOption(option) {
    onChange(option.id);
    setQuery('');
    setOpen(false);
  }

  function onKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => Math.min(index + 1, Math.max(filtered.length - 1, 0)));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === 'Enter' && open) {
      event.preventDefault();
      const option = filtered[activeIndex];
      if (option) selectOption(option);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div className={styles.combo} ref={rootRef}>
      <input
        id="contact-product"
        type="text"
        role="combobox"
        aria-expanded={open}
        aria-controls={listId}
        aria-autocomplete="list"
        aria-invalid={invalid ? 'true' : 'false'}
        autoComplete="off"
        placeholder="Search or select a product"
        className={styles.formInput}
        value={open ? query : selected?.label || ''}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
          setActiveIndex(0);
          if (value) onChange('');
        }}
        onFocus={() => {
          setOpen(true);
          setQuery('');
          setActiveIndex(Math.max(options.findIndex((option) => option.id === value), 0));
        }}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      {open ? (
        <ul id={listId} className={styles.comboList} role="listbox">
          {filtered.length === 0 ? (
            <li className={styles.comboEmpty}>No products found</li>
          ) : (
            filtered.map((option, index) => (
              <li key={option.id} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={option.id === value}
                  className={`${styles.comboOption} ${index === activeIndex ? styles.comboOptionActive : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => selectOption(option)}
                >
                  {option.label}
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
