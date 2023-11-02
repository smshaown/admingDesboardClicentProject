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

  
  
  function changeContent(page) {
    const pageContent = document.getElementById('page-content');  
    pageContent.innerText = `Content for ${page}`;
  }
  
  function changeSubpageContent(subpage) {    
    const pageContent = document.getElementById('page-content');  
    pageContent.innerText = `Content for ${subpage}`;
  }


  // <!-- ইনভয়েস লিস্ট Tabs code start  -->


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
  

    // <!-- ইনভয়েস লিস্ট javascript code end  -->
  