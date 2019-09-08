export const demo1 = s => {
  let s1 = s;
  let s2 =
    "DDDAAAAAAABACACDCABBACBCACACCACADCABCBCABDCCCDBDACABCDBBAABDCACDDBCBCBDCDCDCACCAAABDCBDCADCBBCDB";
  for (let i = 0; i < s2.length; i++) {
    s1 = s1.replace("$6", s2[i]);
  }
  console.log(s1);
};
export const demo2 = () => {
  let s1 =
    "ABABA  DBBBD  AAACD  DCACA  DBDCC  BCBAADDAD  CABCA  BDBCCADCB CCBCD  CBDACD  BABDA  CBBDDD CACAC BCBACAB DADBA CDDCAACD BDACB ADADC BCCAB A";
  console.log(s1.replace(/\s/g, ""));
};
