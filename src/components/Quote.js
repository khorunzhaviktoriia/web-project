function Quote({ isLoading, quote }) {
  if (isLoading) {
    return (
      <div className={'my-4'}>
        <div className="bg-pink rounded shadow p-4 text-center">
          <div className="spinner-border text-white"></div>
        </div>
      </div>
    );
  }

  if (!quote.text && !quote.movie) {
    return (
        <div className="my-4">
            <div className="bg-pink rounded shadow p-3 pb-2 text-center">
                <p className="text-white">Дані не завентажено((</p>
            </div>
        </div>
    );
  }

  return (
    <div className={'my-4'}>
      <div className="bg-pink rounded shadow p-4 text-center">
        <div className="text-white">
          <p className="fs-4 mb-0">"{quote.text}"</p>
          <i>— {quote.movie}</i>
        </div>
      </div>
    </div>
  );
}

export default Quote;


