interface Affirmation {
  data: string;
}
async function getAffirmation(): Promise<Affirmation> {
  try {
    const response = await fetch("/api/jokes");
    if (!response.ok) {
      throw new Error("could not fetch joke");
    }
    const json = await response.json();
    console.log(json);
    return json as Affirmation;
  } catch (error) {
    console.error(error);
    return error;
  }
}

document.addEventListener("DOMContentLoaded", async function () {
  const targetElement = document.getElementById("target");
  const barElement = document.getElementById("bar");
  const setJoke = async (target: HTMLElement) => {
    const affirmation = await getAffirmation();
    target.textContent = affirmation.data;
  };
  let width = 0;
  const animation = async (_time: number) => {
    if (barElement && targetElement) {
      barElement.style.width = `${width}px`;
      width += 0.5;
      if (width > 200) {
        await setJoke(targetElement);
        width = 0;
      }
    }
    window.requestAnimationFrame(animation);
  };
  if (targetElement && barElement) {
    window.requestAnimationFrame(animation);
  } else {
    throw new Error("Could not find #target element");
  }
});
