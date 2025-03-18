import Sidebar from "../../components/Sidebar";
import { DashboardLayout } from "../../layouts";
function Dashboard() {
  return (
    <DashboardLayout>
      <Sidebar className={"lg:hidden"} />
    </DashboardLayout>
  );
}

export default Dashboard;
