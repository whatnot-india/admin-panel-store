
const notificationsData = [
  { id: 1, type: 'success', text: 'MySQL database successfully connected to the personal expense tracker.', date: 'Mar 2, 2026' },
  { id: 2, type: 'info', text: 'Pre-Examination Training materials for Office Assistants are now available.', date: 'Feb 14, 2026' },
  { id: 3, type: 'success', text: 'Your dual-axis solar tracking system documentation was uploaded.', date: 'Feb 10, 2026' },
  { id: 4, type: 'warning', text: 'Server load reached 85% during Django deployment.', date: 'Feb 05, 2026' },
];

const NotificationsPage = () => {
  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          System Notifications
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li><a className="font-medium" href="/">Dashboard /</a></li>
            <li className="font-medium text-primary">Notifications</li>
          </ol>
        </nav>
      </div>

      <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-4">
          {notificationsData.map((note) => (
            <div key={note.id} className="flex flex-col sm:flex-row sm:items-center justify-between rounded-md border border-stroke p-4 dark:border-strokedark">
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  note.type === 'success' ? 'bg-success/10 text-success' : 
                  note.type === 'warning' ? 'bg-warning/10 text-warning' : 
                  'bg-primary/10 text-primary'
                }`}>
                  {/* Icon placeholder - usually an SVG goes here */}
                  <span className="font-bold">{note.type === 'success' ? '✓' : note.type === 'warning' ? '!' : 'i'}</span>
                </div>
                <div>
                  <p className="font-medium text-black dark:text-white">
                    {note.text}
                  </p>
                </div>
              </div>
              <span className="mt-2 text-sm font-medium sm:mt-0">{note.date}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;