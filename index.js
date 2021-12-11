function currency (number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(number);
}

function separator (number) {
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  }).format(number);
}

const profil = {
  name: "name kosong",
  address: "Jalan Kosong"
}

export {currency,separator,profil}