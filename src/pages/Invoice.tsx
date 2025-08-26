import React, { useMemo, useState, useRef } from 'react';

const CURRENCIES = [{ code: 'BDT', symbol: '৳' }];

const emptyItem = () => ({
  id: crypto.randomUUID(),
  name: '',
  description: '',
  qty: 1,
  unitPrice: 0,
});

function money(n) {
  const val = Number.isFinite(+n) ? +n : 0;
  return val;
}

export default function InvoiceApp() {
  const [currency, setCurrency] = useState(CURRENCIES[0]); // only BDT
  const [company, setCompany] = useState({
    name: 'Your Company Name',
    address: 'Company Address',
    phone: 'Email & Phone',
  });
  const [invoiceMeta, setInvoiceMeta] = useState({
    number: `INV-${new Date().getFullYear()}-${String(
      Math.floor(Math.random() * 9000) + 1000
    )}`,
    date: new Date().toISOString().slice(0, 10),
  });
  const [client, setClient] = useState({
    name: 'client name',
    email: 'Client Email',
    company: 'Placeholder Company',
    phone: 'Client Phone',
    address: 'Client Address',
  });
  const [items, setItems] = useState([emptyItem()]);
  const [discount, setDiscount] = useState({ type: 'flat', value: 0 });
  const [tax, setTax] = useState({ type: 'flat', value: 0 });
  const [paid, setPaid] = useState(0);
  const [notes, setNotes] = useState(
    'Please make payment within 30 days. Refund unavailable on requested service(s)'
  );
  const [logoUrl, setLogoUrl] = useState(null);
  const fileRef = useRef(null);

  const subtotal = useMemo(
    () => items.reduce((s, it) => s + money(it.qty) * money(it.unitPrice), 0),
    [items]
  );
  const discountAmt = useMemo(
    () =>
      discount.type === 'percent'
        ? subtotal * (money(discount.value) / 100)
        : money(discount.value),
    [discount, subtotal]
  );
  const taxedBase = useMemo(
    () => Math.max(subtotal - discountAmt, 0),
    [subtotal, discountAmt]
  );
  const taxAmt = useMemo(
    () =>
      tax.type === 'percent'
        ? taxedBase * (money(tax.value) / 100)
        : money(tax.value),
    [tax, taxedBase]
  );
  const total = useMemo(
    () => Math.max(taxedBase + taxAmt, 0),
    [taxedBase, taxAmt]
  );
  const balance = useMemo(
    () => Math.max(total - money(paid), 0),
    [total, paid]
  );

  const fmt = (n) =>
    `${currency.symbol}${(Number.isFinite(+n) ? +n : 0).toLocaleString(
      undefined,
      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
    )}`;

  function handleAddItem() {
    setItems((prev) => [...prev, emptyItem()]);
  }
  function handleRemoveItem(id) {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }

  function onLogoPick(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setLogoUrl(url);
  }

  function printNow() {
    window.print();
  }

  return (
    <div className="mx-auto max-w-5xl p-6 bg-white text-gray-900">
      <style>{`
        @page { size: A4; margin: 16mm; }
        @media print {
          .no-print { display: none !important; }
          input, textarea, select { border: none !important; box-shadow: none !important; outline: none !important; }
          .card { box-shadow: none !important; border-color: #e5e7eb !important; }
          .screen-only { display: none !important; }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 border border-dashed rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="logo"
                className="object-contain w-full h-full"
              />
            ) : (
              <span className="text-xs text-gray-400 text-center px-2">
                Company Logo
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="text-lg font-semibold border p-1 rounded w-72"
              value={company.name}
              onChange={(e) => setCompany({ ...company, name: e.target.value })}
            />
            <input
              className="text-sm border p-1 rounded w-72"
              value={company.address}
              onChange={(e) =>
                setCompany({ ...company, address: e.target.value })
              }
            />
            <input
              className="text-sm border p-1 rounded w-72"
              value={company.phone}
              onChange={(e) =>
                setCompany({ ...company, phone: e.target.value })
              }
            />
            <div className="screen-only">
              <input
                type="file"
                accept="image/*"
                className="text-xs"
                ref={fileRef}
                onChange={onLogoPick}
              />
            </div>
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-2xl font-bold">Invoice</h1>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm items-center">
            <label className="text-gray-500">No.</label>
            <input
              className="border p-1 rounded"
              value={invoiceMeta.number}
              onChange={(e) =>
                setInvoiceMeta({ ...invoiceMeta, number: e.target.value })
              }
            />
            <label className="text-gray-500">Date</label>
            <input
              type="date"
              className="border p-1 rounded"
              value={invoiceMeta.date}
              onChange={(e) =>
                setInvoiceMeta({ ...invoiceMeta, date: e.target.value })
              }
            />
          </div>
        </div>
      </div>

      {/* Bill To */}
      <section className="mt-6 border rounded-xl p-4 card">
        <h2 className="font-semibold mb-3">Bill To</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <label className="text-xs text-gray-500">Client Name</label>
            <input
              className="border p-2 rounded"
              value={client.name}
              onChange={(e) => setClient({ ...client, name: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs text-gray-500">Client Email</label>
            <input
              className="border p-2 rounded"
              value={client.email}
              onChange={(e) => setClient({ ...client, email: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs text-gray-500">Client Company</label>
            <input
              className="border p-2 rounded"
              value={client.company}
              onChange={(e) =>
                setClient({ ...client, company: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs text-gray-500">Client Phone</label>
            <input
              className="border p-2 rounded"
              value={client.phone}
              onChange={(e) => setClient({ ...client, phone: e.target.value })}
            />
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label className="text-xs text-gray-500">Client Address</label>
            <input
              className="border p-2 rounded"
              value={client.address}
              onChange={(e) =>
                setClient({ ...client, address: e.target.value })
              }
            />
          </div>
        </div>
      </section>

      {/* Items */}
      <section className="mt-6 card border rounded-xl">
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="font-semibold">Invoice Items</h2>
          <button
            className="no-print text-sm px-3 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700"
            onClick={handleAddItem}
          >
            + Add Item
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-600">
                <th className="text-left px-4 py-2 w-48">Item Name</th>
                <th className="text-left px-4 py-2">Description</th>
                <th className="text-right px-4 py-2 w-24">Qty</th>
                <th className="text-right px-4 py-2 w-32">Unit Price</th>
                <th className="text-right px-4 py-2 w-32">Total</th>
                <th className="px-2 py-2 w-10 no-print"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, idx) => (
                <tr
                  key={it.id}
                  className={idx % 2 ? 'bg-white' : 'bg-gray-50/30'}
                >
                  <td className="px-4 py-2">
                    <input
                      className="border p-2 rounded w-full"
                      value={it.name}
                      onChange={(e) => {
                        const v = e.target.value;
                        setItems((prev) =>
                          prev.map((x) =>
                            x.id === it.id ? { ...x, name: v } : x
                          )
                        );
                      }}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      className="border p-2 rounded w-full"
                      value={it.description}
                      onChange={(e) => {
                        const v = e.target.value;
                        setItems((prev) =>
                          prev.map((x) =>
                            x.id === it.id ? { ...x, description: v } : x
                          )
                        );
                      }}
                    />
                  </td>
                  <td className="px-4 py-2 text-right">
                    <input
                      type="number"
                      min={0}
                      className="border p-2 rounded w-24 text-right"
                      value={it.qty}
                      onChange={(e) => {
                        const v = +e.target.value;
                        setItems((prev) =>
                          prev.map((x) =>
                            x.id === it.id ? { ...x, qty: v } : x
                          )
                        );
                      }}
                    />
                  </td>
                  <td className="px-4 py-2 text-right">
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      className="border p-2 rounded w-32 text-right"
                      value={it.unitPrice}
                      onChange={(e) => {
                        const v = +e.target.value;
                        setItems((prev) =>
                          prev.map((x) =>
                            x.id === it.id ? { ...x, unitPrice: v } : x
                          )
                        );
                      }}
                    />
                  </td>
                  <td className="px-4 py-2 text-right font-medium">
                    {fmt(money(it.qty) * money(it.unitPrice))}
                  </td>
                  <td className="px-2 py-2 text-right no-print">
                    <button
                      onClick={() => handleRemoveItem(it.id)}
                      title="Remove"
                      className="p-2 rounded hover:bg-red-50"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-6 text-center text-gray-400"
                  >
                    No items. Click "Add Item".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary */}
      <section className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="md:order-2">
          <div className="border rounded-xl card p-4 grid gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>{fmt(subtotal)}</span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="text-gray-600">Discount</div>
              <div className="flex items-center gap-2">
                <select
                  className="border rounded p-1"
                  value={discount.type}
                  onChange={(e) =>
                    setDiscount({ ...discount, type: e.target.value })
                  }
                >
                  <option value="flat">Flat</option>
                  <option value="percent">Percent</option>
                </select>
                <input
                  type="number"
                  className="border rounded p-1 w-28 text-right"
                  value={discount.value}
                  onChange={(e) =>
                    setDiscount({ ...discount, value: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="text-gray-600">Tax</div>
              <div className="flex items-center gap-2">
                <select
                  className="border rounded p-1"
                  value={tax.type}
                  onChange={(e) => setTax({ ...tax, type: e.target.value })}
                >
                  <option value="flat">Flat</option>
                  <option value="percent">Percent</option>
                </select>
                <input
                  type="number"
                  className="border rounded p-1 w-28 text-right"
                  value={tax.value}
                  onChange={(e) => setTax({ ...tax, value: e.target.value })}
                />
              </div>
            </div>

            <div className="flex justify-between text-base font-semibold border-t pt-2">
              <span>Total</span>
              <span>{fmt(total)}</span>
            </div>

            <div className="flex items-center justify-between gap-2">
              <div className="text-gray-600">Paid Amount</div>
              <input
                type="number"
                className="border rounded p-1 w-32 text-right"
                value={paid}
                onChange={(e) => setPaid(e.target.value)}
              />
            </div>
            <div className="flex justify-between text-base font-semibold bg-amber-50 px-2 py-1 rounded">
              <span>Balance Due</span>
              <span>{fmt(balance)}</span>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="md:order-1">
          <div className="border rounded-xl card p-4 h-full">
            <h3 className="font-semibold mb-2">Notes</h3>
            <textarea
              className="w-full border rounded p-3 min-h-[140px]"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="no-print mt-2 flex flex-wrap gap-2 text-xs">
              {[
                'Please make payment within 30 days.',
                'Late payments are subject to a 3% fee.',
                'All prices are inclusive of applicable taxes.',
                'Thank you for your business!',
              ].map((preset) => (
                <button
                  key={preset}
                  className="px-2 py-1 border rounded hover:bg-gray-50"
                  onClick={() => setNotes(preset)}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer actions */}
      <div className="no-print mt-8 flex items-center justify-between">
        <div className="text-xs text-gray-500">
          Tip: When printing, choose "Save as PDF" to download.
        </div>
        <div className="flex gap-2">
          <button
            onClick={printNow}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white shadow hover:shadow-md"
          >
            Print / Download
          </button>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        Generated with a simple React component — host on Vercel or run locally.
      </div>
    </div>
  );
}
