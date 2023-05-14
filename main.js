const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
const menuBtn = document.querySelector(".mobile-menu");
const nav = document.querySelector(".main-nav");
const chatIcon = document.querySelector(".chat-icon");
const icon = document.querySelector(".chat-icon-single");
const chatBox = document.querySelector(".chat-box");
const chatTextbox = document.querySelector(".chat-box__textblock");

console.log(chatTextbox);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Check if any accordion tab is open
    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.show"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("show");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    // Toggle the show class
    accordionItemHeader.classList.toggle("show");

    // Generate the height for the accordion Body
    const accordionBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("show")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});

function toggleNav() {
  menuBtn.classList.toggle("change");
  if (menuBtn.classList.contains("change")) {
    menuBtn.src = "./src/images/icon-close.svg";
  } else {
    menuBtn.src = "./src/images/icon-hamburger.svg";
  }
  nav.classList.toggle("show");
  header.classList.toggle("show");
  // console.log(e.target);
}

const chatboxHandler = () => {
  if (icon.classList.contains("bx-message-rounded-dots")) {
    icon.classList.remove("bx-message-rounded-dots");
    icon.classList.add("bx-x");
  } else {
    icon.classList.add("bx-message-rounded-dots");
    icon.classList.remove("bx-x");
  }
  chatBox.classList.toggle("show");

  setTimeout(() => {
    chatTextbox.classList.add("show");
  }, 1000);
};

menuBtn.addEventListener("click", toggleNav);
chatIcon.addEventListener("click", chatboxHandler);
