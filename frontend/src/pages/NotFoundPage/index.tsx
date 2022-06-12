import React, {FC} from 'react';

const NotFoundPage: FC = () => {

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-5xl">404 Ups Page Not Found!</div>
      </div>
    </div>
  )
}

export default NotFoundPage;