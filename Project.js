// script.js
const menuToggle = document.getElementById('menuToggle');
const menuCard = document.getElementById('menuCard');
const commentToggle = document.getElementById('commentToggle');
const commentCard = document.getElementById('commentCard');
const foodAtRoomToggle = document.getElementById('foodAtRoomToggle');
const foodAtRoomCard = document.getElementById('foodAtRoomCard');
const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('name');
const roomNoInput = document.getElementById('roomNo');
const doctorSlipInput = document.getElementById('doctorSlip');
const commentTextarea = document.querySelector('#commentCard textarea');
const menuData = [
    {
        day: 'Monday',
        menu: 'ALOO PARATHA + BUTTER + CORN FLAKES + CHANA SPROUTS',
        
    },
    {
        day: 'Tuesday',
        menu: 'MAGGIE + BUN MAKKHAN + CHAI + MANGO SHAKE + SHIKANJI + COLD COFFEE + CHHOLE CHAWAL + PURI SABJI + LASSI',
        
    },
    {
        day: 'Wednesday',
        menu: 'MOONG DAL CHEELA/MIXED PARATHA + CHUTNEY + BUTTER+CORN FLAKES+MOONG SPROUTS',
        
    },
    {
        day: 'Thursday',
        menu: 'IDLI + SAMBHAR + COCONUT CHUTNEY + DALIA + BOILED CHANA SALTED + BANANA/GUAVA/ORANGES',
        
    },
    {
        day: 'Friday',
        menu: 'PANEER PARATHA + BUTTER + CORN FLAKES + CHANA',
        
    },
    {
        day: 'Saturday',
        menu: 'METHI PURI + BHANDARE WALE ALOO + JALEBI + NAMKEEN DALIYA + CHANA SPROUTS',
        
    },
    {
        day: 'Sunday',
        menu: 'MASALA DOSA + SAMBHAR + COCONUT CHUTNEY + MOONG SPROUTS',
        
    }
];

function toggleCard(card, isOpen) {
    card.style.display = isOpen ? 'block' : 'none';
    document.querySelectorAll('.card').forEach(c => {
        if (c !== card) {
            c.style.display = 'none';
        }
    });
}

menuToggle.addEventListener('click', () => {
    toggleCard(menuCard, !menuCard.style.display || menuCard.style.display === 'none');
    populateMenuTable();
});

commentToggle.addEventListener('click', () => {
    toggleCard(commentCard, !commentCard.style.display || commentCard.style.display === 'none');
});

foodAtRoomToggle.addEventListener('click', () => {
    toggleCard(foodAtRoomCard, !foodAtRoomCard.style.display || foodAtRoomCard.style.display === 'none');
});

function validateForm() {
    const isFormValid = nameInput.value.trim() !== '' && roomNoInput.value.trim() !== '';
    submitBtn.disabled = !isFormValid;
}

nameInput.addEventListener('input', validateForm);
roomNoInput.addEventListener('input', validateForm);

commentTextarea.addEventListener('input', () => {
    if (commentTextarea.value.trim() === '') {
        commentTextarea.placeholder = 'Write your review';
    } else {
        commentTextarea.placeholder = '';
    }
});

function populateMenuTable() {
    const menuTableBody = document.querySelector('#menuCard tbody');
    menuTableBody.innerHTML = '';

    menuData.forEach(item => {
        const row = document.createElement('tr');

        const dayCell = document.createElement('td');
        dayCell.textContent = item.day;
        row.appendChild(dayCell);

        const breakfastCell = document.createElement('td');
        breakfastCell.textContent = item.breakfast;
        row.appendChild(breakfastCell);

        const lunchCell = document.createElement('td');
        lunchCell.textContent = item.lunch;
        row.appendChild(lunchCell);

        const snacksCell = document.createElement('td');
        snacksCell.textContent = item.snacks;
        row.appendChild(snacksCell);

        const menuCell = document.createElement('td');
        menuCell.textContent = item.menu;
        row.appendChild(menuCell);

        menuTableBody.appendChild(row);
    });
}