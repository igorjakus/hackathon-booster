# Hackathon Booster
A Python toolkit to boost your hackathon productivity by providing ready-to-use components and utilities.

## Setup

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