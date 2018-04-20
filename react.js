//const jsContainer = document.getElementById("js");
var reactContainer = document.getElementById("react");

    //jsContainer.innerHTML = `
    //  <div class="demo">
    //    Hello JS
    //    <input />
    //    <p>${new Date()}</p>
    //  </div>
    //`;

    ReactDOM.render(
        React.createElement(
            "div", {
                className: "stats mdl-grid"
            },
            React.createElement("div", {
                    className: "mdl-cell mdl-cell--12-col mdl-card mdl-shadow--16dp"
                },
                React.createElement("div", {
                        className: "mdl-grid"
                    },
                    React.createElement("div", {
                        className: "mdl-cell mdl-cell--7-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone"
                    }, React.createElement("h2", null, "Total Movie Sales"), React.createElement("h4", null, "{{movies[0].title}} vs {{movies[1].title}}"), React.createElement("canvas", {
                        id: "myChart"
                    })), React.createElement("div", {
                        className: "sales mdl-cell mdl-cell--5-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone"
                    }, React.createElement("div", {
                        className: "salesTitles"
                    }, React.createElement("h6", null, "Average number of sales in the past month in: ", React.createElement("span", null, "United States")), React.createElement("h4", null, React.createElement("span", null, "All sales: 162,884"))), React.createElement("div", {
                        className: "salesStates"
                    }, React.createElement("h3", null, "{{movies[0].weekSales}}"), React.createElement("h6", null, "Total orders - {{movies[0].title}}"), React.createElement("span", {
                        className: "mdl-chip mdl-chip--contact"
                    }, React.createElement("span", {
                        className: "movie1Bar mdl-chip__contact mdl-color--grey"
                    })), React.createElement("h3", null, "{{movies[1].weekSales}}"), React.createElement("h6", null, "Total orders - {{movies[1].title}}"), React.createElement("span", {
                        className: "mdl-chip mdl-chip--contact"
                    }, React.createElement("span", {
                        className: "movie2Bar mdl-chip__contact mdl-color--teal"
                    })))), React.createElement("div", {
                        className: "analysis mdl-cell mdl-cell--8-col-desktop mdl-cell--12-col-phone"
                    }, React.createElement("h6", null, React.createElement("span", null, "Analysis of sales: "), "The value has chnaged over the time, and last month reached a level over $50,000")), React.createElement("div", {
                        className: "update mdl-cell mdl-cell--4-col-desktop mdl-cell--12-col-phone"
                    }, React.createElement("span", null, React.createElement("i", {
                        className: "material-icons"
                    }, "update"), React.createElement("h6", null, "Update of on 16.07.2015"))))),
            React.createElement(
                "div", {
                    className: "movie mdl-grid"
                }, React.createElement("div", {
                    className: "mdl-cell mdl-cell--6-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone"
                }, React.createElement("div", {
                    className: "movieCard mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col"
                }, React.createElement("div", {
                    className: "movieOneRow mdl-grid"
                }, React.createElement("div", {
                    className: "mdl-cell mdl-cell--12-col-tablet mdl-cell--12-col-desktop"
                }, React.createElement("h1", null, "Movie 1")), React.createElement("div", {
                    className: "mdl-cell mdl-cell--4-col-tablet mdl-cell--6-col-desktop"
                }, React.createElement("h4", null, "May 3, 2015")), React.createElement("div", {
                    className: "mdl-cell mdl-cell--4-col-tablet mdl-cell--6-col-desktop"
                }, React.createElement("button", {
                    className: "mdl-button mdl-button--raised mdl-js-button dialog-button mdl-button--colored",
                    id: "movie1"
                }, "Buy Tickets")), React.createElement("div", {
                    className: "mdl-cell mdl-cell--4-col-tablet mdl-cell--6-col-desktop"
                }, React.createElement("h4", null, "May 4 2015")), React.createElement("div", {
                    className: "mdl-cell mdl-cell--4-col-tablet mdl-cell--6-col-desktop"
                }, React.createElement("button", {
                    className: "mdl-button mdl-button--raised mdl-js-button dialog-button mdl-button--colored",
                    id: "movie1"
                }, "Buy Tickets"))))), React.createElement("div", {
                    className: "mdl-cell mdl-cell--6-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone"
                }, React.createElement("div", {
                    className: "movieCard mdl-card mdl-shadow--8dp mdl-cell mdl-cell--12-col"
                }, React.createElement("div", {
                    className: "movieOneRow mdl-grid"
                }, React.createElement("div", {
                    className: "mdl-cell mdl-cell--12-col-tablet mdl-cell--12-col-desktop"
                }, React.createElement("h1", null, "Movie 2")), React.createElement("div", {
                    className: "mdl-cell mdl-cell--4-col-tablet mdl-cell--6-col-desktop"
                }, React.createElement("h4", null, "May 3 2015")), React.createElement("div", {
                    className: "mdl-cell mdl-cell--4-col-tablet mdl-cell--6-col-desktop"
                }, React.createElement("button", {
                    className: "mdl-button mdl-button--raised mdl-js dialog-button mdl-button--colored",
                    id: "movie2"
                }, "Buy Tickets")), React.createElement("div", {
                    className: "mdl-cell mdl-cell--4-col-tablet mdl-cell--6-col-desktop"
                }, React.createElement("h4", null, "May 4 2015")), React.createElement("div", {
                    className: "mdl-cell mdl-cell--4-col-tablet mdl-cell--6-col-desktop"
                }, React.createElement("button", {
                    className: "mdl-button mdl-button--raised mdl-js-button dialog-button mdl-button--colored",
                    id: "movie2"
                }, "Buy Tickets")))))
            ), React.createElement("dialog", {
                className: "mdl-dialog"
            }, React.createElement("section", {
                id: "oneBefore"
            }, React.createElement("h6", {
                className: "mdl-dialog__tile"
            }, "Movie 1 May 3 2015"), React.createElement("div", {
                className: "mdl-dialog__content"
            }, React.createElement("form", null, React.createElement("div", {
                className: "mdl-textfield mdl-js-textfield mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet"
            }, React.createElement("input", {
                className: "mdl-textfield__input",
                id: "firstName",
                type: "text",
                required: ""
            }), React.createElement("label", {
                className: "mdl-textfield__label",
                htmlFor: "firstName"
            }, "First Name"), React.createElement("span", {
                className: "mdl-textfield__error"
            }, "Please enter a valid name")), React.createElement("div", {
                className: "mdl-textfield mdl-js-textfield mdl-cell--6-col mdl-cell--12-col-tablet"
            }, React.createElement("input", {
                className: "mdl-textfield__input",
                type: "text",
                id: "lastName",
                required: ""
            }), React.createElement("label", {
                className: "mdl-textfield__label",
                htmlFor: "lastName"
            }, "Last Name"), React.createElement("span", {
                className: "mdl-textfield__error"
            }, "Please enter a valid last name")), React.createElement("div", {
                className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
            }, React.createElement("input", {
                className: "mdl-textfield__input",
                type: "number",
                id: "numberTickets",
                pattern: "[0-9]{2}",
                required: ""
            }), React.createElement("label", {
                className: "mdl-textfield__label",
                htmlFor: "numberTickets"
            }, "Number of tickets"), React.createElement("span", {
                className: "mdl-textfield__error"
            }, "Please enter a number between 1 and 99")), React.createElement("div", {
                className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
            }, React.createElement("input", {
                className: "mdl-textfield__input",
                type: "number",
                id: "credit",
                pattern: "",
                required: ""
            }), React.createElement("label", {
                className: "mdl-textfield__label",
                htmlFor: "credit"
            }, "Credit Card Number"), React.createElement("span", {
                className: "mdl-textfield__error"
            }, "Please enter a valid credit card number")), React.createElement("div", {
                className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
            }, React.createElement("input", {
                className: "mdl-textfield__input",
                type: "month",
                id: "month",
                pattern: "",
                required: ""
            }), React.createElement("label", {
                className: "mdl-textfield__label",
                htmlFor: "month"
            }, "Expiration Date"), React.createElement("span", {
                className: "mdl-textfield__error"
            }, "Please enter a valid credit card number")))), React.createElement("div", {
                className: "mdl-dialog__action"
            }, React.createElement("button", {
                type: "button",
                className: "agree mdl-button",
                id: "agree1"
            }, "Submit"), React.createElement("button", {
                type: "button",
                className: "close mdl-button",
                id: "close1"
            }, "Cancel"))),React.createElement("section",{id:"twoBefore"},React.createElement("h6",{className:"mdl-dialog__title"},"Movie 1 May 3 2015"),React.createElement("div",{className:"mdl-dialog__content",id:"twoContentsBefore"},React.createElement("img",{src:"img/download.png"}),React.createElement("p",null,"Thank you for your purchase {{firstName}}")),React.createElement("div",{className:"mdl-dialog__action"},React.createElement("button",{type:"button",className:"agree mdl-button", id:"agree2"},"Submit"),React.createElement("button",{type:"button",className:"close mdl-button", id:"close2"},"Cancel"))))
        ),
        /*Reacts version of html template*/
        reactContainer
    );


