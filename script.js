

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

  
 


  document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active-tab');
        });
  
        tab.classList.add('active-tab');
  
        tabContents.forEach(content => content.classList.add('hidden'));
        document.getElementById(`content${tab.id.slice(-1)}`).classList.remove('hidden');
      });
    });
  });


  // - ইনভয়েস লিস্ট Right-sidebare => left side icon-selected toggle Background color chenge code function   
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








  // kaje dibe vobishe 
  function openNewPage() {
    var newPage = window.open('about:blank', '_blank');
    newPage.document.write('<html><head><title>New Page</title></head><body>Content goes here</body></html>');
    newPage.document.close();
  }
  

    // <!-- ইনভয়েস লিস্ট javascript code end  -->
  