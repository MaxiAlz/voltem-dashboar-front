import toast from 'react-hot-toast';

interface Props {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

export const notify = ({ message, type }: Props) => {
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full ${type === 'success' && 'bg-green-300'} ${
          type === 'error' && 'bg-red-300'
        } ${type === 'info' && 'bg-blue-500'} ${
          type === 'warning' && 'bg-warning'
        } shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 z-9999`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              {/* Icono dependiendo del tipo de notificación */}
              {type === 'success' && <span className="text-green-500">✔️</span>}
              {type === 'error' && <span className="text-red-500">❌</span>}
              {type === 'warning' && (
                <span className="text-yellow-500">⚠️</span>
              )}
              {type === 'info' && <span className="text-blue-500">ℹ️</span>}
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-semibold text-black">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </p>
              <p className="mt-1 text-sm text-black">{message}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            X
          </button>
        </div>
      </div>
    ),
    { duration: 2000, position: 'top-center' },
  );
};
