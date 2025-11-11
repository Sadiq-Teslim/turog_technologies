type PathMapping = [RegExp, string];

export const useFetchActiveMenuItem = (pathname): string => {
  const paths: PathMapping[] = [
    [/^\/$/, "dashboard"],
    [/^\/documents/, "documents"],
    [/^\/messages/, "messages"],
    [/^\/settings/, "settings"],
    [/^\/clients/, "clients"],
    [/^\/merchants/, "merchants"],
    [/^\/communities/, "communities"],
    [/^\/savings/, "savings"],
    [/^\/credits/, "credits"],
    [/^\/investments/, "investments"],
  ];

  const activePath = paths
    .map((item) => {
      const [regex, index] = item;
      if (regex.test(pathname)) {
        return index;
      }
      return null;
    })
    .filter((index): index is string => index !== null);

  return activePath[0] || "dashboard";
};
