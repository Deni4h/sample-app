module.exports = {
  apps: [
    {
      name: "frontend",
      script: "npm",
      args: "start",
      cwd: "./frontend", // Lokasi folder frontend
    },
    {
      name: "backend",
      script: "npm",
      args: "start",
      cwd: "./backend", // Lokasi folder backend
    },
  ],
};
