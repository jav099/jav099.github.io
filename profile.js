// Keep a tall profile reachable before it settles into its sticky position.
const profile = document.querySelector(".profile__inner");
const masthead = document.querySelector(".masthead");

function updateProfilePosition() {
  const gap = 16;
  const headerBottom = masthead.getBoundingClientRect().bottom;
  const top = Math.min(
    headerBottom + gap,
    window.innerHeight - profile.getBoundingClientRect().height - gap,
  );
  profile.style.setProperty("--profile-sticky-top", `${top}px`);
}

const profileObserver = new ResizeObserver(updateProfilePosition);
profileObserver.observe(profile);
profileObserver.observe(masthead);
window.addEventListener("resize", updateProfilePosition);
updateProfilePosition();
