////////////// Customer Deletion ///////////////////
////////////////////////////////////////////////////

const BtnAdd = document.querySelector(".btn-add");
const BtnCreateArray = document.querySelector(".btn-create-array");
const InputContainer = document.getElementById("input-container");
const queryBox = document.getElementById("queryListArray");
const download = document.getElementById("saveQueries");
// mainData = [];

var indexId = 1;

function downloadContent(name, content) {
  var virtualButton = document.createElement("a");
  var file = new Blob([content], { type: "text/plain" });
  virtualButton.href = URL.createObjectURL(file);
  virtualButton.download = name;
  virtualButton.click();
}

function toQueryText(queryArray) {
  queryArray.map((data) => console.log(data.query));
}

// Create the input fields

BtnAdd.addEventListener("click", () => {
  var inputList = document.createElement("input");
  var rowContainer = document.createElement("div");

  inputList.setAttribute(`class`, `InputFieldEmail`);
  rowContainer.setAttribute(`class`, `input-box`);
  rowContainer.appendChild(inputList);
  inputList.setAttribute(`id`, `RowEmail${indexId}`);
  inputList.setAttribute(`placeholder`, `${indexId} Customer Email`);

  var inputList2 = document.createElement("input");
  inputList2.setAttribute("class", "InputFieldHO");

  rowContainer.appendChild(inputList2);
  inputList2.setAttribute(`id`, `RowHo${indexId}`);
  inputList2.setAttribute(`placeholder`, `Headoffice ID`);

  InputContainer.appendChild(rowContainer);
  indexId++;
});

// Create the data object to delete

BtnCreateArray.addEventListener("click", () => {
  const inputsEmail = InputContainer.querySelectorAll(".InputFieldEmail");
  const inputsHo = InputContainer.querySelectorAll(".InputFieldHO");
  queryBox.innerHTML = "";

  array = [...inputsHo].forEach((ho, index) => {
    const inputEm = inputsEmail[index];
    const query = `UPDATE snackify_profile SET email = 'DELETED', first_name = 'DELETED', last_name = 'DELETED', phone = 'DELETED' WHERE email = '${inputEm.value}' AND signup_headoffice_id = ${ho.value} LIMIT 1;`;
    paragraphe = document.createElement("p");

    if (inputEm.value.length > 4 && ho.value.length > 1) {
      paragraphe.textContent = query;
      queryBox.appendChild(paragraphe);
      return (mainData = {
        email: inputEm.value,
        ho: ho.value,
        query: `${query}`,
      });
    } else console.log("Wrong Array");
  });

  return array;
});

download.addEventListener("click", () => {
  if (typeof array !== "undefined") {
    arrayQueries = array.map((data) => JSON.stringify(data.query));
    downloadContent("SQL-Queries", arrayQueries);
    return arrayQueries;
  }
  return arrayQueries;
});

testButton = document.getElementById("testButton").addEventListener("click", () => {
  if (typeof arrayQueries !== "undefined") {
  }
});

////////////// Customer Deletion END ///////////////////
////////////////////////////////////////////////////
