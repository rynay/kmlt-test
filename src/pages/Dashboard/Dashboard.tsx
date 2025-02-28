import { useEffect, useState } from "react";
import { Site, Test } from "../../types";
import { getSites, getTests } from "../../api/api";
import List from "../../components/List";
import ListItem from "../../components/ListItem";

export const Dashboard = () => {
    const [sites, setSites] = useState<Site[]>([])
    const [tests, setTests] = useState<Test[]>([])
  
    useEffect(() => {
      const fetchAndSetData = async () => {
        try {
          const fetchedSites = await getSites();
          if (fetchedSites) setSites(fetchedSites);
          
          const fetchedTests = await getTests();
          if (fetchedTests) setTests(fetchedTests);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchAndSetData();
    }, []);
  
    console.log({ sites, tests })

    return (
        <div>
            <h1>Dashboard</h1>
            <input /> {/* Search */}
            <List>
                {tests.map((test) => (
                    <ListItem key={test.id} {...test} />
                ))}
            </List>
        </div>
    )
}