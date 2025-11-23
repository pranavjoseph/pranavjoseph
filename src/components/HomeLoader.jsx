function HomeLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-800 transition-opacity duration-300">
      <div className="text-center">
        <div className="relative inline-block">
          {/* Spinning circle loader */}
          <div className="w-12 h-12 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeLoader;

