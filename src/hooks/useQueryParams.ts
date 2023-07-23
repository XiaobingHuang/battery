import React from "react";
import { useLocation, useNavigate } from "react-router";
import qs from "query-string";

const useQueryParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const nav = useNavigate();

  const set = (key, val) => {
    let _val = val;

    if (typeof val !== "string") {
      _val = JSON.stringify(val);
    }
    searchParams.set(key, encodeURI(_val));
    update();
  };

  const get = (key) => {
    return searchParams.get(key);
  };

  const remove = (key) => {
    searchParams.delete(key);
  };

  const update = () => {
    // history.replace()
    var newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?" +
      searchParams;
    // window.history.pushState({path:newurl},'',newurl);
    // @ts-ignore
    throw Error("NOT USED NEED TO FIX")
    // history.replace({ search: "?" + searchParams });
  };

  const getAll = () => {
    return qs.parse(location.search);
  };

  return {
    set,
    get,
    getAll,
    remove,
    update,
    location,
    searchParams,
  };

  // return
};

export default useQueryParams;
