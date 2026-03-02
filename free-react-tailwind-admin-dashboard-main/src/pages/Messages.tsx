
const messagesData = [
  { id: 1, sender: 'Pronteff HR', subject: 'Software Developer Interview Next Steps', time: '10:30 AM', isRead: false },
  { id: 2, sender: 'Accenture Recruitment', subject: 'Associate Software Engineer - Virtual Interview', time: 'Yesterday', isRead: true },
  { id: 3, sender: 'Design Team', subject: 'Feedback on Calm Login Page & Glassmorphism Card', time: 'Feb 25', isRead: true },
];

const MessagesPage = () => {
  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Inbox Messages
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li><a className="font-medium" href="/">Dashboard /</a></li>
            <li className="font-medium text-primary">Messages</li>
          </ol>
        </nav>
      </div>

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col">
          {messagesData.map((msg) => (
            <div key={msg.id} className={`flex cursor-pointer items-center gap-4 border-b border-stroke py-4 px-6 hover:bg-gray-3 dark:border-strokedark dark:hover:bg-meta-4 ${!msg.isRead ? 'bg-gray-2 dark:bg-meta-4/30' : ''}`}>
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                {msg.sender.charAt(0)}
              </div>
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <h5 className={`text-sm ${!msg.isRead ? 'font-bold text-black dark:text-white' : 'font-medium text-black dark:text-white'}`}>
                    {msg.sender}
                  </h5>
                  <p className={`text-sm ${!msg.isRead ? 'font-medium text-black dark:text-white' : ''}`}>
                    {msg.subject}
                  </p>
                </div>
                <span className="text-xs font-medium">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MessagesPage;