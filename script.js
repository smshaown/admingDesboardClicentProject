

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
    
// Right Side Bar Create the page start 
function changeContent(content, clickedLink) {
  var rightSidebarContent = document.getElementById("right-sidebar-content");
  var contentDiv = document.getElementById(content);

  if (rightSidebarContent && contentDiv) {
    var allContentDivs = rightSidebarContent.getElementsByClassName("content-div");
    for (var i = 0; i < allContentDivs.length; i++) {
      allContentDivs[i].style.display = "none";
    }

    contentDiv.style.display = "block";

    // Remove the 'active-link' class from all links
    var allLinks = document.querySelectorAll(".submenu-link");
    allLinks.forEach(function(link) {
      link.classList.remove("active-link");
    });

    // Add the 'active-link' class to the clicked link
    if (clickedLink) {
      clickedLink.classList.add("active-link");
    }
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
   initializeTabs('অর্ডার-ডেলিভারি-রিপোর্ট-Tab'); 
   initializeTabs('জমা-বাকি-খরচ-দেখুন-রিপোর্ট-Tab'); 
   initializeTabs('সর্বমোট-বযয়-টাকা-Tab'); 
   initializeTabs('গ্রাহকদের-এসএমএস-পাঠানTab'); 
});







  // Popup box start 

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
  createPopup('কর্মচারী-যুক্ত-করুন-popup1', 'কর্মচারী-যুক্ত-করুন-popup2', 'কর্মচারী-যুক্ত-করুন-close');
  createPopup('পারিশ্রমিক-যুক্ত-করুন-popup1', 'পারিশ্রমিক-যুক্ত-করুন-popup2', 'পারিশ্রমিক-যুক্ত-করুন-close');
  createPopup('খরচ-ঋণ-প্রদান-popup1', 'খরচ-ঋণ-প্রদান-popup2', 'খরচ-ঋণ-প্রদান-close');
  createPopup('ঋণ-ফেরত-popup1', 'ঋণ-ফেরত-popup2', 'ঋণ-ফেরত-close');
  createPopup('Add-New-Group-popup1', 'Add-New-Group-popup2', 'Add-New-Group-close');
  createPopup('Add-New-Mobile-Number-popup1', 'Add-New-Mobile-Number-popup2', 'Add-New-Mobile-Number-close');
  createPopup('Customer-popup1', 'Customer-popup2', 'Customer-close');




// Function to initialize the datepicker on a given input element
function initializeDatepicker(inputId) {
  const input = document.getElementById(inputId);
  
  // Get the current date in the format "DD MMM, YYYY"
  function getCurrentDate() {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const now = new Date();
    const day = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    return `${day} ${month} ${year}`;
  }

  // Set the current date as the placeholder for the input
  input.placeholder = getCurrentDate();
}

// Call the function for each datepicker input
initializeDatepicker('datePicker1');
initializeDatepicker('datePicker2');
initializeDatepicker('একাউন্ট-লগdatePicker1');
initializeDatepicker('একাউন্ট-লগdatePicker2');
initializeDatepicker('অর্ডার-ডেলিভারিdatePicker1');
initializeDatepicker('অর্ডার-ডেলিভারিdatePicker2');
initializeDatepicker('লেনদেন-লগdatePicker1');
initializeDatepicker('লেনদেন-লগdatePicker2');
  



    // selected Value option start
    document.addEventListener("DOMContentLoaded", function() {
      function toggleContent(selectedValue) {
        var contents = document.getElementsByClassName("custom-tab-content");
        for (var i = 0; i < contents.length; i++) {
          contents[i].style.display = "none";
        }
  
        var selectedContent = document.getElementById(selectedValue + "Content");
        if (selectedContent) {
          selectedContent.style.display = "block";
        }
      }
  
      function setupDropdown(dropdownId) {
        var selectElement = document.getElementById(dropdownId);
        var defaultSelectedValue = selectElement.options[selectElement.selectedIndex].value;
        toggleContent(defaultSelectedValue);
  
        selectElement.addEventListener("change", function() {
          var selectedValue = selectElement.options[selectElement.selectedIndex].value;
          toggleContent(selectedValue);
        });
      }
  
      // Call setupDropdown for each dropdown you want to initialize
      setupDropdown("custom-grid-state-1");
      setupDropdown("custom-grid-state-2");
      // Add more if needed
    });
  