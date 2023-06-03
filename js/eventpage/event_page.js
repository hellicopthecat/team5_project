const eventPageList = document.querySelectorAll(".eventpage__list ul li a");
const dialogs = document.querySelectorAll(".eventpage__modal dialog");

eventPageList.forEach((eventList, index) => {
  const handleEventPageModal = () => {
    dialogs[index].showModal();
  };

  eventList.addEventListener("click", handleEventPageModal);
});
