import Back from "../../components/Back"
import Page from "../../components/Page"
import ListItem from "../../components/ListItem";
import { useGetTest } from "../../hooks/useGetTest";

export const Results = () => {
    const [loading, test] = useGetTest();

    return (
        <Page title="Results" footer={<Back />} loading={loading}>
            {test && <ListItem {...test} withLink={false} />}
        </Page>
    )
}