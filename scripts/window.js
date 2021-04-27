    let myWindow;
    const openBlogButton = document.getElementById('blog');

    function newWindow() {
        let expanded = openBlogButton.getAttribute('aria-expanded') === 'true' || false;
        openBlogButton.setAttribute('aria-expanded', !expanded);
    
        myWindow = window.open("http://deshommesetdeschatons.tumblr.com//", "deshommes", "width=400, height=400, left=25px, top=25px, resizable=yes, scrollbars=yes, location=yes");
        myWindow.focus();

  }