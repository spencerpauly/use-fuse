import Fuse from "fuse.js";
import { useEffect, useRef, useState } from "react";

interface FuseParams<T> {
  data: T[];
  keys?: any[];
}

const defaultOptions = {
  shouldSort: true,
  threshold: 0.1,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1
};

const DEFAULT_QUERY = "";

export const useFuse = <T>({
  data,
  keys,
  ...otherFuseProperties
}: FuseParams<T>) => {
  const [results, setResults] = useState<{ item: T; refIndex: number }[]>([]);
  const [search, setSearch] = useState(DEFAULT_QUERY);
  const fuse = useRef<any>();

  useEffect(() => {
    if (!data) {
      return;
    }
    fuse.current = new Fuse(data, {
      ...defaultOptions,
      ...otherFuseProperties,
      keys
    });
  }, [search, fuse, data, keys, otherFuseProperties]);

  useEffect(() => {
    async function set() {
      setResults(await fuse.current.search(search));
    }
    set();
  }, [search, fuse, data]);

  return { results, search, setSearch };
};
