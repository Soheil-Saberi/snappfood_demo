import Numeral from 'numeral';

const toFarsi = (num: string): string | null => {
  if (!num.length || isNaN(parseInt(num))) {
    return null;
  }
  return num.replace(/\d/g, (d: any) => '۰۱۲۳۴۵۶۷۸۹'[d]);
};

const camaPrice = (num: string): string | null => {
  if (!num.length || isNaN(parseInt(num))) {
    return null;
  }
  return toFarsi(Numeral(num).format('0,0'));
};

export { toFarsi, camaPrice };
