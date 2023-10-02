import NewLocation from "./NewLocation";

const Search = ({
  showOutput,
  handleInputsChange,
  inputs,
  handleSearchButton,
}: any) => {
  return (
    <aside
      id="search-section"
      className="bg-gradient-to-b from-sky-300 to-sky-400 w-full border-2 border-sky-950 rounded-2xl shadow-sky-900 shadow-lg transition ease-in-out delay-150 hover:shadow-sky-900 hover:shadow-2xl hover:translate-y-1 justify-self-center self-start pb-4"
    >
      <div className="search-container">
        <h2 className="bg-gradient-to-b from-sky-950 to-sky-900 text-4xl text-slate-200 pt-4 h-full w-full border-b-2 rounded-t-xl border-sky-950 text-center">
          Search
        </h2>
        <section>
          <NewLocation
            handleInputsChange={handleInputsChange}
            inputs={inputs}
            handleSearchButton={handleSearchButton}
          />
        </section>
      </div>
    </aside>
  );
};

export default Search;
