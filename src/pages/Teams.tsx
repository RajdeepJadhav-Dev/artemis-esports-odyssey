import { motion } from "framer-motion";
import { Trophy, Users, TrendingUp, MapPin } from "lucide-react";
import teamsData from "@/data/teams.json";

const Teams = () => {
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
            <span className="text-neon-purple">Elite</span> Teams
          </h1>
          <p className="text-xl text-muted-foreground">
            United in pursuit of victory
          </p>
        </motion.div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamsData.map((team, index) => (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel-hover p-8 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-6xl animate-glow">{team.logo}</div>
                  <div>
                    <h2 className="text-3xl font-display font-bold text-neon-cyan mb-1">
                      {team.name}
                    </h2>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{team.region}</span>
                      <span>•</span>
                      <span>Est. {team.founded}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 glass-panel rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{team.stats.wins}</div>
                  <div className="text-xs text-muted-foreground">Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">{team.stats.losses}</div>
                  <div className="text-xs text-muted-foreground">Losses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{team.stats.winRate}%</div>
                  <div className="text-xs text-muted-foreground">Win Rate</div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 text-sm font-semibold text-primary mb-3">
                  <Trophy className="w-4 h-4" />
                  <span>Major Achievements</span>
                </div>
                <ul className="space-y-2">
                  {team.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="text-sm text-muted-foreground flex items-start"
                    >
                      <span className="text-secondary mr-2">•</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Roster */}
              <div>
                <div className="flex items-center space-x-2 text-sm font-semibold text-secondary mb-3">
                  <Users className="w-4 h-4" />
                  <span>Active Roster</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {team.roster.map((player, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 text-sm glass-panel rounded-full cursor-pointer hover:bg-primary/10 transition-colors"
                    >
                      {player}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom Border Animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="mt-6 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
