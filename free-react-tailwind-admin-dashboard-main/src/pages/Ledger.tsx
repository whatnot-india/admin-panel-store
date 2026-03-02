// Mock data for the ledger
const ledgerData = [
  { id: 'TRX-001', date: '2026-03-02', description: 'Product Sale - PROD-A', type: 'Income', amount: 250.00, status: 'Completed' },
  { id: 'TRX-002', date: '2026-03-01', description: 'AWS Cloud Hosting', type: 'Expense', amount: -65.50, status: 'Completed' },
  { id: 'TRX-003', date: '2026-02-28', description: 'Client Payment - UI/UX Design', type: 'Income', amount: 1200.00, status: 'Pending' },
  { id: 'TRX-004', date: '2026-02-28', description: 'Office Supplies', type: 'Expense', amount: -34.00, status: 'Completed' },
  { id: 'TRX-005', date: '2026-02-27', description: 'Figma Subscription', type: 'Expense', amount: -15.00, status: 'Completed' },
];

const LedgerPage = () => {
  // Calculate summaries
  const totalIncome = ledgerData.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = ledgerData.filter(item => item.amount < 0).reduce((acc, curr) => acc + Math.abs(curr.amount), 0);
  const balance = totalIncome - totalExpense;

  return (
    <>
      {/* Breadcrumb / Page Title */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          General Ledger
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li><a className="font-medium" href="/">Dashboard /</a></li>
            <li className="font-medium text-primary">Ledger</li>
          </ol>
        </nav>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5 mb-6">
        {/* Balance Card */}
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-black dark:text-white">
                ${balance.toFixed(2)}
              </h4>
              <span className="text-sm font-medium">Net Balance</span>
            </div>
          </div>
        </div>

        {/* Income Card */}
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-meta-3">
                +${totalIncome.toFixed(2)}
              </h4>
              <span className="text-sm font-medium">Total Income</span>
            </div>
          </div>
        </div>

        {/* Expense Card */}
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="mt-4 flex items-end justify-between">
            <div>
              <h4 className="text-title-md font-bold text-meta-1">
                -${totalExpense.toFixed(2)}
              </h4>
              <span className="text-sm font-medium">Total Expenses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Recent Transactions
        </h4>

        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">Transaction ID</th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">Date</th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">Description</th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">Amount</th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {ledgerData.map((trx, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">{trx.id}</h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{trx.date}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">{trx.description}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className={`font-medium ${trx.amount > 0 ? 'text-meta-3' : 'text-meta-1'}`}>
                      {trx.amount > 0 ? '+' : ''}{trx.amount.toFixed(2)}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      trx.status === 'Completed' ? 'bg-success text-success' : 'bg-warning text-warning'
                    }`}>
                      {trx.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LedgerPage;