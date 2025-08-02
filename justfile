# Start both frontend and backend
start:
    @echo "Starting backend and frontend..."
    cd backend && fastapi dev app/main.py --port 8000 &
    cd frontend && pnpm dev &
    @echo "Backend running on http://localhost:8000"
    @echo "Frontend running on http://localhost:3000"

# Stop all processes
stop:
    @echo "Stopping all processes..."
    pkill -f "fastapi"
    pkill -f "next-dev"
    @echo "All processes stopped"

# Install dependencies
install:
    cd backend && uv sync
    cd frontend && pnpm install

# Development setup
setup: install
    cd backend && pre-commit install
    @echo "Setup complete!"

# Check running processes
status:
    @echo "Checking running processes..."
    @lsof -i :8000 || echo "Port 8000 is free"
    @lsof -i :3000 || echo "Port 3000 is free"
    @ps aux | grep -E "(fastapi|next)" | grep -v grep || echo "No dev processes running"
