

// Left side bar ul li toggle and subMenu

function toggleSubMenu(submenuId, iconId) {
    const submenu = document.getElementById(submenuId + '-submenu');
    const angleRightIcon = document.getElementById(iconId);
  
    if (submenu) {
      submenu.classList.toggle('hidden');
    }
  
    if (angleRightIcon) {
      angleRightIcon.classList.toggle('rotate-90');
    }
  }
    
  

  // Right Side Bar Creact the page start 
  function changeContent(content) {
    var rightSidebarContent = document.getElementById("right-sidebar-content");
    var contentDiv = document.getElementById(content);

    if (rightSidebarContent && contentDiv) {
      var allContentDivs = rightSidebarContent.getElementsByClassName("content-div");
      for (var i = 0; i < allContentDivs.length; i++) {
        allContentDivs[i].style.display = "none";
      }

      contentDiv.style.display = "block";
    }   


  }

  var firstClicked = false; // Flag to track if a link has been clicked

  function handleFirstClick(content) {
    if (!firstClicked) {
      changeContent(content);
      firstClicked = true;
    }
  }

   // Right Side Bar Creact the page end 

  
 


  // document.addEventListener('DOMContentLoaded', function() {
  //   const tabs = document.querySelectorAll('.tab-button');
  //   const tabContents = document.querySelectorAll('.tab-content');
  
  //   tabs.forEach(tab => {
  //     tab.addEventListener('click', () => {
  //       tabs.forEach(t => {
  //         t.classList.remove('active-tab');
  //       });
  
  //       tab.classList.add('active-tab');
  
  //       tabContents.forEach(content => content.classList.add('hidden'));
  //       document.getElementById(`content${tab.id.slice(-1)}`).classList.remove('hidden');
  //     });
  //   });
  // });



  document.addEventListener('DOMContentLoaded', function() {
    function initializeTabs(containerId) {
      const container = document.getElementById(containerId);
      const tabs = container.querySelectorAll('.tab-button');
      const tabContents = container.querySelectorAll('.tab-content');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => {
            t.classList.remove('active');
          });

          tab.classList.add('active');

          tabContents.forEach(content => content.classList.add('hidden'));
          container.querySelector(`#content${tab.id.slice(-1)}`).classList.remove('hidden');
        });
      });
    }
// Initialize the tabs for another set of tabs
   initializeTabs('প্রোফাইলTab');  
   initializeTabs('অর্ডার-দিনTab'); 
   initializeTabs('অর্ডারলিস্টTab'); 
   initializeTabs('অর্ডারেরকাজTab'); 
   initializeTabs('ডেলিভারি-তারিখ-পরিবর্তন-Tab'); 
   initializeTabs('ডেলিভারী-কৃত-পোশাক-Tab'); 
   initializeTabs('আয়-ব্যয়ের-রিপোর্ট-Tab'); 
   initializeTabs('একাউন্ট-লগ-রিপোর্ট-Tab'); 
});




 
  function toggleBackgroundColor(element) {
    var rows = document.querySelectorAll('tr');
    rows.forEach(function(row) {
      row.classList.remove('selected');
    });
    element.parentElement.parentElement.classList.add('selected');
  } 




  function enableEdit() {
    var inputFields = document.querySelectorAll('#updatedInputText');
    var updateButton = document.getElementById('updateButton');
    var cancelButton = document.getElementById('cancel');
    var editButton = document.getElementById('পরিবর্তন');

    inputFields.forEach(function(field) {
        field.contentEditable = true;
        field.classList.add('bg-[#fcfcfc]'); // Add background color for visual indication of edit mode
    });

    updateButton.style.display = 'block';
    cancelButton.style.display = 'block';
    editButton.style.display = 'none';
}

function updateInfo() {
    var inputFields = document.querySelectorAll('#updatedInputText');
    var updateButton = document.getElementById('updateButton');
    var cancelButton = document.getElementById('cancel');
    var editButton = document.getElementById('পরিবর্তন');

    inputFields.forEach(function(field) {
        field.contentEditable = false;
        field.classList.remove('bg-[#fcfcfc]'); // Remove background color
    });

    updateButton.style.display = 'none';
    cancelButton.style.display = 'none';
    editButton.style.display = 'block';
}

function cancelEdit() {
    var inputFields = document.querySelectorAll('#updatedInputText');
    var updateButton = document.getElementById('updateButton');
    var cancelButton = document.getElementById('cancel');
    var editButton = document.getElementById('পরিবর্তন');

    inputFields.forEach(function(field) {
        field.contentEditable = false;
        field.classList.remove('bg-[#fcfcfc]'); // Remove background color
    });

    updateButton.style.display = 'none';
    cancelButton.style.display = 'none';
    editButton.style.display = 'block';
}



// script.js

document.addEventListener("DOMContentLoaded", function () {
  const selectAllCheckbox = document.getElementById("selectAll");
  const tbody = document.querySelector("tbody");

  selectAllCheckbox.addEventListener("change", function () {
      const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
      checkboxes.forEach((checkbox) => {
          checkbox.checked = selectAllCheckbox.checked;
          toggleBackgroundColor(checkbox);
      });
  });

  // Change background color when individual checkboxes are clicked
  const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
          toggleBackgroundColor(checkbox);
          // Check if it's the first checkbox in the row
          if (checkbox.closest("tr").querySelector("input[type='checkbox']") === checkbox) {
              const rowCheckboxes = checkbox.closest("tr").querySelectorAll("input[type='checkbox']");
              rowCheckboxes.forEach((rowCheckbox) => {
                  rowCheckbox.checked = checkbox.checked;
                  toggleBackgroundColor(rowCheckbox);
              });
          }
      });
  });

  // Function to toggle background color based on checkbox state
  function toggleBackgroundColor(checkbox) {
      const tr = checkbox.closest("tr");
      if (checkbox.checked) {
          tr.classList.add("selected-bg");
      } else {
          tr.classList.remove("selected-bg");
      }
  }
});



  // Popup box start 
   // Reusable function for creating popups
   function createPopup(popupTriggerId, popupId, closePopupId) {
    const popupTrigger = document.getElementById(popupTriggerId);
    const popup = document.getElementById(popupId);
    const closePopup = document.getElementById(closePopupId);

    // Event listener for opening the popup
    popupTrigger.addEventListener('click', function () {
      popup.style.display = 'flex'; // Show the popup
    });

    // Event listener for closing the popup
    closePopup.addEventListener('click', function () {
      popup.style.display = 'none'; // Hide the popup
    });
  }

  // Initialize popups
  createPopup('নতুন-খরচের-ধরণ-POPUP-1', 'নতুন-খরচের-ধরণ-POPUP-2', 'নতুন-খরচের-ধরণ-POPUP-close');
  createPopup('খরচ-যুক্ত-করুন-popup1', 'খরচ-যুক্ত-করুন-popup2', 'খরচ-যুক্ত-করুন-close');
  createPopup('নতুন-আয়ের-ধরণ-popup1', 'নতুন-আয়ের-ধরণ-popup2', 'নতুন-আয়ের-ধরণ-close');
  createPopup('আয়-যুক্ত-করুন-popup1', 'আয়-যুক্ত-করুন-popup2', 'আয়-যুক্ত-করুন-close');




// Function to initialize the datepicker on a given input element
function initializeDatepicker(inputId) {
  const input = document.getElementById(inputId);
  
  // Get the current date in the format "DD MMM, YYYY"
  function getCurrentDate() {
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const now = new Date();
    const day = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    return `${day} ${month}, ${year}`;
  }

  // Set the current date as the placeholder for the input
  input.placeholder = getCurrentDate();
}

// Call the function for each datepicker input
initializeDatepicker('datePicker1');
initializeDatepicker('datePicker2');
initializeDatepicker('একাউন্ট-লগdatePicker1');
initializeDatepicker('একাউন্ট-লগdatePicker2');
  

    // <!-- ইনভয়েস লিস্ট javascript code end  -->
  