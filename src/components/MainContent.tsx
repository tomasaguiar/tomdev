interface Props {
  children: any;
}
export const MainContent: React.FC<Props> = ({ children }) => {
  return <div className="w-full mx-4 mt-8 md:mx-6">{children}</div>;
};
