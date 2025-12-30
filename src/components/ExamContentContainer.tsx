interface ExamContentContainerProps {
  children: React.ReactNode;
}

function ExamContentContainer({ children }: ExamContentContainerProps) {
  return (
    <ul className="mx-auto mt-15 flex max-w-6xl flex-col gap-10 px-6">
      {children}
    </ul>
  );
}

export default ExamContentContainer;
