    const width = 30;
    const height = 20;
    let snake = [{ x: 5, y: 5 }];
    let direction = { x: 1, y: 0 };
    let food = spawnFood();
    let gameOver = false;

    function spawnFood() {
      let pos;
      do {
        pos = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height),
        };
      } while (snake.some(s => s.x === pos.x && s.y === pos.y));
      return pos;
    }

    function draw() {
      let output = '';
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if (x === food.x && y === food.y) {
            output += '@';
          } else if (snake.some(s => s.x === x && s.y === y)) {
            output += '#';
          } else {
            output += '.';
          }
        }
        output += '\n';
      }
      document.getElementById('game').textContent = output;
    }

    function update() {
      if (gameOver) return;

      const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

      // Check walls
      if (head.x < 0 || head.y < 0 || head.x >= width || head.y >= height ||
          snake.some(s => s.x === head.x && s.y === head.y)) {
        gameOver = true;
        alert("Game Over!");
        return;
      }

      snake.unshift(head);

      // Eat food
      if (head.x === food.x && head.y === food.y) {
        food = spawnFood();
      } else {
        snake.pop();
      }

      draw();
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' && direction.y === 0) direction = { x: 0, y: -1 };
      else if (e.key === 'ArrowDown' && direction.y === 0) direction = { x: 0, y: 1 };
      else if (e.key === 'ArrowLeft' && direction.x === 0) direction = { x: -1, y: 0 };
      else if (e.key === 'ArrowRight' && direction.x === 0) direction = { x: 1, y: 0 };
    });

    draw();
    setInterval(update, 150);