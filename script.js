<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valentine's Card</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #faf3f3;
            overflow: hidden;
            font-family: 'Arial', sans-serif;
        }
        .card {
            width: 300px;
            height: 200px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: transform 1s ease;
        }
        .card.open {
            transform: rotateY(180deg);
        }
        .message {
            display: none;
            position: absolute;
            text-align: center;
        }
        .message p {
            font-size: 20px;
            color: #d16b86;
        }
        .buttons {
            margin-top: 10px;
        }
        button {
            background-color: #ffb3c6;
            border: none;
            padding: 10px;
            margin: 5px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
        }
        button:hover {
            background-color: #ff85a2;
        }
        .hearts-container {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            display: none;
        }
        .heart {
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: pink;
            clip-path: polygon(50% 0%, 100% 40%, 80% 100%, 50% 80%, 20% 100%, 0% 40%);
            animation: float 3s linear infinite;
        }
        @keyframes float {
            0% { transform: translateY(100vh) scale(1); }
            100% { transform: translateY(-10vh) scale(1.5); }
        }
        .scary-text {
            font-size: 30px;
            font-family: 'Creepster', cursive;
            color: red;
            display: none;
        }
    </style>
</head>
<body>
    <div class="card" id="card" onclick="openCard()">
        <div class="cover">Click to Open</div>
        <div class="message" id="message">
            <p>Will you be my valentine, Paulo?</p>
            <div class="buttons">
                <button onclick="acceptValentine(event)">Yes</button>
                <button onclick="declineValentine(event)">No</button>
            </div>
        </div>
    </div>
    <div class="hearts-container" id="hearts"></div>
    <div class="scary-text" id="scary-text">No is not an option.</div>
    
    <script>
        function openCard() {
            document.getElementById("card").classList.add("open");
            setTimeout(() => {
                document.getElementById("message").style.display = "block";
            }, 500);
        }

        function acceptValentine(event) {
            event.stopPropagation();
            document.getElementById("hearts").style.display = "block";
            for (let i = 0; i < 50; i++) {
                let heart = document.createElement("div");
                heart.classList.add("heart");
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.animationDuration = Math.random() * 2 + 3 + "s";
                document.getElementById("hearts").appendChild(heart);
            }
        }
        
        function declineValentine(event) {
            event.stopPropagation();
            document.getElementById("scary-text").style.display = "block";
            document.getElementById("message").style.display = "none";
            document.getElementById("card").style.display = "none";
        }
    </script>
</body>
</html>

