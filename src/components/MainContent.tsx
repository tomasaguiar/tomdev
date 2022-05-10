interface Props {
  children: any;
}
export const MainContent: React.FC<Props> = ({ children }) => {
  return <div className="pt-8 mx-6">{children}</div>;
};
