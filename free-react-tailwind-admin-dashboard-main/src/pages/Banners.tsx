
const bannersData = [
  { id: 1, title: 'Vastram Mega Sale Frontpage', type: 'Hero Slider', status: 'Active', views: '12.4k' },
  { id: 2, title: 'Movie Mania Featured Promos', type: 'Sidebar Ad', status: 'Active', views: '8.2k' },
  { id: 3, title: 'Spider-Man & Doraemon Wallpapers', type: 'Carousel', status: 'Inactive', views: '3.1k' },
];

const BannersPage = () => {
  return (
    <>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Manage Banners
        </h2>
        <nav>
          <ol className="flex items-center gap-2">
            <li><a className="font-medium" href="/">Dashboard /</a></li>
            <li className="font-medium text-primary">Banners</li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        {bannersData.map((banner) => (
          <div key={banner.id} className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex h-32 items-center justify-center bg-gray-2 dark:bg-meta-4">
              <span className="text-sm font-medium text-body dark:text-bodydark">Image Placeholder</span>
            </div>
            <div className="p-6">
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                {banner.title}
              </h4>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium">{banner.type}</span>
                <span className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                  banner.status === 'Active' ? 'bg-success text-success' : 'bg-danger text-danger'
                }`}>
                  {banner.status}
                </span>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex w-full justify-center rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BannersPage;