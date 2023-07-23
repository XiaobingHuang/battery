// import { useEffect, useMemo, useState } from 'react';
// import { isEqual, merge } from 'lodash';
// import {DocumentNode, QueryHookOptions} from "@apollo/client";
// const useSSRMGraphQuery = (
//         query:DocumentNode,
//         queryOptions:QueryHookOptions = {},
//         pageSize = 20,
//         sortMap?) => {
//     const [isNoData, setIsNoData] = useState(false);
//     const [gridApi, setGridApi] = useState(null);
//     const [params, setParams] = useState(null);
//     const [rowData, setRowData] = useState([]);
//     const [responseData, setResponseData] = useState(null);
//     const [internalQuery, setInternalQuery] = useState(null);
//
//
//     const _query = useMemo(() => {
//         const row = params?.request?.startRow;
//         const isNewQuery = !isEqual(internalQuery, query);
//         const _pageSize = params?.api?.paginationGetPageSize() ?? pageSize;
//         const page = isNewQuery ? 1 : row ? Math.floor(row / _pageSize) : 1;
//
//         const pageQuery: any = {
//             page,
//             pageSize,
//         };
//
//         if (params?.request?.sortModel[0]) {
//             if (sortMap) {
//                 pageQuery.sortBy = sortMap[params?.request?.sortModel[0].colId];
//             } else {
//                 pageQuery.sortBy = params?.request?.sortModel[0].colId.toUpperCase();
//             }
//
//             // if (!pageQuery.soryBy) {
//             //   throw Error('Sort by could not be resolved');
//             // }
//
//             pageQuery.sortOrder = params?.request?.sortModel[0].sort.toUpperCase();
//         }
//
//         if (isNewQuery) {
//             // params?.api?.paginationGoToFirstPage();
//             setInternalQuery(query);
//         }
//
//         return merge({}, query, pageQuery);
//     }, [query, params?.request]);
//
//     useEffect(() => {
//         if(gridApi){
//             // gridApi.refreshServerSideStore()
//         }
//     }, [_query])
//
//     const q = queryFn(_query, merge(queryOptions, {
//         enabled: params !== null,
//     }));
//
//     useEffect(() => {
//         if (q.data && params) {
//             const { data, totalCount } = q.data;
//
//             const _data = queryOptions.dataKey ? data[queryOptions.dataKey] : data
//
//             if(!_data || _data.length === 0){
//                 setIsNoData(true)
//                 params.success({
//                     rowData: [{}],
//                     rowCount: 1,
//                 });
//                 setRowData([])
//                 setResponseData(null)
//             } else {
//                 setIsNoData(false)
//                 setRowData(_data)
//                 setResponseData(data)
//                 params.success({
//                     rowData: _data || [],
//                     rowCount: totalCount,
//                 });
//
//             }
//         }
//     }, [q.data, params]);
//
//     const createDatasource = useMemo(() => {
//         return {
//             getRows: async (params) => {
//                 setGridApi(params.api);
//                 setParams(params);
//             },
//         };
//     }, []);
//
//     return {
//         ...q,
//         isNoData,
//         responseData,
//         rowData,
//         dataSource: createDatasource,
//         finalQuery: _query
//     };
// };
//
// export default useSSRMGraphQuery;
//
