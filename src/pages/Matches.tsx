import { motion } from "framer-motion";
import { Calendar, Filter, Clock, Trophy } from "lucide-react";
import { useState } from "react";
import matchesData from "@/data/matches.json";

const Matches = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'upcoming'>('all');

  const filteredMatches = matchesData.filter(match => {
    if (filter === 'all') return true;
    return match.status === filter;
  });

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 text-center">
            Match <span className="text-neon-cyan">History</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-8">
            Every battle, every victory, every legend
          </p>

          {/* Filters */}
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2 glass-panel px-4 py-2 rounded-lg">
              <Filter className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Filter:</span>
            </div>
            
            {['all', 'completed', 'upcoming'].map((filterOption) => (
              <motion.button
                key={filterOption}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(filterOption as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === filterOption
                    ? 'bg-primary text-primary-foreground'
                    : 'glass-panel hover:border-primary/40'
                }`}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Matches List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredMatches.map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel-hover p-6 cursor-pointer"
            >
              {/* Tournament & Status */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{match.tournament}</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground">
                    {new Date(match.date).toLocaleDateString()} • {new Date(match.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    match.status === 'completed' 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-secondary/20 text-secondary'
                  }`}>
                    {match.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
              </div>

              {/* Match Details */}
              <div className="flex items-center justify-between">
                {/* Team 1 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 text-center p-4 glass-panel rounded-lg"
                >
                  <div className="text-5xl mb-3">{match.team1.logo}</div>
                  <div className="font-display font-bold text-lg mb-1">{match.team1.name}</div>
                  {match.team1.score !== null && (
                    <div className={`text-4xl font-display font-bold ${
                      match.team1.score > (match.team2.score || 0) ? 'text-neon-cyan' : 'text-muted-foreground'
                    }`}>
                      {match.team1.score}
                    </div>
                  )}
                  {match.status === 'upcoming' && (
                    <div className="text-sm text-muted-foreground mt-2">Ready</div>
                  )}
                </motion.div>

                {/* VS Divider */}
                <div className="px-8">
                  <div className="text-3xl font-display font-bold text-muted-foreground">
                    VS
                  </div>
                </div>

                {/* Team 2 */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 text-center p-4 glass-panel rounded-lg"
                >
                  <div className="text-5xl mb-3">{match.team2.logo}</div>
                  <div className="font-display font-bold text-lg mb-1">{match.team2.name}</div>
                  {match.team2.score !== null && (
                    <div className={`text-4xl font-display font-bold ${
                      match.team2.score > (match.team1.score || 0) ? 'text-neon-magenta' : 'text-muted-foreground'
                    }`}>
                      {match.team2.score}
                    </div>
                  )}
                  {match.status === 'upcoming' && (
                    <div className="text-sm text-muted-foreground mt-2">Ready</div>
                  )}
                </motion.div>
              </div>

              {/* Winner Indicator */}
              {match.status === 'completed' && match.team1.score !== null && match.team2.score !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center"
                >
                  <div className="inline-flex items-center space-x-2 px-4 py-2 glass-panel rounded-full">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">
                      Winner: {match.team1.score > match.team2.score ? match.team1.name : match.team2.name}
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredMatches.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Clock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">No matches found for this filter</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Matches;
