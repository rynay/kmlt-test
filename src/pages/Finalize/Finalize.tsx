import Back from "../../components/Back"
import ListItem from "../../components/ListItem";
import Page from "../../components/Page"
import { useGetTest } from "../../hooks/useGetTest";

export const Finalize = () => {
    const [loading, test] = useGetTest();
    
    return (
        <Page title="Finalize" footer={<Back />} loading={loading}>
            {test && <ListItem {...test} withLink={false} />}
        </Page>
    )
}