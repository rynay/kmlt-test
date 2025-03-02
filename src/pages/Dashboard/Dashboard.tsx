import { useEffect, useState } from "react";
import { Site, Test } from "../../types";
import { getSites, getTests } from "../../api/api";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import Page from "../../components/Page";

export const Dashboard = () => {
    const [tests, setTests] = useState<Test[]>([])

    useEffect(() => {
      const fetchAndSetData = async () => {
        try {
          const fetchedTests = await getTests();
          const fetchedSites = await getSites();
          if (fetchedSites) {
            setTests((fetchedTests || []).map(
              test => ({
                ...test,
                site: fetchedSites.find(el => el.id === test.siteId),
              })
            ))
          }
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchAndSetData();
    }, []);
  
    return (
      <Page title="Dashboard">
        <Search itemsCount={tests.length} onSearch={() => {}} />
        <Filter />
        <List>
            {tests.map((test) => (
                <ListItem key={test.id} {...test} />
            ))}
        </List>
      </Page>
    )
}