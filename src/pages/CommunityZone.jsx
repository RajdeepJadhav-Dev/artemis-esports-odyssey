import { motion } from "framer-motion";
import { useState } from "react";
import { MessageSquare, TrendingUp, Trophy, Users, ThumbsUp, MessageCircle, Eye, Star, Crown, Award, Flame } from "lucide-react";

const CommunityZone = () => {
  const [activeTab, setActiveTab] = useState("polls");
  const [selectedPoll, setSelectedPoll] = useState(null);

  // Sample data
  const polls = [
    {
      id: 1,
      question: "Who is the best AWPer in 2024?",
      options: [
        { text: "S1mple", votes: 2847, percentage: 42 },
        { text: "ZywOo", votes: 2315, percentage: 34 },
        { text: "m0NESY", votes: 1089, percentage: 16 },
        { text: "dev1ce", votes: 544, percentage: 8 }
      ],
      totalVotes: 6795,
      timeLeft: "2 days left",
      category: "Players"
    },
    {
      id: 2,
      question: "Most exciting tournament format?",
      options: [
        { text: "Single Elimination", votes: 1234, percentage: 28 },
        { text: "Double Elimination", votes: 2156, percentage: 49 },
        { text: "Swiss System", votes: 876, percentage: 20 },
        { text: "Round Robin", votes: 134, percentage: 3 }
      ],
      totalVotes: 4400,
      timeLeft: "5 days left",
      category: "Tournament"
    },
    {
      id: 3,
      question: "Which team will win the next Major?",
      options: [
        { text: "Natus Vincere", votes: 1567, percentage: 35 },
        { text: "FaZe Clan", votes: 1245, percentage: 28 },
        { text: "Vitality", votes: 1112, percentage: 25 },
        { text: "G2 Esports", votes: 534, percentage: 12 }
      ],
      totalVotes: 4458,
      timeLeft: "1 day left",
      category: "Teams"
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Analysis: Why FaZe's new roster is dominating",
      author: "ProStrat_Analyst",
      replies: 156,
      views: 3421,
      likes: 289,
      timeAgo: "2 hours ago",
      category: "Strategy",
      trending: true
    },
    {
      id: 2,
      title: "Unpopular Opinion: Nuke needs a complete rework",
      author: "MapDesign_Guru",
      replies: 234,
      views: 5677,
      likes: 412,
      timeAgo: "5 hours ago",
      category: "Maps",
      trending: true
    },
    {
      id: 3,
      title: "Highlight reel: Best clutches from IEM Katowice",
      author: "ClipMaster_99",
      replies: 89,
      views: 2156,
      likes: 178,
      timeAgo: "1 day ago",
      category: "Highlights"
    },
    {
      id: 4,
      title: "How to improve your spray control on AK-47",
      author: "AimCoach_Pro",
      replies: 67,
      views: 1845,
      likes: 134,
      timeAgo: "1 day ago",
      category: "Training"
    },
    {
      id: 5,
      title: "Tournament predictions: Who's making it to playoffs?",
      author: "ESports_Oracle",
      replies: 201,
      views: 4532,
      likes: 356,
      timeAgo: "2 days ago",
      category: "Tournament"
    }
  ];

  const hallOfFame = [
    {
      id: 1,
      title: "S1mple's 1v5 Ace Clutch",
      player: "S1mple",
      event: "IEM Katowice 2021",
      views: 2847612,
      rating: 4.9,
      date: "March 2021",
      highlight: "One of the greatest clutches in CS:GO history"
    },
    {
      id: 2,
      title: "coldzera's Jumping AWP Double Kill",
      player: "coldzera",
      event: "MLG Columbus 2016",
      views: 5632891,
      rating: 5.0,
      date: "April 2016",
      highlight: "The most iconic play in Counter-Strike history"
    },
    {
      id: 3,
      title: "dev1ce 4x Major Champion",
      player: "dev1ce",
      event: "Career Achievement",
      views: 1234567,
      rating: 4.8,
      date: "2015-2021",
      highlight: "The most decorated player in Major history"
    },
    {
      id: 4,
      title: "NiKo's Deagle Ace on Inferno",
      player: "NiKo",
      event: "StarSeries 2017",
      views: 3421890,
      rating: 4.9,
      date: "October 2017",
      highlight: "Pure aim dominance with the Desert Eagle"
    }
  ];

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
            Community <span className="text-neon-magenta">Zone</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Join the conversation, vote, and celebrate greatness
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="glass-panel p-2">
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveTab("polls")}
                className={`py-3 px-6 rounded-lg font-semibold transition-all ${
                  activeTab === "polls"
                    ? "bg-primary/20 text-primary border border-primary/40"
                    : "text-muted-foreground hover:bg-primary/10"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="hidden sm:inline">Polls</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("discussions")}
                className={`py-3 px-6 rounded-lg font-semibold transition-all ${
                  activeTab === "discussions"
                    ? "bg-primary/20 text-primary border border-primary/40"
                    : "text-muted-foreground hover:bg-primary/10"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <span className="hidden sm:inline">Discussions</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("hall-of-fame")}
                className={`py-3 px-6 rounded-lg font-semibold transition-all ${
                  activeTab === "hall-of-fame"
                    ? "bg-primary/20 text-primary border border-primary/40"
                    : "text-muted-foreground hover:bg-primary/10"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span className="hidden sm:inline">Hall of Fame</span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Polls Section */}
        {activeTab === "polls" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {polls.map((poll, index) => (
              <motion.div
                key={poll.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel-hover p-6"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-neon-cyan px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                        {poll.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{poll.timeLeft}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">
                      {poll.question}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{poll.totalVotes.toLocaleString()} votes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {poll.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedPoll(poll.id)}
                      className="w-full text-left group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{option.text}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-neon-cyan font-bold">{option.percentage}%</span>
                          <span className="text-sm text-muted-foreground">
                            ({option.votes.toLocaleString()})
                          </span>
                        </div>
                      </div>
                      <div className="relative h-3 bg-primary/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${option.percentage}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 + i * 0.1 }}
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full group-hover:opacity-80 transition-opacity"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Discussions Section */}
        {activeTab === "discussions" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {discussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="glass-panel-hover p-6 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {discussion.trending && (
                        <Flame className="w-4 h-4 text-accent" />
                      )}
                      <span className="text-xs font-semibold text-neon-cyan px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                        {discussion.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>by <span className="text-foreground font-semibold">{discussion.author}</span></span>
                      <span>•</span>
                      <span>{discussion.timeAgo}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>{discussion.replies} replies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{discussion.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{discussion.likes} likes</span>
                  </div>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="mt-4 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Hall of Fame Section */}
        {activeTab === "hall-of-fame" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hallOfFame.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-panel-hover p-6 cursor-pointer group relative overflow-hidden"
                >
                  {/* Crown Badge for top rated */}
                  {item.rating === 5.0 && (
                    <div className="absolute top-4 right-4">
                      <Crown className="w-8 h-8 text-accent" />
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-8 h-8 text-neon-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold text-neon-cyan mb-1">
                        {item.title}
                      </h3>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div>{item.player}</div>
                        <div>{item.event}</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 italic">
                    "{item.highlight}"
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{(item.views / 1000000).toFixed(1)}M</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-accent" />
                        <span className="font-bold text-accent">{item.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {item.date}
                    </div>
                  </div>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="mt-4 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left"
                  />
                </motion.div>
              ))}
            </div>

            {/* Legend Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 glass-panel p-8 text-center"
            >
              <Award className="w-16 h-16 text-neon-magenta mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold mb-2">
                Submit Your <span className="text-neon-magenta">Legendary Moment</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Have an incredible play that deserves to be immortalized? Share it with the community!
              </p>
              <button className="px-8 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/40 rounded-xl font-semibold transition-all">
                Submit Highlight
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CommunityZone;