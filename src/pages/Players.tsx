import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, Filter, X, Trophy } from "lucide-react";

// Sample data - replace with your actual data
const samplePlayers = [
  {
    id: 1,
    name: "S1mple",
    country: "Ukraine",
    role: "AWPer",
    team: "Natus Vincere",
    rating: 1.32,
    stats: { matches: 247, wins: 156, kdRatio: 1.28 },
    achievements: ["Major Winner 2021", "HLTV #1 Player 2021", "Intel Grand Slam"]
  },
  {
    id: 2,
    name: "ZywOo",
    country: "France",
    role: "AWPer",
    team: "Vitality",
    rating: 1.30,
    stats: { matches: 198, wins: 127, kdRatio: 1.31 },
    achievements: ["Major Finalist 2023", "HLTV #1 Player 2023", "Blast Premier Winner"]
  },
  {
    id: 3,
    name: "NiKo",
    country: "Bosnia",
    role: "Rifler",
    team: "G2 Esports",
    rating: 1.24,
    stats: { matches: 312, wins: 189, kdRatio: 1.19 },
    achievements: ["IEM Champion", "HLTV Top 5 Player", "EPL Winner"]
  },
  {
    id: 4,
    name: "dev1ce",
    country: "Denmark",
    role: "AWPer",
    team: "Astralis",
    rating: 1.21,
    stats: { matches: 421, wins: 278, kdRatio: 1.23 },
    achievements: ["4x Major Winner", "HLTV #1 Player 2020", "Intel Grand Slam x3"]
  },
  {
    id: 5,
    name: "electronic",
    country: "Russia",
    role: "Rifler",
    team: "Natus Vincere",
    rating: 1.18,
    stats: { matches: 289, wins: 176, kdRatio: 1.15 },
    achievements: ["Major Winner 2021", "HLTV Top 10 Player", "ESL Pro League Champion"]
  },
  {
    id: 6,
    name: "Twistzz",
    country: "Canada",
    role: "Rifler",
    team: "FaZe Clan",
    rating: 1.22,
    stats: { matches: 267, wins: 161, kdRatio: 1.20 },
    achievements: ["Major Winner 2022", "IEM Champion", "HLTV Top 10 Player"]
  }
];

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    role: "all",
    country: "all",
    ratingMin: 0,
    team: "all"
  });

  // Extract unique values for filter dropdowns
  const uniqueRoles = useMemo(() => 
    [...new Set(samplePlayers.map(p => p.role))], []);
  const uniqueCountries = useMemo(() => 
    [...new Set(samplePlayers.map(p => p.country))].sort(), []);
  const uniqueTeams = useMemo(() => 
    [...new Set(samplePlayers.map(p => p.team))].sort(), []);

  // Filter logic
  const filteredPlayers = useMemo(() => {
    return samplePlayers.filter(player => {
      const matchesSearch = 
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.country.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRole = filters.role === "all" || player.role === filters.role;
      const matchesCountry = filters.country === "all" || player.country === filters.country;
      const matchesTeam = filters.team === "all" || player.team === filters.team;
      const matchesRating = player.rating >= filters.ratingMin;

      return matchesSearch && matchesRole && matchesCountry && matchesTeam && matchesRating;
    });
  }, [searchQuery, filters]);

  const resetFilters = () => {
    setFilters({
      role: "all",
      country: "all",
      ratingMin: 0,
      team: "all"
    });
    setSearchQuery("");
  };

  const activeFilterCount = Object.values(filters).filter(
    (v, i) => (i === 2 ? v > 0 : v !== "all")
  ).length;

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

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="glass-panel p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search players, teams, countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-background/50 border border-primary/20 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Filter Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-xl font-semibold transition-all relative"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-neon-magenta rounded-full flex items-center justify-center text-xs font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            {/* Filter Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 pt-6 border-t border-primary/10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Role Filter */}
                      <div>
                        <label className="block text-sm font-semibold text-muted-foreground mb-2">
                          Role
                        </label>
                        <select
                          value={filters.role}
                          onChange={(e) => setFilters({ ...filters, role: e.target.value })}
                          className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                        >
                          <option value="all">All Roles</option>
                          {uniqueRoles.map(role => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </select>
                      </div>

                      {/* Country Filter */}
                      <div>
                        <label className="block text-sm font-semibold text-muted-foreground mb-2">
                          Country
                        </label>
                        <select
                          value={filters.country}
                          onChange={(e) => setFilters({ ...filters, country: e.target.value })}
                          className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                        >
                          <option value="all">All Countries</option>
                          {uniqueCountries.map(country => (
                            <option key={country} value={country}>{country}</option>
                          ))}
                        </select>
                      </div>

                      {/* Team Filter */}
                      <div>
                        <label className="block text-sm font-semibold text-muted-foreground mb-2">
                          Team
                        </label>
                        <select
                          value={filters.team}
                          onChange={(e) => setFilters({ ...filters, team: e.target.value })}
                          className="w-full px-4 py-2 bg-background/50 border border-primary/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                        >
                          <option value="all">All Teams</option>
                          {uniqueTeams.map(team => (
                            <option key={team} value={team}>{team}</option>
                          ))}
                        </select>
                      </div>

                      {/* Rating Filter */}
                      <div>
                        <label className="block text-sm font-semibold text-muted-foreground mb-2">
                          Min Rating: {filters.ratingMin.toFixed(2)}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="1.5"
                          step="0.05"
                          value={filters.ratingMin}
                          onChange={(e) => setFilters({ ...filters, ratingMin: parseFloat(e.target.value) })}
                          className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
                        />
                      </div>
                    </div>

                    {/* Reset Button */}
                    {activeFilterCount > 0 && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={resetFilters}
                        className="mt-4 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Reset All Filters
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Results Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 text-muted-foreground"
        >
          Showing <span className="text-neon-cyan font-semibold">{filteredPlayers.length}</span> of {samplePlayers.length} players
        </motion.div>

        {/* Players Grid */}
        <AnimatePresence mode="popLayout">
          {filteredPlayers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlayers.map((player, index) => (
                <motion.div
                  key={player.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
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
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No players found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filters</p>
              <button
                onClick={resetFilters}
                className="px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-xl font-semibold transition-all"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchFilter;