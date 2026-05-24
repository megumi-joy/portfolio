import re

with open("src/pages/Games.jsx", "r", encoding="utf-8") as f:
    content = f.read()

video_logic = """
                                    {game.thumbnail ? (
                                        game.thumbnail.endsWith('.mp4') ? (
                                            <video src={game.thumbnail} autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <img src={game.thumbnail} alt={game.t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        )
                                    ) : (
"""

content = content.replace("""
                                    {game.thumbnail ? (
                                        <img src={game.thumbnail} alt={game.t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
""".strip(), video_logic.strip())

with open("src/pages/Games.jsx", "w", encoding="utf-8") as f:
    f.write(content)
