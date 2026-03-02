import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "How do I track my order?",
    answer: "Once your order has shipped, you will receive an email containing a tracking number. You can use this number on our carrier's website to monitor the status of your delivery. You can also view your order status directly from your account dashboard."
  },
  {
    id: 2,
    question: "What is your return and refund policy?",
    answer: "We offer a 30-day return window for all unused items in their original packaging. Once we receive and inspect your returned item, we will process your refund to the original payment method within 5-7 business days."
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, and Discover) as well as direct payment gateways. All transactions are encrypted and processed securely following PCI-DSS standards."
  },
  {
    id: 4,
    question: "How can I contact customer support?",
    answer: "You can reach our support team by emailing us at contactus@whatnot.in or by writing to our office at 1-2-17, 2nd Floor, Gagan Mahal Rd, Domalguda, Himayatnagar, Hyderabad, Telangana. We typically respond within 24 hours."
  },
  {
    id: 5,
    question: "Can I change or cancel my order after placing it?",
    answer: "Orders can only be modified or canceled within 2 hours of placement, provided they haven't been dispatched yet. Please contact our support team immediately if you need to make changes."
  }
];

const FaqPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <>
      {/* Breadcrumb / Page Title */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li><a className="font-medium" href="/">Dashboard /</a></li>
            <li className="font-medium text-primary">FAQs</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-7.5">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-black dark:text-white">
              General Queries
            </h3>
            <p className="mt-2 text-sm text-body dark:text-bodydark">
              Find answers to the most common questions about our services below.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqData.map((faq) => (
              <div 
                key={faq.id} 
                className="rounded-sm border border-stroke bg-gray-2 dark:border-strokedark dark:bg-meta-4"
              >
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-black dark:text-white hover:text-primary dark:hover:text-primary sm:px-8 sm:py-5"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <span className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-sm dark:bg-boxdark transition-transform duration-200 ${
                    activeFaq === faq.id ? 'rotate-180' : ''
                  }`}>
                    {/* SVG Arrow Icon */}
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.99995 12.8249C8.8312 12.8249 8.66245 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.33745 12.7124 9.1687 12.8249 8.99995 12.8249Z"
                      />
                    </svg>
                  </span>
                </button>

                {/* Expanded Answer Area */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFaq === faq.id ? 'max-h-96 opacity-100 border-t border-stroke dark:border-strokedark' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 sm:px-8">
                    <p className="text-base text-body dark:text-bodydark">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;