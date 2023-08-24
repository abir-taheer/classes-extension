async function doStuff() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  await sleep(5000);

  const isSignInPage = Boolean(document.querySelector(".form-signin"));

  if (isSignInPage) {
    const usernameInput = document.querySelector("#CUNYfirstUsernameH");
    const passwordInput = document.querySelector("#CUNYfirstPassword");

    // TODO UPDATE
    usernameInput.value = "username";
    passwordInput.value = "password";

    const submitButton = document.querySelector("#submit");
    submitButton.click();
  }

  const needsToClickSignInButton = Boolean(
    document.querySelector(".pslogininfo")
  );

  if (needsToClickSignInButton) {
    const signInButton = document.querySelector(".sign_in_button");
    signInButton.click();
  }

  const getNeedsToTry = () =>
    document
      .querySelector("#crnListWarnings")
      .innerText.toLowerCase()
      .includes("you are not enrolled for this schedule");

  console.log("waiting 5s before checking if needs to do stuff");

  await sleep(5000);

  const isStudentCenterPage =
    window.location.hostname === "sb.cunyfirst.cuny.edu" &&
    window.location.pathname === "/criteria.jsp";

  if (isStudentCenterPage) {
    while (true) {
      document.querySelector("#do_search")?.click();
      await sleep(4500);

      document.querySelector(".button_get_schedule")?.click();
      await sleep(4500);

      document.querySelector(".button_do_actions")?.click();
      await sleep(4500);

      document.querySelector(".big_button.button_return")?.click();
      await sleep(4500);
    }
  }
}

doStuff();
