const fs = require('fs');

const html = '<!DOCTYPE html>\n<html lang="en">\n<head>\n   <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <link rel="stylesheet" href="./css/style.css">\n<title>Document</title>\n</head>\n<body>\n    <h1>Welcome</h1>\n    <script src="./js/script.js"></script>\n</body>\n</html>'

const runCommands = () => {
    fs.mkdir('frontend-scaffold', err => {
        if (err) {
            console.log(err);
            return;
        }
        fs.writeFile('./frontend-scaffold/index.html', html, err=> {
            if (err) {
                console.log(err);
                return;
            }
            fs.mkdir('./frontend-scaffold/css', err => {
                if (err) {
                    console.log(err);
                    return;
                }
                fs.writeFile('./frontend-scaffold/css/style.css', 'h1 {\n   text-align:center;\n}', err=> {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    fs.mkdir('./frontend-scaffold/js', err => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        fs.writeFile('./frontend-scaffold/js/script.js', 'alert("Welcome");', err => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            fs.mkdir('./frontend-scaffold/images', err => {
                                if (err) {
                                    console.log(err);
                                    return;
                                }
                                console.log("Frontend scaffold created successfully!");
                            })
                        });
                    })
                })
            })
        });
    })
}

runCommands();