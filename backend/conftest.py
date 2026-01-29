import sys
from pathlib import Path

# Ajouter le répertoire backend au PYTHONPATH
backend_path = Path(__file__).parent
sys.path.insert(0, str(backend_path))