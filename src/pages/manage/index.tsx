import ManageHome from "@/comp/page/manageHome";
import withUser from "@/server/withUser";
import { SessionUser } from "@/types";

type ManageProps = {
    user: SessionUser
}

export default function Manage(props: ManageProps) {
    return <ManageHome {...props} />
}

export const getServerSideProps = withUser();