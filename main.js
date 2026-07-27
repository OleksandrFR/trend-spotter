const navList = document.getElementById('navList');
const indicator = document.getElementById('navIndicator');
const links = navList.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const rect = link.getBoundingClientRect();
    const navRect = navList.getBoundingClientRect();
    indicator.style.left = (rect.left - navRect.left) + 'px';
    indicator.style.width = rect.width + 'px';
  });
});

navList.addEventListener('mouseleave', () => {
  indicator.style.width = '0';
});