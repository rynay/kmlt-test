import { parseHostname } from "../../components/Hostname/helpers";
import { Site, Status, Test } from "../../types";

export const filterBySearchString = (
    searchString: string,
    items: Test[],
) => (
    items.filter(el => searchString.split(/\s+/).every(str1 => (
        el.name.split(/\s+/).some(str2 => (
          str2.toLowerCase().startsWith(str1.toLowerCase())
        ))
      )))
)

const statusOrder = {
    [Status.ONLINE]: 1,
    [Status.PAUSED]: 2,
    [Status.STOPPED]: 3,
    [Status.DRAFT]: 4,
}

export const sortByParam = (
    param: keyof Test,
    items: Test[],
    order: 'asc' | 'desc',
) => {
    if (param === 'status') {
        if (order === 'asc') {
            return [...items].sort((a, b) => (statusOrder[a[param]]! > statusOrder[b[param]]!) ? 1 : -1)
        } else {
            return [...items].sort((a, b) => (statusOrder[a[param]]! > statusOrder[b[param]]!) ? -1 : 1)
        }
    } else {
        if (order === 'asc') {
            return [...items].sort((a, b) => (a[param]! > b[param]!) ? -1 : 1)
        } else {
            return [...items].sort((a, b) => (a[param]! > b[param]!) ? 1 : -1)
        }
    }
}

export const mapTests = (sites: Site[], tests: Test[]) => (
    tests.map(test => ({
        ...test,
        siteValue: sites.find(el => el.id === test.siteId),
        site: parseHostname(sites.find(el => el.id === test.siteId)?.url!)
    }))
)