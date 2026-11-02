import Link from 'next/link';
import { getProductById, specFamilies } from '@/data/products';
import styles from './product-detail.module.css';

export default function SpecComparison({ productId }) {
  const family = specFamilies.find((item) => item.ids.includes(productId));
  if (!family) return null;

  const products = family.ids.map((id) => getProductById(id)).filter(Boolean);
  if (products.length < 2) return null;

  const labels = [];
  for (const product of products) {
    for (const spec of product.specs || []) {
      if (!labels.includes(spec.label)) labels.push(spec.label);
    }
  }

  return (
    <section className={styles.compareSection} aria-labelledby={`compare-${family.id}`}>
      <h2 className={styles.sectionTitle} id={`compare-${family.id}`}>{family.title}</h2>
      <p className={styles.compareNote}>
        Compared from the listed material, mesh, and size for each grade.
      </p>
      <div className={styles.compareWrap}>
        <table className={styles.compareTable}>
          <thead>
            <tr>
              <th scope="col">Spec</th>
              {products.map((product) => (
                <th key={product.id} scope="col">
                  <Link href={`/products/${product.id}`}>{product.title}</Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {labels.map((label) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {products.map((product) => (
                  <td key={product.id}>
                    {product.specs.find((spec) => spec.label === label)?.value || '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
