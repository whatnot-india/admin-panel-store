
const PrivacyPolicyPage = () => {
  return (
    <>
      {/* Breadcrumb / Page Title */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Privacy Policy
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li><a className="font-medium" href="/">Dashboard /</a></li>
            <li className="font-medium text-primary">Privacy Policy</li>
          </ol>
        </nav>
      </div>

      {/* Main Content Card */}
      <div className="rounded-sm border border-stroke bg-white p-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:p-10">
        <div className="max-w-3xl">
          <h3 className="mb-8 text-2xl font-bold text-black dark:text-white">
            PRIVACY STATEMENT
          </h3>

          <div className="space-y-6 text-base text-body dark:text-bodydark">
            
            {/* Section 1 */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION?
              </h4>
              <p className="mb-3">
                When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.
              </p>
              <p className="mb-3">
                When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
              </p>
              <p>
                <strong>Email marketing (if applicable):</strong> With your permission, we may send you emails about our store, new products and other updates.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                SECTION 2 – CONSENT
              </h4>
              <p className="mb-2 font-medium text-black dark:text-white">How do you get my consent?</p>
              <p className="mb-3">
                When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.
              </p>
              <p className="mb-4">
                If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.
              </p>
              <p className="mb-2 font-medium text-black dark:text-white">How do I withdraw my consent?</p>
              <p>
                If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at <strong>contactus@whatnot.in</strong> or mailing us at:
                <br />
                <br />
                <strong>WHATNOT.IN</strong><br />
                1-2-17, 2nd Floor, Gagan Mahal Rd,<br />
                Domalguda, Himayatnagar,<br />
                Hyderabad, Telangana
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                SECTION 3 – DISCLOSURE
              </h4>
              <p>
                We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                SECTION 4 – PAYMENT
              </h4>
              <p className="mb-3">
                If you choose a direct payment gateway to complete your purchase, then Whatnot stores your credit card data. It is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is deleted.
              </p>
              <p className="mb-3">
                All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
              </p>
              <p className="mb-3">
                PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
              </p>
              <p>
                For more insight, you may also want to read Whatnot’s Terms of Service here or Privacy Statement here.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                SECTION 5 – THIRD-PARTY SERVICES
              </h4>
              <p className="mb-3">
                In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
              </p>
              <p className="mb-3">
                However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
              </p>
              <p className="mb-3">
                In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
              </p>
              <p className="mb-3">
                As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.
              </p>
              <p className="mb-4">
                Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.
              </p>
              <p className="mb-2 font-medium text-black dark:text-white">Links</p>
              <p>
                When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                SECTION 6 – SECURITY
              </h4>
              <p className="mb-3">
                To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
              </p>
              <p>
                If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                SECTION 7 – COOKIES
              </h4>
              <p className="mb-4">
                Here is a list of cookies that we use. We’ve listed them here so you that you can choose if you want to opt-out of cookies or not:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>_session_id:</strong> unique token, sessional. Allows Whatnot to store information about your session (referrer, landing page, etc).</li>
                <li><strong>_Whatnot_visit:</strong> no data held, persistent for 30 minutes from the last visit. Used by our website provider’s internal stats tracker to record the number of visits.</li>
                <li><strong>_Whatnot_uniq:</strong> no data held, expires midnight (relative to the visitor) of the next day. Counts the number of visits to a store by a single customer.</li>
                <li><strong>cart:</strong> unique token, persistent for 2 weeks. Stores information about the contents of your cart.</li>
                <li><strong>_secure_session_id:</strong> unique token, sessional.</li>
                <li><strong>storefront_digest:</strong> unique token, indefinite. If the shop has a password, this is used to determine if the current visitor has access.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                SECTION 8 – AGE OF CONSENT
              </h4>
              <p>
                By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                SECTION 9 – CHANGES TO THIS PRIVACY POLICY
              </h4>
              <p className="mb-3">
                We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
              </p>
              <p>
                If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-8 border-t border-stroke pt-8 dark:border-strokedark">
              <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                QUESTIONS AND CONTACT INFORMATION
              </h4>
              <p>
                If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <strong>contactus@whatnot.in</strong> or by mail at:
              </p>
              <p className="mt-4 italic">
                WHATNOT.IN<br />
                [Re: Privacy Compliance Officer]<br />
                1-2-17, 2nd Floor, Gagan Mahal Rd,<br />
                Domalguda, Himayatnagar,<br />
                Hyderabad, Telangana
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;