# Hackathon Booster
A Python toolkit to boost your hackathon productivity by providing ready-to-use components and utilities.

## Setup

### Option 1: Local Setup with UV
1. Install UV package manager:
```bash
pip install uv
```

2. Create and activate virtual environment:
```bash
uv sync
source .venv/bin/activate
```

3. Install pre-commit hooks:
```bash
pre-commit install
```

### Option 2: Docker Setup
1. Build and run with Docker Compose:
```bash
docker compose up
```

Available services:
- Python environment with all dependencies
- PostgreSQL database (credentials: hackathon/hackathon)
- ChromaDB for vector storage (optional - uncomment in docker-compose.yml)
- GPU support (optional - uncomment NVIDIA configuration in docker-compose.yml)

Common Docker commands:
- Run Python interpreter: `docker compose up`
- Run specific script: `docker compose run app python your_script.py`
- Run FastAPI server: `docker compose run app uvicorn main:app --host 0.0.0.0 --port 8000 --reload`
- Access PostgreSQL: `docker compose exec postgres psql -U hackathon -d hackathon`

Database connection details:
- Host: localhost
- Port: 5432
- Database: hackathon
- Username: hackathon
- Password: hackathon

## Customizing Dependencies
Dependencies are organized by category in `pyproject.toml` (Core AI/ML, NLP, Computer Vision, etc.). Comment out any packages you don't need for your project.

## Usage Examples
Check out the `examples/` directory for sample code and usage examples of different components.

## Development Features
The project uses pre-commit hooks to maintain code quality:
- Ruff for linting and code formatting
- mypy for type checking

These hooks run automatically when you commit changes to ensure consistent code quality.

## License
See the LICENSE file for details.