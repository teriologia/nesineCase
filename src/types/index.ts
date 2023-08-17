export type betDataType = {
  C: string;
  D: string;
  DAY: string;
  HEC: Boolean;
  IMF: Boolean;
  LN: string;
  N: string;
  NID: string;
  OCG: OCG;
  S: string;
  T: string;
  TYPE: string;
};

export type OCG = {
  "1": {
    ID: string;
    N: string;
    MBS: string;
    SO: string;
    OC: {
      "0": {
        G: string;
        ID: string;
        IMF: Boolean;
        MBS: string;
        N: string;
        O: string;
        OD: Number;
      };
      "1": {
        G: string;
        ID: string;
        IMF: Boolean;
        MBS: string;
        N: string;
        O: string;
        OD: Number;
      };
    };
  };
  "2": {
    ID: string;
    N: string;
    MBS: string;
    SO: string;
    OC: {
      "3": {
        G: string;
        ID: string;
        IMF: Boolean;
        MBS: string;
        N: string;
        O: string;
        OD: Number;
      };
      "4": {
        G: string;
        ID: string;
        IMF: Boolean;
        MBS: string;
        N: string;
        O: string;
        OD: Number;
      };
      "5": {
        G: string;
        ID: string;
        IMF: Boolean;
        MBS: string;
        N: string;
        O: string;
        OD: Number;
      };
    };
  };
  "5": {
    ID: string;
    N: string;
    MBS: string;
    SO: string;
    OC: {
      "25": {
        G: string;
        ID: string;
        IMF: Boolean;
        MBS: string;
        N: string;
        O: string;
        OD: Number;
      };
      "26": {
        G: string;
        ID: string;
        IMF: Boolean;
        MBS: string;
        N: string;
        O: string;
        OD: Number;
      };
    };
  };
};

export type selectedItem = '1'|'x'|'alt'|'ust'|'1x'|'1-2'|'x2'|'99';
