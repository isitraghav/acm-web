export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="w-4/5 mx-auto">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}
