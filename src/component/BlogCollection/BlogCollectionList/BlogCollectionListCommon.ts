import {QueryPageResult} from "../../../model/QueryPageResult";
import React from "react";
import BlogCollection from "../../../model/visitor/BlogCollection";

export interface BlogCollectionListProps {
    queryPageResult : QueryPageResult<BlogCollection>
    handlePageChange : (event: React.ChangeEvent<unknown>, value: number) => void;
}