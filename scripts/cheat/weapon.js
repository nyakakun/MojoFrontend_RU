function genWeapon() {
    var panel = document.getElementById("panel");
    panel.innerHTML = `<div class="form">
    <h2>Добавление оружия</h2>
            <label for="weapon-id">Название оружия:</label>
                <div style="display: flex;">
                    <select id="weapon-filter" style="flex: 2">
                        <option value="0"> Фильтр:Все </option>
                        <option value="1"> Фильтр:1★ </option>
                        <option value="2"> Фильтр:2★ </option>
                        <option value="3"> Фильтр:3★ </option>
                        <option value="4"> Фильтр:4★ </option>
                        <option value="5"> Фильтр:5★ </option>
                    </select>
                    <select id="weapon-id" style="flex: 4; margin-left: 0.5em"> </select>
                </div>
            <label for="amount">Количество:</label><input type="number" id="amount" name="amount" value=1 />
            <label for="level">Уровень:</label><input type="number" id="level" name="level" value=90 />
            <label for="refine">Пробуждение:</label><input type="number" id="refine" name="refine" value=5 />
            <button id="execute">Добавить</button>
    </div>`;

    updateWeaponList();
    document.getElementById("weapon-filter").onchange = updateWeaponList;
    document.getElementById("execute").onclick = () => {
        var weaponId = document.getElementById("weapon-id").value;
        var amount = document.getElementById("amount").value;
        var level = document.getElementById("level").value;
        var refine = document.getElementById("refine").value;
        sendCommand(`give ${weaponId} ${amount} ${level} ${refine}`);
    }
}

function updateWeaponList() {
    var filter = document.getElementById("weapon-filter").value;
    var select = document.getElementById("weapon-id");
    select.innerHTML = "";
    weapon_list.forEach(element => {
        if (filter == 0 || element.level == filter) {
            var o = document.createElement("option");
            o.innerText = `${element.name} - ${element.id}`;;
            o.value = element.id;
            select.appendChild(o);
        }

    });

}