import Navbar from "../globals/navbar";
import Sidebar from "../globals/sidebar";

const DashboardLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className={`${className} mt-16 pl-[325px] bg-[#F8F9FF] p-5`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
