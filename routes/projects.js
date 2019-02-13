var data = require("../projects-data.json");

exports.view = function(req, res) {
    let project = req.params.project;

    let projects = data.projects;

    for(let i =0; i< projects.length; i++){
        let pro = projects[i];
        if(pro.url === project){
            res.render("projects", {
                data,
                pro,
                title: "Projects",
                nav: "About",
                link: "about"
            });
            return;
        }
        
    };
    res.render("home", {
        data,
        title: "Projects",
        nav: "About",
        link: "about"
    });
    return;
};




