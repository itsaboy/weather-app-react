const Modal = ({ setError }: any) => {
  return (
    <section className="fixed bg-red-200 border-2 border-red-950 rounded-2xl sm:w-96 sm:h-64 w-5/6 h-1/2 m-auto inset-0 shadow-red-900 shadow-2xl">
      <div className="modal-container">
        <h2 className="bg-gradient-to-b from-red-950 to-red-900 text-2xl text-slate-200 pt-4 h-full w-full border-b-2 rounded-t-xl border-red-950 text-center">
          Error
        </h2>
        <h3 className="text-center text-xl">Something went wrong!</h3>
        <button
          type="button"
          onClick={() => {setError(false)}}
          className="w-24 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-red-100 border border-transparent font-semibold text-red-500 hover:text-white hover:bg-red-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 shadow-lg active:translate-y-1 active:shadow-none disabled:bg-slate-400 disabled:cursor-not-allowed"
        >
          Close
        </button>
      </div>
    </section>
  );
};

export default Modal;
