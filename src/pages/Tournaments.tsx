import { motion } from "framer-motion";
import { Calendar, Users, Trophy, DollarSign } from "lucide-react";
import tournamentsData from "@/data/tournaments.json";

const Tournaments = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-primary/20 text-primary border-primary/40';
      case 'upcoming':
        return 'bg-accent/20 text-accent border-accent/40';
      case 'completed':
        return 'bg-muted/20 text-muted-foreground border-muted/40';
      default:
        return 'bg-muted/20 text-muted-foreground';
    }
  };

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
            <span className="text-neon-cyan">Tournaments</span> & Events
          </h1>
          <p className="text-xl text-muted-foreground">
            Epic competitions where champions are forged
          </p>
        </motion.div>

        {/* Timeline View */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {tournamentsData.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-8 ${
                index % 2 === 0 ? 'left-6 md:right-0 md:left-auto' : 'left-6 md:left-0'
              } w-5 h-5 rounded-full bg-primary border-4 border-background z-10`} 
                   style={{ boxShadow: '0 0 20px hsl(var(--neon-cyan))' }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-panel-hover p-6 ml-16 md:ml-0"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{tournament.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(tournament.status)}`}>
                    {tournament.status}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold mb-2 text-neon-cyan">
                  {tournament.name}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {tournament.description}
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-muted-foreground text-xs">Start Date</div>
                      <div className="font-semibold">
                        {new Date(tournament.startDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <div>
                      <div className="text-muted-foreground text-xs">End Date</div>
                      <div className="font-semibold">
                        {new Date(tournament.endDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-muted-foreground text-xs">Prize Pool</div>
                      <div className="font-semibold text-secondary">{tournament.prizePool}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-accent" />
                    <div>
                      <div className="text-muted-foreground text-xs">Teams</div>
                      <div className="font-semibold">{tournament.teams}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
