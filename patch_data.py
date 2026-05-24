import re

with open("src/data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Add poezda and spyfall to GAMES_DATA
games_data_match = re.search(r'export const GAMES_DATA = \{', content)
if games_data_match:
    insert_pos = games_data_match.end()
    new_games = """
    "poezda": {
        thumbnail: "/poezda.mp4",
        media: ["/poezda.mp4"],
        path: "https://github.com/megumi-joy/lab/tree/main/%D0%BF%D0%BE%D0%B5%D0%B7%D0%B4%D0%B0",
        tags: ["Web", "Godot", "Trains"],
        status: "playable",
        progress: 100,
        translations: {
            en: {
                title: "Поезда (Trains)",
                description: "A fun train simulator.",
                gdd: { overview: "Drive trains.", mechanics: ["Driving"], features: ["Trains"] }
            },
            es: { title: "Поезда (Trenes)", description: "Simulador de trenes.", gdd: { overview: "Conduce trenes.", mechanics: [], features: [] } },
            ru: { title: "Поезда", description: "Симулятор поездов.", gdd: { overview: "Водите поезда.", mechanics: [], features: [] } },
            uk: { title: "Потяги", description: "Симулятор потягів.", gdd: { overview: "Керуйте потягами.", mechanics: [], features: [] } },
            ca: { title: "Поезда (Trens)", description: "Simulador de trens.", gdd: { overview: "Condueix trens.", mechanics: [], features: [] } }
        }
    },
    "spyfall": {
        thumbnail: "/spyfall.mp4",
        media: ["/spyfall.mp4"],
        path: "https://spyfall-playhouse.lovable.dev",
        tags: ["React", "Multiplayer", "Supabase"],
        status: "live",
        progress: 100,
        translations: {
            en: {
                title: "Spyfall Playhouse",
                description: "A real-time multiplayer social deduction game.",
                gdd: { overview: "Find the spy or guess the location.", mechanics: ["Social Deduction", "Real-time"], features: ["Supabase", "React"] }
            },
            es: { title: "Spyfall Playhouse", description: "Juego de deducción social multijugador.", gdd: { overview: "Encuentra al espía.", mechanics: [], features: [] } },
            ru: { title: "Spyfall Playhouse", description: "Многопользовательская социальная дедуктивная игра.", gdd: { overview: "Найди шпиона.", mechanics: [], features: [] } },
            uk: { title: "Spyfall Playhouse", description: "Багатокористувацька соціальна гра.", gdd: { overview: "Знайди шпигуна.", mechanics: [], features: [] } },
            ca: { title: "Spyfall Playhouse", description: "Joc de deducció social multijugador.", gdd: { overview: "Troba l'espia.", mechanics: [], features: [] } }
        }
    },
"""
    content = content[:insert_pos] + new_games + content[insert_pos:]

# Update magicBallsAdventure and lowPolyCityDelivery
content = re.sub(r'thumbnail:\s*"/portfolio/games/magicballs/gameplay\.gif"', 'thumbnail: "/magicballs.mp4"', content)
content = re.sub(r'thumbnail:\s*"/portfolio/games/lowpoly/gameplay\.gif"', 'thumbnail: "/lowpoly.mp4"', content)

with open("src/data.js", "w", encoding="utf-8") as f:
    f.write(content)
