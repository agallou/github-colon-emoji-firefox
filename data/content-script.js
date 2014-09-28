function inject_page_script (scriptContent) { 
    script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptContent);
    document.getElementsByTagName("head")[0].appendChild(script);
}
 
inject_page_script(self.options.message);


