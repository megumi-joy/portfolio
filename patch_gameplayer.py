import re

with open("src/pages/GamePlayer.jsx", "r", encoding="utf-8") as f:
    content = f.read()

video_player = """
                    {game.path ? (
                        <iframe
                            src={game.path}
                            title={t.title}
                            className="w-full h-full border-0"
                            allow="autoplay; fullscreen; keyboard"
                        />
                    ) : game.thumbnail && game.thumbnail.endsWith('.mp4') ? (
                        <video
                            src={game.thumbnail}
                            className="w-full h-full object-cover"
                            autoPlay controls loop
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-100 dark:bg-slate-900">
                            <p>Interactive prototype coming soon.</p>
                        </div>
                    )}
"""

content = re.sub(r'\{game\.path \?\s*\(\s*<iframe[^>]+>\s*\)\s*:\s*\(\s*<div[^>]+>\s*<p>Interactive prototype coming soon\.</p>\s*</div>\s*\)\}', video_player.strip(), content, flags=re.DOTALL)

with open("src/pages/GamePlayer.jsx", "w", encoding="utf-8") as f:
    f.write(content)
