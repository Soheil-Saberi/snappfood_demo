import Numeral from 'numeral';

const toFarsi = (num: any): string => {
  return num.replace(/\d/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'[d]);
};

const camaPrice = (num: any): string => {
  return toFarsi(Numeral(num).format('0,0'));
};

export { toFarsi, camaPrice };
