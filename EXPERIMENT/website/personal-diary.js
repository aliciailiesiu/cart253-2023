document.addEventListener('DOMContentLoaded', loadEntry);

        function saveEntry() {
            const diaryContent = document.getElementById('diary').innerHTML;
            localStorage.setItem('diaryEntry', diaryContent);
        }

        function loadEntry() {
            const savedEntry = localStorage.getItem('diaryEntry');
            if (savedEntry) {
                document.getElementById('diary').innerHTML = savedEntry;
            }
        }