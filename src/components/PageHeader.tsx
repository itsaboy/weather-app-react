const PageHeader = ({ showOutput, newLocation }: any) => {
  return (
    <header className="text-center bg-gradient-to-b from-sky-950 to-sky-800 border-b-4 border-sky-950">
      <div className="header-container">
        <h1 className="text-6xl text-blue-100 font-semibold xl:justify-self-start xl:self-center py-8">
          <span className="text-red-200">W</span>orld <span className="text-green-200">W</span>ide <span className="text-blue-200">W</span>eather
        </h1>
        {showOutput && <h2 className="text-4xl text-green-200 font-semibold py-8">{newLocation.city}, {newLocation.state} {newLocation.country}</h2>}
      </div>
    </header>
  );
};

export default PageHeader;
