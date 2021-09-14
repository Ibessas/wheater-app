export function formatCityName(city) {
  const { LocalizedName, AdministrativeArea, Country } = city;
  return (
    LocalizedName + ' - ' + AdministrativeArea.LocalizedName + ' - ' + Country.LocalizedName
  );
}
