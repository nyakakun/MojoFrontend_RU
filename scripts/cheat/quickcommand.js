qucick_command = [
    { name: "Вылечить всех", command: "heal", args: [] },
    { name: "Текущая позиция", command: "position", args: [] },
    {
        name: "Добавить моры",
        command: "give 202",
        args: [
            { type: "number", default: 100000, width: 145 }
        ]
    },
    {
        name: "Добавить опыта приключений",
        command: "give 102",
        args: [
            { type: "number", default: 1000000, width: 145 }
        ]
    },
    {
        name: "Добавить опыта персонажа",
        command: "give 101",
        args: [
            { type: "number", default: 1000000, width: 145 }
        ]
    },
    {
        name: "Добавить камней истока (гемы)",
        command: "give 201",
        args: [
            { type: "number", default: 10000, width: 120 }
        ]
    },
    {
        name: "Добавить \"Переплетающиеся судьбы\"",
        command: "give 223",
        args: [
            { type: "number", default: 10000, width: 100 }
        ]
    },
    {
        name: "Добавить \"Судьбоносные встречи\"",
        command: "give 224",
        args: [
            { type: "number", default: 10000, width: 100 }
        ]
    },
    { name: "Бессмертие", command: "godmode", args: [] },
    {
        name: "Установить уровень мира(Нужно перелогиниться)",
        command: "setworldlevel",
        args: [
            { type: "number", default: 8, width: 60 }
        ]
    },
    { name: "Выдать всех персонажей, оружие и предметы", command: "giveall", args: [] },
    { name: "Удалить все", command: "clear all", args: [] },
    {
        name: "Уровень E",
        command: "talent e",
        args: [
            { type: "number", default: 10, width: 60 }
        ]
    },
    {
        name: "Уровень Q",
        command: "talent q",
        args: [
            { type: "number", default: 10, width: 60 }

        ]
    },
    {
        name: "Уровень Автотычек",
        command: "talent n",
        args: [
            { type: "number", default: 10, width: 60 }
        ]
    },
]

function genQuickCommand() {
    var i = 0;
    var arg = 0;
    for (i = 0; i < qucick_command.length; i++) {
        var command = qucick_command[i];
        var div = document.createElement("div");
        var label = document.createElement("span");
        var div2 = document.createElement("div");
        var button = document.createElement("button");
        var hr = document.createElement("hr");
        var hiddenCommand = document.createElement("input");

        hr.classList.add("solid");
        div.classList.add('commandGroup');
        label.innerText = command.name;
        button.innerText = "Выполнить";
        div.appendChild(label);
        div.appendChild(div2);

        hiddenCommand.value = command.command;
        hiddenCommand.classList.add('hidden');
        div2.appendChild(hiddenCommand);
        for (arg = 0; arg < command.args.length; arg++) {
            var arg_item = command.args[arg];
            switch (arg_item.type) {
                case "number":
                    var input = document.createElement('input');
                    input.type = arg_item.type;
                    input.value = arg_item.default;
                    if (arg_item.width) {
                        input.style.width = arg_item.width + 'px';
                    }
                    div2.appendChild(input);
            }
        }


        div2.appendChild(button);
        panel.appendChild(div);
        button.onclick = (e) => {
            var parent = e.target.parentNode;
            var payload = "";
            var first = true;
            for (var child = parent.firstChild; child !== null; child = child.nextSibling) {
                if (child.tagName != "INPUT") continue;
                if (!first) {
                    payload += " ";
                }
                first = false;
                payload += child.value;
            }
            sendCommand(payload);
        }
        panel.appendChild(hr);
    }
}