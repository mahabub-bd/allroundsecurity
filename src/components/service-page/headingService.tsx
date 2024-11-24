interface HeadingProps {
  children: React.ReactNode;
}

function HeadingPrimaryService({ children }: HeadingProps) {
  return (
    <h1 className="md:text-3xl text-2xl font-bold text-primaryColor leading-7">
      {children}
    </h1>
  );
}

function HeadingSecondaryService({ children }: HeadingProps) {
  return (
    <h2 className="md:text-2xl text-xl font-semibold text-primaryColor">
      {children}
    </h2>
  );
}

export { HeadingPrimaryService, HeadingSecondaryService };
