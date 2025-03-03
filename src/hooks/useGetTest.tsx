import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Test } from "../types";
import { getSites, getTest } from "../api/api";
import { mapTests } from "../helpers";

export const useGetTest = () => {
    const { id } = useParams();
    const [test, setTest] = useState<Test | null>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!id) return;
        const fetchAndSetData = async () => {
            setLoading(true);
            try {
                const fetchedTest = await getTest(id);
                const fetchedSites = await getSites();
                setLoading(false);
                if (fetchedSites && fetchedTest) {
                const testResult = mapTests(fetchedSites, [fetchedTest]);
                    setTest(testResult[0]);
                }
            } catch (error) {
                console.error(error);
            }
        }
    
        fetchAndSetData();

        return () => {
        setTest(null);
        setLoading(true);
        }
    }, [id]);

    return [loading, test] as const;
}