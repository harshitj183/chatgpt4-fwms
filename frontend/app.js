document.getElementById('donation-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const donor = document.getElementById('donor').value;
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;
    const edibility = document.getElementById('edibility').value;

    const donation = {
        donor,
        food,
        quantity,
        edibility
    };

    try {
        const response = await fetch('http://localhost:3000/donations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donation)
        });
        const data = await response.json();
        alert('Donation submitted successfully!');
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting donation');
    }
});
