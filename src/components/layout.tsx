const Layout = (props: any) => {
  return (
    <>
      <section className="w-full max-h-full bg-gray-300 dark:bg-gray-900">{props.children}</section>
    </>
  );
};

export default Layout;
