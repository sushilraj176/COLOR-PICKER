export function fetchData() {
  return fetch(
    "https://raw.githubusercontent.com/NishantChandla/color-test-resources/main/xkcd-colors.json"
  )
    .then((res) => res.json())

    .catch((err) => {
      console.log(err.message);
    });
}
