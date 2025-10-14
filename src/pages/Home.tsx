import { motion } from "framer-motion";
import { ChevronRight, Play, Calendar, Trophy, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import matchesData from "@/data/matches.json";
import tournamentsData from "@/data/tournaments.json";

const Home = () => {
  const featuredMatches = matchesData.filter(m => m.featured);
  const upcomingTournaments = tournamentsData.filter(t => t.status === "ongoing" || t.status === "upcoming").slice(0, 3);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-8xl mb-6 animate-float"
            >
              🏹
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
              <span className="text-neon-cyan">ARTEMIS</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
            >
              Where Precision Meets Glory in the{" "}
              <span className="text-neon-magenta font-semibold">Esports Odyssey</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/tournaments" className="btn-hero flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Explore Tournaments</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              
              <Link to="/matches" className="btn-secondary-hero flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Matches</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-primary opacity-50 text-sm">Scroll to explore</div>
        </motion.div>
      </section>

      {/* Featured Matches Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Featured <span className="text-neon-cyan">Matches</span>
            </h2>
            <p className="text-muted-foreground text-lg">Epic battles that defined champions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass-panel-hover p-6 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-muted-foreground">{match.tournament}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    match.status === 'completed' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'
                  }`}>
                    {match.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex-1 text-center">
                    <div className="text-4xl mb-2">{match.team1.logo}</div>
                    <div className="font-semibold text-sm">{match.team1.name}</div>
                    {match.team1.score !== null && (
                      <div className="text-2xl font-bold text-neon-cyan mt-2">{match.team1.score}</div>
                    )}
                  </div>

                  <div className="text-xl font-bold text-muted-foreground px-4">VS</div>

                  <div className="flex-1 text-center">
                    <div className="text-4xl mb-2">{match.team2.logo}</div>
                    <div className="font-semibold text-sm">{match.team2.name}</div>
                    {match.team2.score !== null && (
                      <div className="text-2xl font-bold text-neon-magenta mt-2">{match.team2.score}</div>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-primary/10">
                  <div className="flex items-center justify-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(match.date).toLocaleDateString()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/matches" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <span>View All Matches</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Active <span className="text-neon-magenta">Tournaments</span>
            </h2>
            <p className="text-muted-foreground text-lg">Where legends compete for glory</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-panel-hover p-6 cursor-pointer"
              >
                <div className="text-5xl mb-4 animate-glow">{tournament.icon}</div>
                
                <h3 className="text-xl font-display font-bold mb-2 text-neon-cyan">
                  {tournament.name}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {tournament.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Prize Pool</span>
                    <span className="font-bold text-secondary">{tournament.prizePool}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Teams</span>
                    <span className="font-bold">{tournament.teams}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      tournament.status === 'ongoing' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'
                    }`}>
                      {tournament.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/tournaments" className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors">
              <span>View All Tournaments</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-panel p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-display font-bold text-neon-cyan mb-2">500+</div>
                <div className="text-muted-foreground">Pro Players</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-5xl font-display font-bold text-neon-magenta mb-2">50+</div>
                <div className="text-muted-foreground">Elite Teams</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-5xl font-display font-bold text-neon-purple mb-2">$5M+</div>
                <div className="text-muted-foreground">Prize Pools</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
