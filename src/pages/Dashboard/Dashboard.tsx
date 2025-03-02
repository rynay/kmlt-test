import { useCallback, useEffect, useRef, useState } from "react";
import { Test } from "../../types";
import { getSites, getTests } from "../../api/api";
import List from "../../components/List";
import ListItem from "../../components/ListItem";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import Page from "../../components/Page";
import Loader from "../../components/Loader";
import { filterBySearchString, mapTests, sortByParam } from "./helpers";
import { FILTERS } from "./constants";
import Empty from "../../components/Empty";

export const Dashboard = () => {
    const [tests, setTests] = useState<Test[]>([]);
    const [filteredTests, setFilteredTests] = useState<Test[]>([]);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState<keyof Test>();
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState<'asc' | 'desc'>('asc')

    useEffect(() => {
      const fetchAndSetData = async () => {
        setLoading(true);
        try {
          const fetchedTests = await getTests();
          const fetchedSites = await getSites();
          setLoading(false);
          if (fetchedSites) {
            const testResults = mapTests(fetchedSites, fetchedTests || []);
            setFilteredTests(testResults);
            setTests(testResults);
          }
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchAndSetData();
    }, []);

    const handleChange = useCallback((
      search: string,
      order: 'asc' | 'desc',
      tests: Test[],
      sort?: keyof Test,
    ) => {
      setFilteredTests(
        filterBySearchString(
          search, sort ? sortByParam(sort, tests, order) : tests
        )
      )
    }, [])
    
    const prevSortParam = useRef<keyof Test>(null);
    const handleSort = useCallback((s: keyof Test) => {
      setSort(s);
      if (prevSortParam.current === s) setOrder(order => (order === 'asc') ? 'desc' : 'asc')
      else setOrder('asc');
      prevSortParam.current = s;
    }, []);

    useEffect(() => {
      handleChange(
        search,
        order,
        tests,
        sort,
      );
    }, [
      handleChange,
      sort,
      search,
      order,
      tests
    ])

    const handleReset = useCallback(() => {
      setSearch('');
    }, []);

    return (
      <Page title="Dashboard">
        <Search
          itemsCount={filteredTests.length}
          search={search}
          onSearch={setSearch}
        />
        {!!filteredTests.length && <Filter sort={sort} order={order} onSort={handleSort} filters={FILTERS} />}
        {!filteredTests.length && !loading && <Empty onReset={handleReset} />}
        <Loader loading={loading} />
        <List>
          {filteredTests.map((test) => (
            <ListItem key={test.id} {...test} />
          ))}
        </List>
      </Page>
    )
}