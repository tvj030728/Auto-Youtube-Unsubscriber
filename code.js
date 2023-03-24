// Change '구독 취소' in 9th line to 'Unsubscribe' if you are using English version of YouTube. or not, change it to your language.

setInterval(function () {
  subscriptionButton = document.querySelector(
    "ytd-subscribe-button-renderer button"
  );
  subscriptionButton.click();
  setTimeout(function () {
    document.querySelector("[aria-label='구독 취소']").click();
    //document.querySelector("[aria-label='Unsubscribe']").click();
    setTimeout(function () {
      const element = document.querySelector("ytd-channel-renderer");
      if (element) {
        element.remove();
      }
    }, 1000);
  }, 1000);
}, 1000);
