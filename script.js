//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");
  const itemsPerPage = 20;
  let currentPage = 1;

  // Function to add items to the list
  function addItems() {
    for (let i = 1; i <= itemsPerPage; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${i + (currentPage - 1) * itemsPerPage}`;
      infiList.appendChild(listItem);
    }
  }

  // Initial load
  addItems();

  // Function to check if scroll is at the bottom
  function isScrollAtBottom() {
    return infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight;
  }

  // Function to handle the scroll event
  function handleScroll() {
    if (isScrollAtBottom()) {
      currentPage++;
      addItems();
    }
  }

  // Add scroll event listener
  infiList.addEventListener("scroll", handleScroll);
});

