const PageFooter = ({ error }: any) => {
  return (
    <footer className="bg-gradient-to-b from-sky-200 to-sky-400">
      <div className={`${error ? "opacity-50" : "opacity-100"}`}></div>
    </footer>
  );
};

export default PageFooter;
