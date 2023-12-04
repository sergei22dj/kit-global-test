import * as React from 'react'

type Fonts = {
  [key: string]: {
    fontFamily: string;
    fontWeight: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  };
};

export const fonts:Fonts = {
  f100:{
    fontFamily:'Gilroy-Thin',
    fontWeight:'100'
  },
  f200:{
    fontFamily:'Gilroy-UltraLight',
    fontWeight:'200'
  },
  f300:{
    fontFamily:'Gilroy-Light',
    fontWeight:'300'
  },
  f400:{
    fontFamily:'Gilroy-Regular',
    fontWeight:'400'
  },
  f500:{
    fontFamily:'Gilroy-Medium',
    fontWeight:'500'
  },
  f600:{
    fontFamily:'Gilroy-Semibold',
    fontWeight:'600'
  },
  f700:{
    fontFamily:'Gilroy-Bold',
    fontWeight:'700'
  },
  f800:{
    fontFamily:'Gilroy-Extrabold',
    fontWeight:'800'
  },
  f900:{
    fontFamily:'Gilroy-Black',
    fontWeight:'900'
  },
};
