import { motion } from "framer-motion";
import { Trophy, Target, TrendingUp } from "lucide-react";
import playersData from "@/data/players.json";

const Players = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Elite <span className="text-neon-magenta">Players</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Masters of precision and strategy
          </p>
        </motion.div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playersData.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel-hover p-6 cursor-pointer group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-neon-cyan mb-1">
                    {player.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{player.country}</span>
                    <span>•</span>
                    <span>{player.role}</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-display font-bold text-primary">
                    {player.rating}
                  </div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>

              {/* Team */}
              <div className="mb-4 pb-4 border-b border-primary/10">
                <div className="text-sm text-muted-foreground">Team</div>
                <div className="font-semibold text-lg">{player.team}</div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">{player.stats.matches}</div>
                  <div className="text-xs text-muted-foreground">Matches</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-secondary">{player.stats.wins}</div>
                  <div className="text-xs text-muted-foreground">Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-accent">{player.stats.kdRatio}</div>
                  <div className="text-xs text-muted-foreground">K/D</div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm font-semibold text-primary">
                  <Trophy className="w-4 h-4" />
                  <span>Key Achievements</span>
                </div>
                <ul className="space-y-1">
                  {player.achievements.slice(0, 3).map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="mt-4 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Players;
