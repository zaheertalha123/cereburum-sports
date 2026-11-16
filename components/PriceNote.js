import { priceValue } from '@/data/pricing';

export default function PriceNote({ id, label }) {
  const value = priceValue(id);
  if (!value) return null;

  return (
    <p>
      {label}: {value}. This figure is indicative and a quote is still required.
    </p>
  );
}

export function PriceTable({ rows }) {
  const filled = rows
    .map((row) => ({ ...row, value: priceValue(row.id) }))
    .filter((row) => row.value);
  if (!filled.length) return null;

  return (
    <table>
      <caption>Indicative prices. A quote is still required.</caption>
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Indicative price</th>
        </tr>
      </thead>
      <tbody>
        {filled.map((row) => (
          <tr key={row.id}>
            <th scope="row">{row.label}</th>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
