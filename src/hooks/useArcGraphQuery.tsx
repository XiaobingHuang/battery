import { useQuery, QueryHookOptions, DocumentNode  } from "@apollo/client";
import merge from "lodash/merge";
import { useEffect } from "react";
import { useNotification } from "@arctrade/relay";

const useArcGraphQuery  = (query:DocumentNode, _options:QueryHookOptions = {}) => {
  const notification = useNotification();
  const options = {};

  const req = useQuery(query, merge(_options, options));

  useEffect(() => {
    if (req.error) {
    }
  }, [req.error]);

  return req;
};

export default useArcGraphQuery;
