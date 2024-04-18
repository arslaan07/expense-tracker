document.addEventListener("DOMContentLoaded", function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    expenseForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const description = document.getElementById('description').value;
        console.log(description);
        const category = document.getElementById('category').value;
        console.log(category);
        const amount = document.getElementById('amount').value;
        console.log(amount);
        if(description && category && !isNaN(amount)) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${description}</td>
                                <td>${category}</td>
                                <td>${amount}</td>`;
            newRow.classList.add('expense-row');
            expenseList.appendChild(newRow);
            document.getElementById('description').value = '';
            document.getElementById('category').value = '';
            document.getElementById('amount').value = ''
        }
        else {
            alert('please fill all boxes');
        }

    })

});