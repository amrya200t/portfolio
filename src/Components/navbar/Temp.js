// const removeActiveClasses = () => {
//   const navLinks = [...document.querySelectorAll("header nav ul li a")];
//   navLinks.pop();
//   navLinks.forEach((link) => {
//     link.classList.remove("border-gold");
//     link.classList.add("border-transparent");
//   });
// };

// const addActiveClasses = (sectionId) => {
//   console.log(document.getElementById(sectionId));
//   document.getElementById(sectionId).classList.add("border-gold");
//   document.getElementById(sectionId).classList.remove("border-transparent");
// };

// const onScroll = () => {
//   const scrollPosition = window.scrollY;

//   if (location.pathname === "/") {
//     const sections = [
//       document.getElementById("about"),
//       document.getElementById("projects"),
//       document.getElementById("social"),
//     ];

//     sections.forEach((section) => {
//       if (
//         scrollPosition >= section.offsetTop &&
//         scrollPosition < section.offsetTop + section.offsetHeight
//       ) {
//         const curId = section.attributes.id.value;
//         removeActiveClasses();
//         addActiveClasses(curId);
//         console.log(curId);
//       }
//     });
//   }
// };

// window.addEventListener("scroll", () => {
//   onScroll();
// });

// useEffect(() => {
//   const sections = [
//     document.getElementById("about"),
//     document.getElementById("projects"),
//     document.getElementById("social"),
//   ];

//   const section = (entries) => {
//     const [entry] = entries;
//     console.log(entry.target);
//     console.log(entry.isIntersecting, entry.isVisible);
//     if (entry.isIntersecting && entry.isVisible) {
//       document
//         .querySelectorAll("header nav ul li a")[0]
//         .classList.add("border-gold");
//     } else {
//       document
//         .querySelectorAll("header nav ul li a")[0]
//         .classList.remove("border-gold");
//     }
//   };

//   const observer = new IntersectionObserver(section, {
//     root: null,
//     threshold: "1",
//     // rootMargin: `-${nav.getBoundingClientRect().height}px`,
//   });

//   sections.forEach((sec) => {
//     observer.observe(sec);
//   });
// });
